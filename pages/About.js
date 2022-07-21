import styles from "../styles/pages/About.module.css";
import NudeLayout from "../components/layouts/NudeLayout";
import Button from "../components/Button";
import Accordion from "../components/Accordion";
import AnimatedTitle from "../components/AnimatedTitle";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.aboutTitle}>
          <AnimatedTitle textToAnimate={"About"} />
        </div>

        <div className={styles.quote}>
          <blockquote>
            A voracious life-long student of problem-solving, and a tenacious
            seeker of aesthetic values
          </blockquote>
        </div>

        <div className={styles.text}>
          <p className="para">
            A lifetime ago, I was living in South Korea where I worked as a
            fashion model agent for over seven years.
          </p>
          <p className="para">
            Somewhere along those years, my daily exposure to high-fashion
            trends awoke my innate yearning for aesthetic values, and a new zeal
            to conquer intellectual challenges.
          </p>
          <p className="para">
            Seeking worthy battles to triumph over, I embarked on a plane to
            Australia where I became a lifelong student of problem-solving. From
            network security to IT service management and delivery, I enlisted
            myself in a variety of crusades.
          </p>
          <p className="para">
            When my lust for visual pleasure and my desire for satisfaction in
            solving a problem could not seem to be satiated at the same time is
            when I was introduced to the fulfilling world of front-end
            development, harmonious marriage between my two passions.
          </p>
          <p className="para">
            Eager to finally quench my thirst in one go, I have been voraciously
            feeding knowledge with hands-on projects from vanilla JavaScript to
            React, and now Vue, dreaming of one day, I will achieve the glorious
            victory that is <em>mastery</em>.
          </p>

          <h2 className={styles.sectionTitle}>Skills</h2>
          <p className="para">Projects by web development technologies</p>
          <Accordion />

          <h2 className={styles.sectionTitle}>Experience</h2>
          <p className="para">
            This is part of Experience section. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consectetur magni dolor eos provident
            nobis ducimus reprehenderit, accusantium quo labore necessitatibus
            numquam sunt iure eveniet qui inventore. Provident, dolorem!
            Voluptate, sint.
          </p>
          <Button text={"My CV (pdf, 46 KB)"} href={"#"} target={"_blank"} />

          <p className="para">
            This is part of Contact me section. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consectetur magni dolor eos provident
            nobis ducimus reprehenderit, accusantium quo labore necessitatibus
            numquam sunt iure eveniet qui inventore. Provident, dolorem!
            Voluptate, sint.
          </p>
          <Link href="/contact">
            <Button text={"Contact me"} href={"/contact"} target={""} />
          </Link>

          <h2 className={styles.sectionTitle}>Acknowledgement</h2>
          <p className="para">Design inspiration for this site.</p>
        </div>
        <div className="rightContainer"></div>
      </div>
    </div>
  );
}

About.getLayout = function getLayout(About) {
  return <NudeLayout>{About}</NudeLayout>;
};
