import styles from "../../styles/pages/Project.module.css";
import NudeLayout from "../../components/layouts/NudeLayout";

export default function Calculator() {
  return (
    <>
      <div className={styles.title}>
        <h1>Calculator</h1>
      </div>
    </>
  );
}

Calculator.getLayout = function getLayout(Calculator) {
  return <NudeLayout>{Calculator}</NudeLayout>;
};
