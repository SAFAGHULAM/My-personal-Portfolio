"use client";
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import about from '../../../public/images/about-image.png'
import { TabButton } from './TabButton';

const TAB_DATA: any = [
  {
    title:"Skills",
    id:"skills",
    content:(
      <ul className='list-disc pl-2'>
        <li>Typescript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Nextjs</li>
        <li>Figma</li>
        <li>Microsoft PowerPoint</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"education",
    content:(
      <ul  className='list-disc pl-2'>
        <li>Intermediate from AKHSS</li>
        <li>Matriculation from AKHSS</li>
      </ul>
    )
  },
  {
    title:"Certifications",
    id:"certifications",
    content:(
      <ul  className='list-disc pl-2'>
        <li>Participant of Vocab Champ 2023</li>
        <li>Publish Writer</li>
        <li>High Achiever</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = (id:any) => {
      setTab(id);
    
  }

  return (
    <section id='about' className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
    <Image src={about} alt='About image' width={500} height={500}/>
    <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
      <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
      <p className='text-base lg:text-lg'>
      I am Safa Ghulam Muhammad, a full-stack developer passionate about mastering web development and creating a bright
     future in the tech world. With a deep curiosity and a drive to expand my skills, I am constantly exploring new 
     technologies—from building responsive, multi-page websites to delving into the exciting world of artificial intelligence.
     Coding, learning new concepts, and pushing the boundaries of innovation are my favorite ways to spend time. My journey
     reflects my commitment to lifelong learning and my ambition to make a meaningful impact in the ever-evolving field of 
     development.
      </p>
      <div className='flex flex-row justify-start mt-8'>
        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}
        >
          {" "}
           Skills{" "}
        </TabButton>
        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}
        >
          {" "}
           Education{" "}
        </TabButton>
        <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}
        >
          {" "}
           Certifications{" "}
        </TabButton>
      </div>
      <div className='mt-8 '>{TAB_DATA.find((t: { id: string; }) => t.id === tab).content}</div>
    </div>
    </div>
    </section>
  )
}

export default AboutSection