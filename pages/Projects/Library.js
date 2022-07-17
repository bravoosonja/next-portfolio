import styles from "../../styles/pages/Project.module.css";
import NudeLayout from "../../components/layouts/NudeLayout";

export default function Library() {
  return (
    <>
      <div className={styles.title}>
        <h1>Library</h1>
      </div>
    </>
  );
}

Library.getLayout = function getLayout(Library) {
  return <NudeLayout>{Library}</NudeLayout>;
};