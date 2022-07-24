import Head from "next/head";
import NudeLayout from "../components/layouts/NudeLayout";
import Link from "next/link";
import AnimatedBannerText from "../components/AnimatedBannerText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Songna Choi</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
        <div className="leftContainer">
          <div className="leftContent">
            <p className="leftTitle">Songna Choi </p>
            <p className="subText">
              Pronounced as <span>Song-nah</span>
            </p>
            <p className="leftContentText">
              I like to apply logic and structure to create an aesthetic, fun
              user experience that provides value and robust functionality.
            </p>
          </div>
        </div>
        <div className="rightContainer">
          <div className="menuItem">
            <div className="marquee">
              <Link href="/projects">
                <a>
                  <div className="marqueeInner" aria-hidden="true">
                    <h1>Projects</h1>
                    <h1>Projects</h1>
                    <h1>Projects</h1>
                    <h1>Projects</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="menuItem">
            <div className="marquee">
              <Link href="/about">
                <a>
                  <div className="marqueeInner" aria-hidden="true">
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                    <h1>About</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="menuItem">
            <div className="marquee">
              <Link href="/contact">
                <a>
                  <div className="marqueeInner" aria-hidden="true">
                    <h1>Contact</h1>
                    <h1>Contact</h1>
                    <h1>Contact</h1>
                    <h1>Contact</h1>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(Home) {
  return <NudeLayout>{Home}</NudeLayout>;
};
