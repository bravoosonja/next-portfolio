import styles from "../../styles/pages/Project.module.css";
import NudeLayout from "../../components/layouts/NudeLayout";

export default function MovieApp() {
  return (
    <>
      <div className={styles.title}>
        <h1>Movie App</h1>
      </div>
    </>
  );
}

MovieApp.getLayout = function getLayout(MovieApp) {
  return <NudeLayout>{MovieApp}</NudeLayout>;
};
