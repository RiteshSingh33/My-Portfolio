import styles from './ProjectsStyles.module.css';
import leads from '../../assets/leads.png';
import educator from '../../assets/educator_logo.png';
import dh from '../../assets/dh.jpeg';
import voice from '../../assets/voice.png';
import travel from '../../assets/travel.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={educator}
          link="https://github.com/RiteshSingh33/Educator"
          h3="Educator"
          p={
            <>
              A learning management <br />
              platform (LMS)
            </>
          }
        />
        <ProjectCard
          src={leads}
          link="https://github.com/RiteshSingh33/DRCODE_HACKATHON"
          h3="Potential Leads"
          p="Finding the potential leads"
        />
        <ProjectCard
          src={travel}
          link="https://github.com/RiteshSingh33/TravelToGetHer"
          h3="Travel ToGetHer"
          p="Car Rental Website"
        />
        <ProjectCard
          src={dh}
          link="https://github.com/RiteshSingh33/DH-Traders"
          h3="DH Clothing"
          p="E - commerce Platform"
        />
        <ProjectCard
          src={voice}
          link="https://github.com/RiteshSingh33/Smart-Voice-Assistant"
          h3="Voice Assistant"
          p="Smart Voice Assistant"
        />
      </div>
    </section>
  );
}

export default Projects;
