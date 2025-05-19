import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpeg";

export const HERO_CONTENT = `Passionate about building scalable, secure, and high-performance applications that are both user-centric and resilient against modern threats. Backed by deep expertise in penetration testing, cryptographic protocols, and secure software engineering, I integrate cybersecurity principles at every layer of development. Proficient in full stack technologies including React, React Native, Node.js, TypeScript, MongoDB, and MySQL, with a strong focus on creating robust systems that protect data integrity and enable seamless digital experiences. Dedicated to solving real-world problems through innovative, secure, and scalable tech solutions that align with both user needs and business goals.`;

export const ABOUT_TEXT = `I’m a cybersecurity-focused full stack developer with a strong foundation in secure application development and digital infrastructure protection. My experience spans both front-end technologies like React and React Native, and back-end tools such as Node.js, MySQL, and MongoDB. With practical knowledge in penetration testing, cryptography, and network security, I build solutions that are not just scalable and user-friendly—but also secure by design. I’m passionate about tackling real-world challenges with a blend of technical depth and security-first thinking.`;

export const EXPERIENCES = [
  {
    year: "Apr 2025 – May 2025",
    role: "Networks & Security Engineer Intern",
    company: "Azizi Developments – Dubai, UAE",
    description: `Worked on enterprise network infrastructure and cybersecurity operations in a corporate environment. Gained practical experience in configuring routers, setting up secure VPN tunnels for new site integrations, and managing network traffic. Assisted in monitoring and updating firewall policies using SmartConsole, while learning best practices for securing internal and external systems across a large-scale network.`,
    technologies: ["Networking", "VPN", "Firewall", "SmartConsole","\n", "Microsoft Azure"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
      title: "ClariQuest: Business Intelligence Survey Platform",
      image: project1, 
      description:
        "ClariQuest is a fully automated platform that generates high-level market insights based on structured user data and contextual behavior patterns. The idea was inspired by a real-world case where a niche beverage outlet faced early closure due to low footfall and market misalignment—underscoring the importance of understanding local consumer behavior. Designed using React, TypeScript, and Vite for the frontend, with a Python/Supabase (PostgreSQL) backend, the platform enables smarter business decisions while helping reduce the risks associated with poor market targeting.",
      technologies: ["React", "TypeScript", "Vite", "Python", "Supabase (PostgreSQL)", "Business Intelligence", "Data-Driven Recommendations"],
  },
  {
    title: "Paimon Virtual Assistant",
    image: project2,
    description:
      "For this project, I developed a personal voice assistant using speech recognition, text-to-speech functions, and various APIs. I designed and implemented the assistant, trained my own voice model, and integrated ChatGPT into the assistant. Following a systematic approach involving design, implementation, and testing, I created a functional personal voice assistant capable of effectively performing designated tasks.",
    technologies: ["Python", "Artificial Intelligence", "Speech Recognition", "Text-to-Speech", "APIs", "ChatGPT"],
  },
  {
    title: "Real Estate Price Prediction Website",
    image: project3,
    description:
      "This data science project walks through the step-by-step process of building a real estate price prediction website. Initially, I developed a model using Sklearn and linear regression with the Bangalore home prices dataset from Kaggle. I then created a Python Flask server to serve HTTP requests using the trained model. The final component was a website built with HTML, CSS, and JavaScript, allowing users to input data such as square footage and the number of bedrooms to predict home prices. The project covered a wide range of data science concepts, including data cleaning, outlier detection, feature engineering, dimensionality reduction, hyperparameter tuning with GridSearchCV, and k-fold cross-validation.",
    technologies: ["Python", "Jupyter Notebook", "Flask", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Sports Complex Application",
    image: project4,
    description:
      "Identifying the scarcity of accessible sports facilities, I developed a mobile app using React Native for both iOS and Android. The app enhanced user experience by offering easy check-ins, activity selection, real-time availability status, and event notifications. This project improved the organization of sports activities, reduced check-in times, and enhanced user scheduling.",
    technologies: ["React Native", "iOS", "Android"],
  },
  {
    title: "Knapsack Algorithm Website",
    image: project5,
    description:
      "I developed a website to demonstrate the Knapsack Problem using ReactJS for the design and MySQL for data storage. I implemented Greedy and Dynamic Programming algorithms, created the front-end with HTML/CSS, and added functionality through JavaScript. The result was an interactive website that allows users to input data and visualize the execution of the algorithms.",
    technologies: ["ReactJS", "HTML", "CSS", "JavaScript", "MySQL" ],
  },
  {
    title: "Term Paper on 'PBFT Consensus in Blockchain'",
    image: project6,
    description:
      "For my term paper, I evaluated the Practical Byzantine Fault Tolerance (PBFT) consensus algorithm. I analyzed its principles, mechanics, and future prospects, assessing PBFT's strengths, weaknesses, practical applications, and potential improvements. This thorough evaluation provided comprehensive insights into PBFT, highlighting its relevance in blockchain technology and suggesting areas for enhancement.",
    technologies: ["PBFT Consensus Algorithm", "Blockchain", "Analysis", "Research"],
  },
];


export const CONTACT = {
  address: "Dubai",
  phoneNo: "+971-563132613",
  email: "saifazeem234@gmail.com",
};
