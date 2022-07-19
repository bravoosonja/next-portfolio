import styles from "../styles/pages/About.module.css";
import NudeLayout from "../components/layouts/NudeLayout";

export default function About() {
  return (
    <div className={styles.aboutGrid}>
      <div className={styles.content}>
        <h1 className={styles.aboutTitle}>About</h1>
        <div className={styles.quote}>
          <blockquote>
            A voracious life-long student of problem-solving, and a tenacious
            seeker of aesthetic values
          </blockquote>
        </div>

        <p>
          A lifetime ago, I was living in South Korea where I worked as a
          fashion model agent for over seven years.
        </p>
        <p>
          Somewhere along those years, my daily exposure to high-fashion trends
          awoke my innate yearning for aesthetic values, and a new zeal to
          conquer intellectual challenges.
        </p>
        <p>
          Seeking worthy battles to triumph over, I embarked on a plane to
          Australia where I became a lifelong student of problem-solving. From
          network security to IT service management and delivery, I enlisted
          myself in a variety of crusades.
        </p>
        <p>
          When my lust for visual pleasure and my desire for satisfaction in
          solving a problem could not seem to be satiated at the same time is
          when I was introduced to the fulfilling world of front-end
          development, harmonious marriage between my two passions.
        </p>
        <p>
          Eager to finally quench my thirst in one go, I have been voraciously
          feeding knowledge with hands-on projects from vanilla JavaScript to
          React, and now Vue, dreaming of one day, I will achieve the glorious
          victory that is <em>mastery</em>.
        </p>
      </div>
      <div className="rightContainer"></div>
    </div>
  );
}

About.getLayout = function getLayout(About) {
  return <NudeLayout>{About}</NudeLayout>;
};
