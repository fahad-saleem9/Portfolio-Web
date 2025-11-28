// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
// import cLogo from './assets/tech_logo/c.png';
// import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import methoLogo from './assets/company_logo/metho_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import faLogo from "./assets/education_logo/fa_logo.png";
import GaLogo from './assets/education_logo/Ga_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
// import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import TaskLogo from './assets/work_logo/Task.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import DashboardLogo from './assets/work_logo/Dashboard.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },

      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },

      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
 
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [

      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },

      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: methoLogo,
      role: "Fullstack Developer",
      company: "Methologik",
      date: "April 2024 - july 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Express Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "WordPress Developer",
      company: "Silque tech",
      date: "March 2023 - July 2024",
      desc: "Designed and developed dynamic, responsive websites using WordPress, customizing themes and plugins to meet client-specific needs. Utilized HTML, CSS, JavaScript, PHP, and MySQL to enhance functionality and improve performance. Integrated third-party APIs, optimized website speed, and ensured SEO-friendly structures. Worked with tools like Elementor, WPBakery, and WooCommerce to create user-friendly and visually appealing web experiences.",

      skills: [
        "Theme Development & Customization",
        "Plugin Development & Setup",
        "Security & Maintenance",
        "Page Builders: Elementor, WPBakery, Gutenberg",
        "Expert in Page Builders",
     
      ],
    },
   
  ];
  
  export const education = [
    {
      id: 0,
      img: faLogo,
      school: "Sir Syed University of Engineering and Technology",
      date: "Oct 2021 - July 2025",
      desc: "I am currently pursuing a Bachelor's degree in Software Engineering at SSUET KARACHI, with an expected graduation in 2021 - 2025 . Throughout my academic journey, I have built a strong foundation in areas such as Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Web Development. These courses have enhanced my analytical thinking, coding skills, and understanding of real-world software development practices. I am passionate about technology and continuously strive to expand my skill set through hands-on projects, collaborative work, and self-driven learning. I look forward to applying this knowledge in innovative and impactful ways as I grow in the tech industry.",
      degree: "Bechlor of Software Engineering - BS(SE)",
    },
    {
      id: 1,
      img: GaLogo,
      school: "Govt College Formen Nazimabad",
      date: "Sept 2019 - Aug 2021",
      grade: "73.2%",
      desc: "I have completed Intermediate (Pre-Engineering) from Govt College Formen Nazimabad , where I studied key subjects like Physics, Mathematics, and Chemistry. This program strengthened my analytical and problem-solving skills, and deepened my interest in technical fields, preparing me for further studies in engineering.",
      degree: "Intermediate - Pre-Engineering",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Stars Children Acadmey",
      date: "Apr 2017 - March 2019",
      grade: "78%",
      desc: "I successfully completed my matriculation from Starts Children, under the Sindh board, where I pursued a rigorous curriculum including Science, Mathematics, and English. Throughout my studies, I developed a solid foundation in analytical and problem-solving skills and actively participated in school projects and extracurricular activities.",
      degree: "Matriculation - Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "React Admin Dashboard",
      description:
        "Developed a modern and responsive Admin Dashboard using React.js, focusing on clean UI, efficient data management, and dynamic user interaction. Integrated reusable components, chart libraries, authentication systems, and responsive layouts to enhance user experience and streamline admin operations. Ensured scalability and performance optimization to handle real-time data and complex workflows effectively.",
      image: DashboardLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Tailwind CSS"],
      github: "https://github.com/fahad-saleem9/react-admin-dashboard",
      webapp: "https://react-admin-dashboard-eight-orpin.vercel.app/",
    },
    
    {
      id: 2,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: [
        "React JS",
        "Node.js",
        "MongoDB",
        "Express",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/fahad-saleem9/cs-prep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 3,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/fahad-saleem9/Movie-recommendation-app",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    
    
    
    {
      id: 7,
      title: "Task Manager App",
      description:
        "Built a Task Manager App using the MERN Stack (MongoDB, Express.js, React.js, Node.js), enabling users to create, update, and manage their tasks efficiently. Focused on creating a responsive UI, secure backend APIs, and seamless real-time task management for an enhanced user experience.",
      image: TaskLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/fahad-saleem9/crud-task-app",
      webapp: "https://task-manager-911-ui-seven.vercel.app/",
    },
    {
      id: 8,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/fahad-saleem9/Image-search-app",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 9,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: [
        "React JS",
        "API",
        "Image Processing",
        "HTML",
        "CSS",
        "Javascript",
      ],
      github: "https://github.com/fahad-saleem9/image-bg-remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  