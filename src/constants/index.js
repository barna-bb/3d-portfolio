import { hya, hhp } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
    typescript,
    blender,
    c,
    cpp,
    django,
    expo,
    firebase,
    go,
    graphql,
    postgresql,
    python,
    rust,
    solidity,
    threejs,
    vite,
    bootstrap,
    gym,
    deutschebank,
    ai,
    ecommerce
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: vite,
        name: "Vite",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Threejs",
        type: "Frontend",
    },
    {
        imageUrl: graphql,
        name: "Graphql",
        type: "Backend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "Postgresql",
        type: "Database",
    },
    {
        imageUrl: expo,
        name: "Expo",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    /* {
        imageUrl: cpp,
        name: "Cpp",
        type: "Backend",
    }, */
    {
        imageUrl: rust,
        name: "Rust",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: go,
        name: "Go",
        type: "Backend",
    },
    /* {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    }, */
    {
        imageUrl: solidity,
        name: "Solidity",
        type: "Backend",
    },
    /* {
        imageUrl: blender,
        name: "Blender",
        type: "Graphic Design",
    } */
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Hungarian Youth Association",
        icon: hya,
        iconBg: "#f2dddd",
        date: "November 2021 - November 2022",
        points: [
            "Collaborating with the graphics team in the website design process.",
            "Utilizing 2-week sprints to effectively bring the design to life through development efforts using <strong>React.js</strong> and other related technologies.",
            "Developing and maintaining versatile and responsive components and functionalities to enhance user experience.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Hungary Hiring Platform",
        icon: hhp,
        iconBg: "#ccf2f2",
        date: "December 2021 - May 2022",
        points: [
            "Utilizing <strong>React.js</strong> for frontend development in the creation of a dynamic recruitment platform.",
            "Implementing <strong>Python</strong> for AI functionalities, including candidate filtering and matching, enhancing the platform's accuracy and minimizing overhead costs.",
            "Integrating <strong>Firebase</strong> for streamlined data management, ensuring seamless storage and retrieval of critical information.",
            "Collaborating with business and finance teams to align technical solutions with project goals.",
            "Ensuring responsive design and cross-browser compatibility for optimal user experience.",
            "Contributing to code reviews and provided constructive feedback to maintain code quality."
        ]
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/barna-bb',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/barnabas-banfalvi',
    }
];

export const projects = [
    {
        iconUrl: ecommerce,
        theme: 'btn-back-orange',
        name: 'Web3 E-Commerce Site',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/barna-bb/cryptazon',
        renderButton: true,
    },
    {
        iconUrl: ai,
        theme: 'btn-back-black',
        name: 'AI Chatbot',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/barna-bb/ai-chatbot',
        renderButton: true,
    },
    {
        iconUrl: gym,
        theme: 'btn-back-green',
        name: 'Gym Tracker Application',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/barna-bb/gym-app',
        renderButton: true,
    },
    {
        iconUrl: deutschebank,
        theme: 'btn-back-blue',
        name: 'Mentoring Platform',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: '#',
        renderButton: false,
    }
];