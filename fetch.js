const fs = require("fs");
const https = require("https");
const process = require("process");

// ✅ Safe dotenv loading (won't crash if missing)
try {
  require("dotenv").config();
} catch (error) {
  console.log("dotenv not found, skipping...");
}

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

// ✅ Skip GitHub fetch if not enabled
if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    console.log("GitHub username not provided. Skipping GitHub fetch...");
  } else {
    console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

    const data = JSON.stringify({
      query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      edges {
        node {
          ... on Repository {
            name
            description
            forkCount
            stargazers {
              totalCount
            }
            url
            id
            diskUsage
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
}
`
    });

    const options = {
      hostname: "api.github.com",
      path: "/graphql",
      port: 443,
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN || ""}`,
        "User-Agent": "Node"
      }
    };

    const req = https.request(options, res => {
      let responseData = "";

      console.log(`GitHub statusCode: ${res.statusCode}`);
      if (res.statusCode !== 200) {
        console.log("GitHub request failed. Skipping...");
        return;
      }

      res.on("data", d => {
        responseData += d;
      });

      res.on("end", () => {
        fs.writeFile("./public/profile.json", responseData, err => {
          if (err) return console.log(err);
          console.log("Saved profile.json");
        });
      });
    });

    req.on("error", error => {
      console.log("GitHub fetch error:", error.message);
    });

    req.write(data);
    req.end();
  }
}

// ✅ Medium fetch (safe)
if (MEDIUM_USERNAME) {
  console.log(`Fetching Medium blogs for ${MEDIUM_USERNAME}`);

  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`Medium statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.log("Medium request failed. Skipping...");
      return;
    }

    res.on("data", d => {
      mediumData += d;
    });

    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, err => {
        if (err) return console.log(err);
        console.log("Saved blogs.json");
      });
    });
  });

  req.on("error", error => {
    console.log("Medium fetch error:", error.message);
  });

  req.end();
}