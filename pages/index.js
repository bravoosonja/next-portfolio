import Head from "next/head";
import NudeLayout from "../components/layouts/NudeLayout";
import Link from "next/link";

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
              I enjoy developing aesthetic and fun user experience.
            </p>
          </div>
        </div>
        <div className="rightContainer">
          <Link href="/projects">
            <a>
              <h1 className="rightContainerTitle">Projects</h1>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <h1 className="rightContainerTitle">About</h1>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <h1 className="rightContainerTitle">Contact</h1>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(Home) {
  return <NudeLayout>{Home}</NudeLayout>;
};
