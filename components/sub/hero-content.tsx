"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Turning Ideas Into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Scalable Digital Products
            </span>
            .
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I craft the invisible infrastructure that powers every seamless
          experience — the logic, the pipelines, the APIs that nobody sees but
          everyone feels.
        </motion.p>

        <motion.button
          type="button"
          variants={slideInFromLeft(1)}
          onClick={() => setOpen(!open)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          {open ? "Show less ↑" : "Learn more ↓"}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: open ? 1 : 0, height: open ? "auto" : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="mt-4 max-w-lg pl-4 border-l-2 border-purple-500 text-lg text-gray-200">
            I&apos;m Collin Powell, a Full Stack Developer based in Nairobi,
            Kenya. I specialize in building AI powered platforms, marketplaces,
            and SaaS tools from the backend pipelines and APIs to the interfaces
            people actually use. I&apos;ve shipped products like TenderIQ,
            MakaziHub, Voxara, and Tujijenge v2, and I&apos;m always building
            something new. I hold a Full Stack Web Development Certificate with a
            MERN Specialization and I&apos;m passionate about solving real
            African market problems through technology.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
