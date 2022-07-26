import { useState } from "react";
import Head from "next/head";
import NudeLayout from "../components/layouts/NudeLayout";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { titleMenuItems } from "../utils/data";

//animation variants
const container = {
  hidden: { opacity: 0, y: -25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4,
      duration: 3,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

const title = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: {
    staggerChildren: 0.25,
    duration: 1.3,
    ease: [0.2, 0.65, 0.3, 0.9],
  },
};

const hover = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    scale: 1.13,
    transition: { duration: 1.3, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

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
        <motion.div
          className="rightContainer"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {titleMenuItems.map((item, index) => (
            <motion.div
              className="rightContainerItem"
              key={index}
              variants={title}
              whileHover={hover}
            >
              <Link href={item.path}>
                <a>
                  <motion.div className="rightContainerTitle">
                    <h1>{item.name}</h1>
                  </motion.div>
                </a>
              </Link>

              <motion.div initial="hidden" animate="show">
                <Link href={item.path}>
                  <a>
                    <Image
                      src={"/assets/icons/arrow-right.svg"}
                      width="70"
                      height="70"
                      alt="arrow right"
                    />
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(Home) {
  return <NudeLayout>{Home}</NudeLayout>;
};
