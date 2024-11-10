"use client";
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const ProjectsData = [
    {
        id: 1,
        title: "Adventure Game",
        description: "An interactive CLI adventure game in TypeScript, where every choice impacts your journey through a world of puzzles and unexpected twists.",
        image: "/images/projects/adventure-game.webp",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/SAFAGHULAM/Adventure-Game.git",
        previewUrl: "https://github.com/SAFAGHULAM/Adventure-Game.git"
    },
    {
        id: 2,
        title: "CLI Simple Calculator",
        description: "A CLI calculator built with TypeScript for quick and easy arithmetic operations directly in the terminal.",
        image: "/images/projects/calculator.webp",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/SAFAGHULAM/Simple-Calculator.git",
        previewUrl: "https://github.com/SAFAGHULAM/Simple-Calculator.git"
    },
    {
        id: 3,
        title: "CLI Countdown Timer",
        description: "A CLI countdown timer built with TypeScript, allowing you to set precise countdowns and track time easily in the terminal.",
        image: "/images/projects/countdown-timer.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/SAFAGHULAM/Countdown-Timer.git",
        previewUrl: "https://github.com/SAFAGHULAM/Countdown-Timer.git"
    },
    {
        id: 4,
        title: "Number Guessing Game",
        description: "A CLI number guessing game built with TypeScript, challenging players to guess a random number within a set range with feedback on each attempt.",
        image: "/images/projects/number-guessing-game.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/SAFAGHULAM/CLI-Number-Guessing-Game.git",
        previewUrl: "https://github.com/SAFAGHULAM/CLI-Number-Guessing-Game.git"
    },
    {
        id: 5,
        title: "Student Management System",
        description: "A CLI student management system built with TypeScript, enabling easy tracking, updating, and management of student records directly in the terminal.",
        image: "/images/projects/student-management-system.jpeg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/SAFAGHULAM/Student-Management-System.git",
        previewUrl: "https://github.com/SAFAGHULAM/Student-Management-System.git"
    },
    {
        id: 6,
        title: "CLI Word Counter",
        description: "A CLI word counter built with TypeScript, allowing users to quickly count words and characters in any text input directly from the terminal.",
        image: "/images/projects/word-counter.jpeg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/SAFAGHULAM/Cli-WordCounter.git",
        previewUrl: "https://github.com/SAFAGHULAM/Cli-WordCounter.git"
    }
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTabChange = (newTag: string) => {
        setTag(newTag);
    };

    const filteredProjects = ProjectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <section id="projects">
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    key="All"
                    onClick={handleTabChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    key="Web"
                    onClick={handleTabChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    key="Mobile"
                    onClick={handleTabChange}
                    name="Mobile"
                    isSelected={tag === "Mobile"}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredProjects.map((project: any) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection