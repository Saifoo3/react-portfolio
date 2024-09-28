import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpeg";

export const HERO_CONTENT = `I am a dedicated Computer Science and Engineering student with a strong foundation in full stack development and a comprehensive understanding of cybersecurity. With hands-on experience in front-end technologies like React and React Native, as well as back-end technologies like Node.js, MySQL, and MongoDB, I excel at building scalable and efficient web and mobile applications. My expertise is further enhanced by a solid background in cybersecurity, covering areas such as Penetration Testing, Cryptography, and real-world security challenges. This unique blend of development and security skills enables me to create secure, innovative solutions that drive business growth and deliver exceptional user experiences. I am eager to leverage my expertise in a dynamic environment, contributing to both robust development and security practices.`;

export const ABOUT_TEXT = `I am a versatile full stack developer with a solid foundation in both software development and cybersecurity. My expertise spans front-end technologies like React and React Native and back-end frameworks such as Node.js, complemented by proficiency in databases like MySQL and MongoDB. I have a passion for building innovative, scalable applications that prioritize both user experience and security, leveraging my knowledge in areas such as Penetration Testing and Cryptography. From developing AI-based virtual assistants to creating machine learning models for real estate prediction, I thrive on tackling complex challenges and continuously expanding my skill set. I am driven by a love for technology and an eagerness to contribute to meaningful projects that make a positive impact.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "CV Portfolio Website",
    image: project1,
    description:
      "I developed a personal CV portfolio website to showcase my resume, projects, and skills. The website features a modern UI/UX design with smooth animations using Framer Motion, and is fully responsive across all devices. I used React for the front-end, Tailwind CSS for styling, and integrated Framer Motion for animations, creating a dynamic and interactive user experience.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Mordern UI/UX"],
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
