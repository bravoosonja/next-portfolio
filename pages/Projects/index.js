//TODO: Render floating image

import { useState } from "react";
import styles from "../../styles/pages/Projects.module.css";
import BlackLayout from "../../components/layouts/BlackLayout";
import { projectItems } from "../../utils/data";
import Link from "next/link";
import Image from "next/image";

// function FloatingImage({ image, active, key }) {
//   return (
//     <div key={key}>
//       <Image
//         className={`${styles.active} ${styles.isActive}`}
//         src={image}
//         alt="floating project"
//         width={400}
//         heigh={300}
//       />
//       ;
//     </div>
//   );
// }

export default function Projects() {
  // floating image
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="grid">
      <div className="leftContainer">
        <div className="leftContent">
          <p className="leftTitle">Projects</p>
          <p className="leftContentText">
            This is a showcase of my selected web development projects.
          </p>
        </div>
      </div>
      <div className="rightContainer">
        {projectItems.map((item) => (
          <div
            className={styles.projectItems}
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() => setActiveId(null)}
          >
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

        {/* <div className={styles.projectMedia}>
          {projectItems.map((image) => {
            const isActive = image === activeId;
            <FloatingImage
              image={image.image}
              active={isActive}
              key={image.id}
            />;
          })}
        </div> */}
      </div>
    </div>
  );
}

Projects.getLayout = function getLayout(Projects) {
  return <BlackLayout>{Projects}</BlackLayout>;
};
