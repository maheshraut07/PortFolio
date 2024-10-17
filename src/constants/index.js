import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a final year Computer Engineering student skilled in full-stack web development using the MERN stack (MongoDB, Express.js, React, and Node.js). I am proficient in multiple programming languages including Python, C++, Java, and Go (Golang). Additionally, I have a strong foundation in Data Structures and Algorithms (DSA) and a deep understanding of Data Science, which allows me to create efficient and data-driven solutions. My goal is to apply my skills to build scalable and innovative web applications that deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a final year Computer Engineering student with expertise in full-stack web development using the MERN stack (MongoDB, Express.js, React, and Node.js). I am proficient in a range of programming languages including Python, C++, Java, and Go (Golang). My strong foundation in Data Structures and Algorithms (DSA) and experience in Data Science allow me to build efficient and scalable web applications. I thrive on solving complex problems and leveraging my technical skills to create impactful solutions. Outside of academics, I enjoy exploring new technologies, staying active, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May-24 - July-24",
    role: "Software Engineering Intern",
    company: "Connectwise LLP",
    location: "Pune",
    description: `Collaborated with industry professionals to develop a brand-new web portal for a department in the company.
                  Technologies used: React for dynamic UIs, Material-UI for design consistency, Golang for backend services, PostgreSQL for database management, and Docker for containerization.
                  Utilized Agile development methodology for iterative progress and continuous improvement.`,
    technologies: ["React.js", "GO(GoLang)", "MUI", "Postgres","Docker","GitLab"],
  },
  {
    year: "Dec-23 - Jan-23",
    role: "Data Analysis Intern",
    company: "Edunet Foundation in collab with EY-GDS",
    location: "Remote",
    description: `As a Data Analytics Intern for two months, responsibilities included collecting, cleaning, and analyzing data, as well as building machine learning models to support business decisions. Tasks involved performing exploratory data analysis (EDA), creating visualizations and reports using tools like Excel and Tableau, and collaborating with cross-functional teams to provide data-driven insights. Experience was gained in working with Python (Pandas, NumPy, scikit-learn), SQL, and applying statistical techniques and machine learning algorithms to identify trends, build predictive models, and contribute to projects focused on operational efficiency and business growth.`,
    technologies: ["Python", "Data Science", "Machine Learning", "Data Analysis"],
  }
];

export const PROJECTS = [
  {
    title: "JobPulse - Syncing You with Oppurtunities",
    link: "https://jobpulse-deploy.onrender.com/",
    image: project1,
    duration:"Jul-24 - Oct-24",
    description:"JobPortal is a web application where students can explore and apply for jobs in the tech field. Additionally, an admin can log in to post job listings. The platform is built with a modern tech stack using React.js, Shadcn-UI, Tailwind CSS, Redux Toolkit for the frontend, Node.js and Express.js for the backend, and MongoDB as the database.",
    technologies: ["React.js", "Redux", "tailwindCSS", "ShadcnUI", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "NoteEase - Secure Easy Noting",
    link:"https://github.com/maheshraut07/NoteEase",
    image: project2,
    duration:"Jan-24 - March-24",
    description:"NoteEase is a secure and user-friendly application built with React.js, Node.js, Express.js, MongoDB, and Tailwind CSS. It allows users to effortlessly create, update, and delete personal notes, helping them organize their thoughts and ideas efficiently.",
    technologies: ["React.js", "tailwindCSS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "HealthCare Predictions on Diabetic Patients",
    link:"https://github.com/maheshraut07/Healtcare-Prediction-On-Diabetic-Patients-using-machine-learning-",
    image: project3,
    duration:"Dec-23 - Jan-24",
    description:"This project aims to predict whether a person has diabetes or not based on input attributes such as glucose levels, age, gender, and BMI. The dataset contains fields like BMI, insulin, age, gender, blood pressure, skin thickness, etc. Various libraries have been used for preprocessing and training the model using these values to predict the results.",
    technologies: ["Python", "Data Science", "Machine Learning", "Data Analysis", "Data Visualization"],
  },
  {
    title: "Portfolio Website",
    link:"https://port-folio-mahesh-rauts-projects.vercel.app/",
    image: project4,
    duration:"sept-23 - Oct-23",
    description: "A personal portfolio website showcasing projects, skills, and contact information. Built to highlight my expertise in full stack development with an interactive and responsive design. The site provides an easy way to explore my work, background, and ways to get in touch.",
    technologies: ["React.js", "TailwindCSS", "Framer-Motion"],
  },
  {
    title: "TextEdit- App for Editing the Text",
    link:"https://maheshtextedit.netlify.app/",
    image: project5,
    duration:"Jul-23 - Aug-23",
    description:"TextEdit is a simple and powerful web application made with React and Bootstrap using the create-react-app bundler. The app provides various features to manipulate and analyze text, such as converting text to uppercase or lowercase, removing extra spaces, copying text to the clipboard, and counting words and characters.",
    technologies: ["React.js", "BootStrap"],
  },
];

export const CONTACT = {
  address: "Near Shiv Mandir, Sant Tukaram Nagar, Pimpri, Pune - 411018",
  phoneNo: "+91 8999412907",
  email: "rautmahesh213@gmail.com",
};
