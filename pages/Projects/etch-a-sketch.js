import styles from "../../styles/pages/Project.module.css";
import NudeLayout from "../../components/layouts/NudeLayout";

export default function EtchASketch() {
  return (
    <>
      <div className={styles.title}>
        <h1>Etch A Sketch</h1>
      </div>
    </>
  );
}

EtchASketch.getLayout = function getLayout(EtchASketch) {
  return <NudeLayout>{EtchASketch}</NudeLayout>;
};
