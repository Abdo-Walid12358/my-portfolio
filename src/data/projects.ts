import { ProjectCardProps } from "@/types/types";

export const projectsArray: ProjectCardProps[] = [
    {
        id: 1,
        thumbnail:
            "images/auth-system/1.png",
        title: "Authentication System",
        description:
            "A full-featured authentication system built with modern web technologies. Includes email/password login, two-factor authentication (2FA), password reset, protected routes, and JWT-based session handling.",
        badges: ["Security", "2FA", "Next.js", "Tailwind", "Auth.js", "ShadcnUI", "MySQL", "Prisma"],
        images: [
            "images/auth-system/2.png",
            "images/auth-system/3.png",
            "images/auth-system/4.png",
            "images/auth-system/5.png",
            "images/auth-system/6.png",
            "images/auth-system/7.png",
            "images/auth-system/8.png",
            "images/auth-system/9.png",
        ],
    },
    {
        id: 2,
        thumbnail:
            "images/courses-app/8.png",
        title: "Online Course Platform",
        description:
            "A modern and scalable course platform where users can browse, purchase, and watch video courses. Includes features like course categorization, progress tracking, user dashboards, admin management, and secure payment integration.",
        badges: ["Security", "Next.js", "Tailwind", "Admin Dashboard", "Stripe", "Auth.js", "ShadcnUI", "MySQL", "Prisma"],
        images: [
            "images/courses-app/1.png",
            "images/courses-app/2.png",
            "images/courses-app/3.png",
            "images/courses-app/4.png",
            "images/courses-app/5.png",
            "images/courses-app/6.png",
            "images/courses-app/9.png",
            "images/courses-app/10.png",
            "images/courses-app/11.png",
        ],
    },
    {
        id: 3,
        thumbnail:
            "images/facebook/9.png",
        title: "Posting App (like facebook)",
        description:
            "A full-featured post publishing system that allows authenticated users to create, edit, and delete posts with markdown support. Includes tagging, likes, comments, and user profiles, along with a modern and responsive design.",
        badges: ["Security", "CRUD", "Next.js", "CSS", "Authentication", "MySQL", "express", "Socket.io", "RealTime App"],
        images: [
            "images/facebook/1.png",
            "images/facebook/2.png",
            "images/facebook/3.png",
            "images/facebook/4.png",
            "images/facebook/5.png",
            "images/facebook/6.png",
            "images/facebook/7.png",
            "images/facebook/8.png",
        ],
    },
];
