//TODO: Render floating image

import styles from "../../styles/pages/Projects.module.css";
import BlackLayout from "../../components/layouts/BlackLayout";
import { projectItems } from "../../utils/data";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.leftContainer}>
        <div className={styles.leftContent}>
          <p className={styles.leftTitle}>Projects</p>
          <p className={styles.leftContentText}>
            This is a showcase of my selected web development projects.
          </p>
        </div>
      </div>
      <div className={styles.projectsContainer}>
        {projectItems.map((item) => (
          <div className={styles.projectItems} key={item.id}>
            <Link href={"/projects/" + item.id} key={item.id}>
              <a>
                <h1 className={styles.projectTitle}>{item.name}</h1>
              </a>
            </Link>
            <div className={styles.keywords}>
              {item.keywords.map((keyword, index) => (
                <p key={index}>{keyword}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Projects.getLayout = function getLayout(Projects) {
  return <BlackLayout>{Projects}</BlackLayout>;
};
