"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { PointerHighlight } from "../ui/pointer-highlight";
import { BlurFade } from "../magicui/blur-fade";

export default function AboutSection() {
  return (
    <main id="about" className="bg-slate-50 dark:bg-black">
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
          <BlurFade delay={.45}>
            About Me
          </BlurFade>
        </motion.h1>
        <div className="grid grid-cols-1 flex-col-reverse md:grid-cols-2 mt-10 min-h-[400px] items-center">
          <div className="relative w-full h-full order-last hidden md:block md:order-first">
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/3dicons-folder.png"
                  fill
                  alt="Folder Icon"
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="py-4 text-xl font-normal text-neutral-700 dark:text-neutral-300 text-left"
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
              I’m a passionate 
                <PointerHighlight
                    rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
                    pointerClassName="text-blue-500 h-3 w-3"
                    containerClassName="inline-block mr-1"
                >
                    <span className="relative z-10 ml-2 mr-1"> web developer</span>
                </PointerHighlight>
               with a strong focus on building
              high-quality websites and web applications.
            </motion.div>
            <motion.p
              className="py-4 text-xl font-normal text-neutral-700 dark:text-neutral-300 text-left"
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
              {"Whether it's a landing page, a full-stack app, or a UI component."}
            </motion.p>
            <motion.p
              className="py-4 text-xl font-normal text-neutral-700 dark:text-neutral-300 text-left"
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
                delay: 0.5,
              }}
            >
              I care deeply about clean code, performance, and user experience.
            </motion.p>
            <motion.div
              className="mt-5"
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
                delay: .6,
              }}
            >
              <Button variant={"outline"} PrefixIcon={ArrowDown} asChild>
                <Link href="#skills">Explore More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
