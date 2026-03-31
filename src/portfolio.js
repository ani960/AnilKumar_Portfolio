import emoji from "react-easy-emoji";

// ===== Required (fix errors) =====
const splashScreen = { enabled: false };
const illustration = { animated: true };
const educationInfo = { display: false };
const techStack = { viewSkillBars: false };
const achievementSection = { display: false };
const blogSection = { display: false };
const talkSection = { display: false };
const podcastSection = { display: false };
const twitterDetails = { display: false };
const resumeSection = { display: true };

// ===== Greeting =====
const greeting = {
  username: "Anil Kumar",
  title: "Hi, I'm Anil Kumar",
  subTitle: emoji(
    "Full Stack MERN Developer 🚀 with experience in building scalable web applications, REST APIs, and backend systems using .NET."
  ),

  // 🔥 IMPORTANT (your resume link)
  resumeLink: "/resume.pdf",

  displayGreeting: true
};

// ===== Social =====
const socialMediaLinks = {
  github: "https://github.com/ani960",
  linkedin: "https://www.linkedin.com/in/anil-kumar86",
  gmail: "aneelmalhi86@gmail.com",
  display: true
};

// ===== Skills =====
const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WITH MERN & .NET EXPERIENCE",
  skills: [
    emoji("⚡ Build scalable full-stack applications using MERN stack"),
    emoji("⚡ Develop REST APIs using Node.js, Express.js, and ASP.NET Core"),
    emoji("⚡ Create modern responsive UI using React.js, HTML5, CSS3"),
    emoji("⚡ Work with MongoDB, MySQL, and SQL Server"),
    emoji("⚡ Implement authentication and API integrations"),
    emoji("⚡ Follow clean and scalable architecture")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Express.js", fontAwesomeClassname: "fas fa-server" },
    { skillName: "ASP.NET Core", fontAwesomeClassname: "fas fa-code" },
    { skillName: "C#", fontAwesomeClassname: "fas fa-code" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "SQL Server", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Postman", fontAwesomeClassname: "fas fa-tools" },
    { skillName: "JWT", fontAwesomeClassname: "fas fa-lock" }
  ],
  display: true
};

// ===== Experience =====
const workExperiences = {
  display: true,
  experience: [
    {
      role: "MERN Stack Developer",
      company: "Integriti",
      companylogo: require("./assets/images/Integriti.png"),
      date: "2024 – Present",
      desc: "Working on full-stack applications using MERN stack.",
      descBullets: [
        "Developed UI using React.js",
        "Integrated frontend with backend APIs",
        "Worked with MongoDB and CRUD operations",
        "Maintained clean and scalable code"
      ]
    },
    {
      role: "Full Stack Developer (Intern)",
      company: "Buildd",
      companylogo: require("./assets/images/harvardLogo.png"),
      date: "2023 – 2024",
      desc: "Worked on banking web application.",
      descBullets: [
        "Built frontend using HTML, CSS, JavaScript",
        "Implemented backend with PHP & MySQL",
        "Handled validation and database integration"
      ]
    },
    {
      role: ".NET Developer",
      company: "AA Joyland Pvt Ltd",
      companylogo: require("./assets/images/joyland.png"),
      date: "2025 – Present",
      desc: "Backend development using .NET technologies.",
      descBullets: [
        "Developed APIs using ASP.NET Core",
        "Managed SQL Server database",
        "Debugged and improved performance"
      ]
    }
  ]
};

// ===== Projects =====
const bigProjects = {
  title: "Projects",
  subtitle: "COMING SOON",
  projects: [
    {
      projectName: "Projects Coming Soon",
      projectDesc:
        "Currently working on real-world applications. Projects will be added soon.",
      footerLink: []
    }
  ],
  display: true
};

// ===== Contact =====
const contactInfo = {
  title: "Contact Me",
  subtitle: "Let’s connect and build something great",
  email_address: "aneelmalhi86@gmail.com"
};

// ===== GitHub =====
const openSource = {
  showGithubProfile: "true",
  display: true
};

const isHireable = true;

// ===== EXPORTS =====
export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};