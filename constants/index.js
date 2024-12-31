import project1 from "../src/assets/projects/charitable.png";
import project2 from "../src/assets/projects/VentureVerse.jpg";
import project3 from "../src/assets/projects/ProjectSummit.png";
import project4 from "../src/assets/projects/portfolio.jpg";
import research from "../src/assets/projects/LLM.jpg";
import testAutomation from "../src/assets/projects/testAutomation.jpg"

export const HERO_CONTENT = `As a software engineer, I thrive on turning complex challenges into innovative solutions, blending web development expertise with a passion for GenAI and AI Agentic frameworks. My work spans crafting intuitive web platforms, developing backend systems, and researching AI applications in digital forensics. With hands-on experience in React, Spring Boot, Python, and Docker, I bring both technical depth and creative problem-solving to every project. My goal is to create impactful systems that not only solve problems but also redefine possibilities in tech.`;

export const ABOUT_TEXT = `I am a versatile software developer with expertise in full-stack web development, artificial intelligence, and digital forensics. My journey has been shaped by diverse projects, from donation management systems to AI-driven research in enhancing forensic processes. I am skilled in technologies such as React, Spring Boot, PostgreSQL, and Python. Beyond coding, I am passionate about solving real-world problems and continuously exploring emerging technologies.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Undergraduate Teaching Assistant",
    company: "University of Colombo School of Computing",
    description: `Assisting in teaching and mentoring students in the Data Structures and Algorithms (DSA) course. Responsibilities include conducting tutorial sessions and providing support to students in mastering complex topics.`,
    technologies: ["C"],
  },
  {
    year: "2023 November - 2024 May",
    role: "Software Engineering Intern",
    company: "Sysco LABS",
    description: `Improved web application performance by working on frontend features with React and Redux and writing unit tests using Jest. Helped optimize backend-for-frontend (BFF) services by resolving caching issues with Redis, removing outdated dependencies, and contributing to the migration to GraphQL. Also integrated the Lokalise library to enhance localization support.`,
    technologies: ["React.js", "Redux", "GraphQL", "Redis", "Jest", "Lokalise", "Docker"],
  },
  {
    year: "2024 June  – 2024 November",
    role: "Software Engineer (Part-Time)",
    company: "IntendAble",
    description: `Contributed to the development of a user registration system for a courier service platform, optimizing the onboarding experience for multiple user types. Leveraged technologies like PostgreSQL, Spring Boot, and AWS to design scalable, efficient backend services. Played a key role in ensuring system reliability and alignment with business needs, enhancing overall user satisfaction and operational efficiency.`,
    technologies: ["SpringBoot", "Postgres", "AWS"],
  },
]

export const PROJECTS = [
  {
    title: "ChaRiTABLE: Donation Management System",
    image: project1,
    description:
      "A centralized platform designed to simplify the donation process, enabling donors to contribute effortlessly while allowing beneficiaries to request what they need seamlessly. As an added functionality, developed an algorithm to locate the nearest donors within a 5km radius, sending high-priority notifications using the Google Maps API.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Google Maps API"],
    githublink:"https://github.com/kavishkafer/charitAble",
  },
  {
    title: "VentureVerse: Investor & Entrepreneur Platform",
    image: project2,
    description:
      "A platform connecting entrepreneurs and investors, featuring video pitching, chat functionality, and data analytics.",
    technologies: ["React.js", "Tailwind CSS", "Java Spring Boot", "PostgreSQL"],
    githublink:"https://github.com/pasindufernando1/VentureVerse"
  },
  {
    title: "Enchancing Digital Forensic process using AI Agents",
    image: research,
    description:
      "A research-based project leveraging AI agents to enhance forensic investigations with a focus on Sleuth Kit integration.",
    technologies: ["Python", "Microsoft Autogen", "Docker", "LLMs (LLAMA, QWEN)", "RAG(ChromaDB)", "Prompt Engineering"],
    githublink:"https://github.com/Research-Autonomous-AI-Agents-for-DF/Agent_Framework_Backend"
  },
  {
    title: "Project Summit Sysco LABS - Full Stack Project",
    image: project3,
    description: "A Full Stack project that replicates an e-commerce platform catering to B2B services using Microservices BFF pattern and Microfrontend architecture.",
    technologies: ["React", "Spring Boot", "Node.js", "Typescript", "AWS"],
},
{
  title: "Project Summit Sysco LABS - AI Project",
  image: project3,
  description: "A 4IR-based project aimed at solving a current Sysco problem using GenAI image generation to create personalized banners, automating design tasks and reducing time and costs.",
  technologies: ["VertexAI", "Stable Diffusion", "Gemini"],
},
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio showcasing projects, skills, and research contributions in software development and AI.",
    technologies: ["HTML", "Tailwind CSS", "React", "Framer"],
    githublink:"https://github.com/kavishkafer?tab=repositories"
  },
  {
    title: "Test Automation framework",
    image: testAutomation,
    description:
      " The project is designed with the Page Object Model (POM) architecture, using TestNG for test orchestration, Selenium WebDriver for UI automation, and Allure for reporting.",
    technologies: ["Java","Selenium","TestNG"],
     githublink:"https://github.com/kavishkafer/TestAutomation"
  },
];

export const CONTACT = {
  address: "388/ 9E Kularathna road, Negombo",
  phoneNo: "+94 77 2094501",
  email: "kavishkafernando64@gmail.com",
};
