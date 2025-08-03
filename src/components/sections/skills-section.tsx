"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { SkillCardProps } from "@/types/types";
import SkillCard from "../skill-card";
import { BlurFade } from "../magicui/blur-fade";

// arraies
const frontendSkills: SkillCardProps[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS3",
  },
  {
    src: "https://tailwindcss.com/favicons/apple-touch-icon.png?v=3",
    title: "Tailwind CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript (ES6+)",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    title: "Next.js",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    title: "Framer Motion",
  },
  {
    src: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    title: "shadcn/ui",
  },
];
const backendSkills: SkillCardProps[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    title: "PHP",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    title: "C#",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
  },
  {
    src: "https://avatars.githubusercontent.com/u/47215896?s=200&v=4",
    title: "Auth.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    title: "Socket.io",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    title: "MySQL",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    title: "Firebase",
  },
];
const otherSkills: SkillCardProps[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    title: "Express.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "Git",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    title: "GitHub",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    title: "Postman",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    title: "NPM",
  },
  {
    src: "https://www.svgrepo.com/show/354513/vercel-icon.svg",
    title: "Vercel",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    title: "VS Code",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
    title: "Visual Studio",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/149/149852.png",
    title: "REST APIs",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/136/136525.png",
    title: "JSON",
  },
];

export default function SkillsSection() {
  return (
    <main id="skills" className="bg-background">
      <section className="relative w-screen overflow-hidden flex flex-col justify-center items-center px-4 md:px-6 max-w-[65rem] xl:max-w-[80rem] mx-auto py-20">
        <motion.h1
          className="max-w-4xl text-center text-5xl font-bold text-slate-700 md:text-5xl lg:text-7xl dark:text-slate-300"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.3,
          }}
        >
          <BlurFade delay={0.45}>My Skills</BlurFade>
        </motion.h1>

        {/* ==== Frontend Section ==== */}
        <div className="relative mt-20 grid grid-cols-[50px_auto_1fr] gap-x-6">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-300 dark:bg-slate-700" />

          <motion.div
            className="relative flex flex-col items-center"
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.2,
            }}
          >
            <div className="flex-1" />
            <span className=" text-slate-700 dark:text-slate-300 font-semibold text-xl rotate-[-90deg] whitespace-nowrap ml-9 border border-slate-300 dark:border-slate-700 px-2 pb-1 rounded-md">
              Front End
            </span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-full w-6 h-px bg-slate-300 dark:bg-slate-700" />
            <div className="flex-1" />
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-5 my-10"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.4,
            }}
          >
            {frontendSkills.map((item, index) => (
              <SkillCard key={index} src={item.src} title={item.title} />
            ))}
          </motion.div>
        </div>

        {/* ==== Backend Section ==== */}
        <div className="relative grid grid-cols-[50px_auto_1fr] gap-x-6">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-300 dark:bg-slate-700" />

          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex-1" />
            <span className="text-slate-700 dark:text-slate-300 font-semibold text-xl rotate-[-90deg] whitespace-nowrap ml-9 border border-slate-300 dark:border-slate-700 px-2 pb-1 rounded-md">
              Back End
            </span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-full w-6 h-px bg-slate-300 dark:bg-slate-700" />
            <div className="flex-1" />
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-5 my-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {backendSkills.map((item, index) => (
              <SkillCard key={index} src={item.src} title={item.title} />
            ))}
          </motion.div>
        </div>

        {/* ==== Others Section ==== */}
        <div className="relative grid grid-cols-[50px_auto_1fr] gap-x-6">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-300 dark:bg-slate-700" />

          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex-1" />
            <span className="text-slate-700 dark:text-slate-300 font-semibold text-xl rotate-[-90deg] whitespace-nowrap ml-9 border border-slate-300 dark:border-slate-700 px-2 pb-1 rounded-md">
              Others
            </span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-full w-6 h-px bg-slate-300 dark:bg-slate-700" />
            <div className="flex-1" />
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-5 my-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            {otherSkills.map((item, index) => (
              <SkillCard key={index} src={item.src} title={item.title} />
            ))}
          </motion.div>
        </div>

        {/* <div className="flex flex-wrap gap-5 mt-20">
            {langsArray.map((item, index) => {
                return <SkillCard key={index} src={item.src} title={item.title} />
            })}
        </div> */}
      </section>
    </main>
  );
}
