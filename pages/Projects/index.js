import styles from "../../styles/pages/Projects.module.css";
import BlackLayout from "../../components/layouts/BlackLayout";

export default function Projects() {
  return <div>Projects</div>;
}

Projects.getLayout = function getLayout(Projects) {
  return <BlackLayout>{Projects}</BlackLayout>;
};
