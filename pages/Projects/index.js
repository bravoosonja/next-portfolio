import styles from "../../styles/pages/Projects.module.css";
import BlackLayout from "../../components/layouts/BlackLayout";
import { projectItems } from "../../utils/data";
import Link from "next/link";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.leftContainer}>
        <div className={styles.content}>
          <h1>Projects</h1>
          <p>
            This is a showcase of my selected web development projects from
            Vanilla JavaScript to React and Vue.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora
            praesentium beatae voluptatibus corrupti, necessitatibus
          </p>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.projectItems}>
          {projectItems.map((item) => (
            <>
              <Link href={"/projects/" + item.id} key={item.id}>
                <h1 key={item.id}>
                  <a>{item.name}</a>
                </h1>
              </Link>
              {item.keywords.map((keyword, index) => (
                <p key={index} className={styles.keyword}>
                  {keyword}
                </p>
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

Projects.getLayout = function getLayout(Projects) {
  return <BlackLayout>{Projects}</BlackLayout>;
};
