import { useState } from "react";
import { projects } from "@cv";
import ProjectsLists from "./ListProjects/ProjectsLists.tsx";
import styles from "./ProjectsMenu.module.css";

export default function ProjectsMenu() {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const frontProjects = projects.filter(
    (project) => project.typeProject === "frontend"
  );

  const fullProjects = projects.filter(
    (project) => project.typeProject === "fullstack"
  );

  const otherProjects = projects.filter(
    (project) => project.typeProject === "others"
  );

  const handleSectionChange = (section: number) => {
    if (section !== activeSection) {
      // Verificar si es una sección diferente
      setIsVisible(false); //Se oculta el contenido antes de cambiar de sección
      setTimeout(() => {
        setActiveSection(section);
        setIsVisible(true); // Se muestra el nuevo contenido después de cambiar de sección
      }, 200); // Se espera a que termine la animación fade-out antes de cambiar el contenido
    }
  };

  return (
    <div className={styles.projectsMenu}>
      <div className={styles.projectsContainer}>
        <div className={styles.buttonsContainer}>
          <button
            className={activeSection === 1 ? styles.active : ""}
            onClick={() => handleSectionChange(1)}
          >
            Front End Web
          </button>
          <button
            className={activeSection === 2 ? styles.active : ""}
            onClick={() => handleSectionChange(2)}
          >
            Full Stack Web
          </button>
          <button
            className={activeSection === 3 ? styles.active : ""}
            onClick={() => handleSectionChange(3)}
          >
            Otros
          </button>
        </div>
        <div className={styles.contentContainer}>
          <div
            className={`${styles.fadeContainer} ${
              isVisible ? styles.fadeIn : styles.fadeOut
            }`}
          >
            {activeSection === 1 && (
              <ProjectsLists contentProjects={frontProjects} />
            )}
            {activeSection === 2 && (
              <ProjectsLists contentProjects={fullProjects} />
            )}
            {activeSection === 3 && (
              <ProjectsLists contentProjects={otherProjects} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
