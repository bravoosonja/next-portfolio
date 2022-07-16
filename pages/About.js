import styles from "../styles/pages/About.module.scss";
import NudeLayout from "../components/layouts/NudeLayout";

export default function About() {
  return <div>About</div>;
}

About.getLayout = function getLayout(About) {
  return <NudeLayout>{About}</NudeLayout>;
};
