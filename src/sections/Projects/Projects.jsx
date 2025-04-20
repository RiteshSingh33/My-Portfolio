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
          to="/projects/educator"
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
          to="/projects/leads"
          h3="Potential Leads"
          p="Finding the potential leads"
        />
        <ProjectCard
          src={travel}
          to="/projects/travel"
          h3="Travel ToGetHer"
          p="Car Rental Website"
        />
        <ProjectCard
          src={dh}
          to="/projects/dh"
          h3="DH Clothing"
          p="E - commerce Platform"
        />
        <ProjectCard
          src={voice}
          to="/projects/voice"
          h3="Voice Assistant"
          p="Smart Voice Assistant"
        />
      </div>
    </section>
  );
}

export default Projects;
