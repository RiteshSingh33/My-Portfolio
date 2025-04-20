// ProjectDetail.jsx
import { Link, useParams } from 'react-router-dom';
import styles from './ProjectDetailStyles.module.css';

// Educator images
import educator1 from '../../assets/educator1.png';
import educator2 from '../../assets/educator2.png';

// Leads images
import leads1 from '../../assets/leads1.png';
import leads2 from '../../assets/leads2.png';

// Travel images
import travel1 from '../../assets/travel1.png';
import travel2 from '../../assets/travel2.png';

// DH images
import dh1 from '../../assets/dh1.png';
import dh2 from '../../assets/dh2.png';

// Voice images
import voice1 from '../../assets/voice1.png';
import voice2 from '../../assets/voice2.png';

const projectData = {
  educator: {
    title: "Educator",
    description: "Educator is a comprehensive Learning Management System (LMS) built to bridge the gap between educators and learners in a modern, digital-first environment. The platform offers a structured and intuitive interface where instructors can create, upload, and manage courses, while students can seamlessly enroll, access content, and track their progress. Educator also includes features like quizzes, assignments, discussion forums, and progress analytics to enhance the overall learning experience. Designed with scalability in mind, the platform can cater to both small educational setups and large institutions. This project demonstrates my ability to manage full-stack architecture, authentication, secure data flow, and user experience design, all in one cohesive product.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    images: [educator1, educator2],
    github: "https://github.com/RiteshSingh33/Educator",
  },
  leads: {
    title: "Potential Leads",
    description: "Potential Leads is a smart web tool created to help businesses identify and evaluate high-quality sales leads using user-generated or uploaded data. By leveraging filtering algorithms and pattern recognition logic, the platform highlights leads with the greatest potential for conversion. This tool was developed for a hackathon and focuses on data-driven decision-making in marketing and sales workflows. With features like lead scoring, contact tracking, and potential analysis, it’s a must-have utility for any sales team. Built using the MERN stack, the platform not only focuses on backend data handling but also ensures a clean and efficient frontend dashboard for sales managers and teams.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    images: [leads1, leads2],
    github: "https://github.com/RiteshSingh33/DRCODE_HACKATHON",
  },
  travel: {
    title: "Travel ToGetHer",
    description: "Travel ToGetHer is a women-centric car rental platform focused on providing safe, affordable, and convenient travel solutions. The application allows users—especially women—to book verified rental vehicles with women drivers or vetted safety protocols. With its elegant UI/UX and seamless booking flow, the platform offers location-based car selection, real-time availability updates, and booking confirmations. It is designed to break barriers in solo or group travel for women by promoting safety, trust, and independence. This project showcases my front-end finesse and understanding of secure, responsive design with a strong emphasis on user empowerment.",
    tech: ["NodeJS", "Tailwind CSS", "MongoDB", "REST API"],
    images: [travel1, travel2],
    github: "https://github.com/RiteshSingh33/TravelToGetHer",
  },
  dh: {
    title: "DH Clothing",
    description: "DH Clothing is an end-to-end e-commerce platform tailored for a modern fashion brand. From displaying trendy clothing items to managing user carts, order tracking, and admin inventory control, the website delivers a polished shopping experience. Users can browse collections, apply filters, add items to the cart, and complete secure checkouts. Admins can manage product listings, view user orders, and handle stock updates. The application integrates database management, secure login systems, and responsive UI to function seamlessly across devices. This project is a showcase of how I handle multi-role systems (user/admin), cart logic, and real-time inventory features in a retail environment.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    images: [dh1, dh2],
    github: "https://github.com/RiteshSingh33/DH-Traders",
  },
  voice: {
    title: "Smart Voice Assistant",
    description: "Smart Voice Assistant is an AI-powered voice-based assistant capable of performing tasks like opening apps, fetching news, weather updates, telling jokes, setting reminders, and much more—just through voice commands. Built using Python, NLP libraries, and speech recognition tools, this project demonstrates the intersection of AI, automation, and user interaction. With a focus on hands-free utility, it can interpret natural language queries and respond in real-time. The assistant was designed to be lightweight yet powerful, with scope for adding more skills through plug-in-like modules. This project reflects my passion for building real-time, interactive tools that leverage AI for everyday efficiency.",
    tech: ["ReactJS", "SpeechRecognition", "API"],
    images: [voice1, voice2],
    github: "https://github.com/RiteshSingh33/Smart-Voice-Assistant",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) return <h2 className={styles.notFound}>Project not found</h2>;

  return (
    <div className={styles.cardContainer}>
      <header className={styles.cardHeader}>
        <Link to="/" className={styles.backButton}>&larr; Back to Projects</Link>
        <h1 className={styles.title}>{project.title}</h1>
        <a href={project.github} target="_blank" rel="noopener" className={styles.githubButton}>
          View on GitHub
        </a>
      </header>

      <section className={styles.cardBody}>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.techStack}>
          {project.tech.map((tech, i) => (
            <span key={i} className={styles.techBadge}>{tech}</span>
          ))}
        </div>

        <div className={styles.images}>
          {project.images.map((img, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
