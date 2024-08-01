import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../theme/ProjectCard';
import flappy from '../../assets/flappy.png'
import horizon from '../../assets/horizonhub.png'
import netflix from '../../assets/netflix.jpg'
import sps from '../../assets/sps.png'
import movie from '../../assets/movie.jpg'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={horizon}
          link="https://github.com/Imsaymaahmad/Horizon-Hub"
          h3="Horizon-Hub"
          p="Real-Time Chat WebApp"
        />
        <ProjectCard
          src={netflix}
          link="https://github.com/Imsaymaahmad/Netflix-Clone"
          h3="Netflix Clone"
          p="Copy of Netflix"
        />
        <ProjectCard
          src={sps}
          link="https://github.com/Imsaymaahmad/Stone-Paper-Scissors-Game"
          h3="Stone Paper Scissors"
          p="Digital Game"
        />
        <ProjectCard
          src={flappy}
          link="https://github.com/Imsaymaahmad/Flappy-Bird"
          h3="Flappy Bird"
          p="Fun Game"
        />
        <ProjectCard
          src={movie}
          link="https://github.com/Imsaymaahmad/Movie-Recommendation-System"
          h3="Movie Recommender"
          p="Recommender System"
        />
      </div>
    </section>
  );
}

export default Projects;
