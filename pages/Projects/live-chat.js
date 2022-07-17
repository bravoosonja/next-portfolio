import styles from "../../styles/pages/Project.module.css";
import NudeLayout from "../../components/layouts/NudeLayout";

export default function LiveChat() {
  return (
    <>
      <div className={styles.title}>
        <h1>Live Chat</h1>
      </div>
    </>
  );
}

LiveChat.getLayout = function getLayout(LiveChat) {
  return <NudeLayout>{LiveChat}</NudeLayout>;
};
