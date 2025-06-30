import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";

import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss,
  SiBootstrap, SiGit, SiGithub, SiVite, SiMysql, SiNodedotjs, SiCplusplus,
  SiWordpress, SiElementor, SiWoocommerce, SiUnity
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const frontendSkills = [
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss3, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
];

const backendSkills = [
  { name: "Node.js", icon: SiNodedotjs, color: "#539e43" },
  { name: "SQL", icon: SiMysql, color: "#00758f" },
];

const tools = [
  { name: "Git", icon: SiGit, color: "#f34f29" },
  { name: "GitHub", icon: SiGithub, color: "#000000" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
  { name: "C++", icon: SiCplusplus, color: "#00599c" },
  { name: "VS Code", icon: VscVscode, color: "#007acc" },
  { name: "Unity", icon: SiUnity, color: "#000000" },
];

const cmsSkills = [
  { name: "WordPress", icon: SiWordpress, color: "#21759b" },
  { name: "Elementor", icon: SiElementor, color: "#92003b" },
  { name: "WooCommerce", icon: SiWoocommerce, color: "#96588a" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 mt-8">
          {[...frontendSkills, ...backendSkills, ...tools, ...cmsSkills].map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
