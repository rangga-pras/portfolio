import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Software Engineering',
    institution: 'SMKN 2 Surakarta',
    period: '2021 - 2024',
    score: '89,74',
  },
  {
    degree: 'Computer Science',
    institution: 'Cakrawala University',
    period: '2025 - Present',
    score: '-',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
