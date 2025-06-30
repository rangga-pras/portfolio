import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";
import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVite,
  SiGithub,
  SiBootstrap,
  SiTypescript,
  SiTailwindcss,
  SiCplusplus,
  SiUnity,
  SiWordpress,
  SiYoast,
  SiElementor,
  SiMysql,
} from "react-icons/si";

export const projects = [
  {
    title: "Pengrajin Kuningan",
    description:
      "A commercial WordPress website for a brass handicraft store. Built with Elementor and optimized for SEO using Yoast plugin.",
    image: "/assets/PengrajinKuningan.png",
    link: "https://pengrajinkuningan.com/",
    github: "",
    category: "web",
    techStack: [
      { icon: SiWordpress, name: "WordPress", color: "#21759B" },
      { icon: SiElementor, name: "Elementor", color: "#92003B" },
      { icon: SiYoast, name: "Yoast SEO", color: "#A4286A" },
    ],
  },
  {
    title: "Kazoku Kemuning",
    description:
      "An event organizer website based in Kemuning. Created using WordPress and Elementor with Yoast SEO optimization.",
    image: "/assets/KazokuKemuning.png",
    link: "https://kazokukemuning.com/",
    github: "",
    category: "web",
    techStack: [
      { icon: SiWordpress, name: "WordPress", color: "#21759B" },
      { icon: SiElementor, name: "Elementor", color: "#92003B" },
      { icon: SiYoast, name: "Yoast SEO", color: "#A4286A" },
    ],
  },
  {
    title: "First Portfolio",
    description:
      "My very first web portfolio project, designed using Figma and hosted through Anima. A static representation of my early journey.",
    image: "/assets/Portfolio_1.png",
    link: "https://equinox-porto.animaapp.io/",
    github: "",
    category: "web",
    techStack: [
      { icon: SiHtml5, name: "HTML", color: "#E34F26" },
      { icon: SiCss3, name: "CSS", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    ],
  },
  {
    title: "Second Portfolio",
    description:
      "My second portfolio built using HTML, JavaScript, and Bootstrap. Hosted on GitHub Pages and showcases improved design and code structure.",
    image: "/assets/Portfolio_2.png",
    link: "https://ranggaprass.github.io/",
    github: "https://github.com/ranggaprass/ranggaprass.github.io",
    category: "web",
    techStack: [
      { icon: SiHtml5, name: "HTML", color: "#E34F26" },
      { icon: SiCss3, name: "CSS", color: "#1572B6" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { icon: SiGithub, name: "GitHub", color: "#181717" },
    ],
  },
  {
    title: "Block Dash",
    description:
      "A simple 3D web game built with Unity and C#, hosted on Itch.io. Designed as an early game development experiment.",
    image: "/assets/BlockDash.png",
    link: "https://ranggapras.itch.io/vr03-kelompok8-pertemuan1",
    github: "",
    category: "game",
    techStack: [
      { icon: SiUnity, name: "Unity", color: "#000000" },
      { icon: SiCplusplus, name: "C++", color: "#00599C" },
    ],
  },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="flex justify-center gap-4 mb-8">
          {["all", "web", "game"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black dark:bg-gray-700 dark:text-white"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
