import { SkillCardProps } from "@/types/types";
import Image from "next/image";
import React from "react";

export default function SkillCard({ src, title }: SkillCardProps) {
  return (
    <div className="min-w-[100px] md:min-w-[180px] grow flex flex-col justify-center items-center gap-2 bg-background border rounded-lg hover:shadow-md hover:bg-accent hover:scale-105 transition-all select-none p-3">
      <div className="w-full h-fit flex justify-center items-center">
        <img src={src} alt="" className="img-border rounded-md w-[62px] h-[62px] md:w-[94px] md:h-[94px]" />
      </div>
      <h2 className="text-lg">{title}</h2>
    </div>
  );
}
