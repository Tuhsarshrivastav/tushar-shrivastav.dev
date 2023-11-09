"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After graduating with a degree in{" "}
        <span className="font-medium">commerce</span>, I made the decision to pursue my passion for programming. I embarked on a journey of learning{" "}
        <span className="font-medium">full-stack web development</span>. through online courses{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, React-Native, Vue.js Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with Angular  TypeScript and Prisma. I am always looking to
        learn new technologies.
        {/* I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy going to the gym and powerlifting. Additionally, 
    I have a strong interest in{" "}
        <span className="font-medium">learning new things</span>. I am currently studying{" "}
        <span className="font-medium">philosophy</span>
      </p>
    </motion.section>
  );
}
