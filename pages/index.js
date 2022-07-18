import Head from "next/head";
import NudeLayout from "../components/layouts/NudeLayout";
import Link from "next/link";
import { menuItems } from "../utils/data";

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

      <main>
        <div className="grid">
          <div className="leftContainer">
            <div className="content">
              <p className="name">Songna Choi </p>
              <p className="subText">
                Pronounced as <span>Song-nah</span>
              </p>
              <p className="para">
                I enjoy developing aesthetic and fun user experience. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Porro
                reprehenderit laborum ad assumenda ratione harum, quos magni vel
                at dolores.
              </p>
            </div>
          </div>
          <div className="rightContainer">
            <Link href="/projects">
              <a>
                <h1>Projects</h1>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <h1>About</h1>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <h1>Contact</h1>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(Home) {
  return <NudeLayout>{Home}</NudeLayout>;
};
