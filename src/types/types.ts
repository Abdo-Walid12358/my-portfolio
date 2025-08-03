import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

export type iconTypes = LucideIcon | IconType;

export interface SkillCardProps {
  src: string;
  title: string;
}

export interface SocialIcon {
  href: string;
  icon: iconTypes;
  color: "zinc" | "green" | "rose";
}

export interface ProjectCardProps {
  id?: number;
  thumbnail: string;
  title: string;
  description: string;
  badges: string[];
  images: string[];
  onClick?: () => void;
}