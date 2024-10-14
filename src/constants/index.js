import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a final year Computer Engineering student skilled in full-stack web development using the MERN stack (MongoDB, Express.js, React, and Node.js). I am proficient in multiple programming languages including Python, C++, Java, and Go (Golang). Additionally, I have a strong foundation in Data Structures and Algorithms (DSA) and a deep understanding of Data Science, which allows me to create efficient and data-driven solutions. My goal is to apply my skills to build scalable and innovative web applications that deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a final year Computer Engineering student with expertise in full-stack web development using the MERN stack (MongoDB, Express.js, React, and Node.js). I am proficient in a range of programming languages including Python, C++, Java, and Go (Golang). My strong foundation in Data Structures and Algorithms (DSA) and experience in Data Science allow me to build efficient and scalable web applications. I thrive on solving complex problems and leveraging my technical skills to create impactful solutions. Outside of academics, I enjoy exploring new technologies, staying active, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May-24 - July-24",
    role: "Software Engineering Intern",
    company: "Connectwise LLP",
    description: `Collaborated with industry professionals to develop a brand-new web portal for a department in the company.
                  Technologies used: React for dynamic UIs, Material-UI for design consistency, Golang for backend services, PostgreSQL for database management, and Docker for containerization.
                  Utilized Agile development methodology for iterative progress and continuous improvement.`,
    technologies: ["React.js", "GO(GoLang)", "MUI", "Postgres","Docker","GitLab"],
  },
  {
    year: "Dec-23 - Jan-23",
    role: "Data Analysis Intern",
    company: "Edunet Foundation in collab with EY-GDS",
    description: `As a Data Analytics Intern for two months, responsibilities included collecting, cleaning, and analyzing data, as well as building machine learning models to support business decisions. Tasks involved performing exploratory data analysis (EDA), creating visualizations and reports using tools like Excel and Tableau, and collaborating with cross-functional teams to provide data-driven insights. Experience was gained in working with Python (Pandas, NumPy, scikit-learn), SQL, and applying statistical techniques and machine learning algorithms to identify trends, build predictive models, and contribute to projects focused on operational efficiency and business growth.`,
    technologies: ["Python", "Data Science", "Machine Learning", "Data Analysis"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
