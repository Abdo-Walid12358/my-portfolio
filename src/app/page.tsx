import Footer from "@/components/footer";
import Header from "@/components/header";
import ContactSection from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import ProjectsSection from "@/components/sections/projects-section";
import SkillsSection from "@/components/sections/skills-section";

export default function HomePage() {
    return (
        <>
            <Header />
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </>
    )
}
