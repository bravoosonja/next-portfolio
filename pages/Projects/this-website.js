import NudeLayout from "../../components/layouts/NudeLayout";
import styles from "../../styles/pages/Project.module.css";

export default function ThisWebsite() {
  return (
    <>
      <div className={styles.title}>
        <h1>This Website</h1>
      </div>
    </>
  );
}

ThisWebsite.getLayout = function getLayout(ThisWebsite) {
  return <NudeLayout>{ThisWebsite}</NudeLayout>;
};
