import Image from "next/image";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return(
    <main className='flex min-h-screen w-full flex-col bg-[#121212] container mx-auto px-12 py-4 overflow-hidden'>
      <Navbar/>
      <div className='container mt-24 mx-auto bg-[#121212] w-full min-h-screen px-12 py-4'>
      <Herosection/>
      <AchievementsSection/>
      <AboutSection/>
      <ProjectsSection/>
      <EmailSection/>
      </div>
      <Footer/>
    </main>
  )
}
