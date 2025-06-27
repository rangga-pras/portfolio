import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from './Link';
import { TypeWriter } from './ui/TypeWriter';
import { SocialLinks } from './hero/SocialLinks';
import { ContactInfo } from './hero/ContactInfo';
import { ActionButtons } from './hero/ActionButtons';

export function Hero() {
  const roles = [
    "Web Developer",
    "React Enthusiast",
    "Freelancer",
    "Student at Informatics",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient and Orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/30 dark:bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/30 dark:bg-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-10 py-16 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Kiri - Teks */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 md:items-start md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Hi, I’m Rangga Prasetya 👋
            </h1>
            <h2 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300">
              <TypeWriter words={roles} />
            </h2>
            <ContactInfo />
            <ActionButtons />
          </div>

          {/* Kanan - Foto & Sosial Media */}
          <div className="flex flex-col items-center space-y-4">
            <img
              src="/assets/profile.webp"
              alt="Rangga Prasetya"
              className="rounded-full w-48 h-48 object-cover shadow-xl"
            />
            <SocialLinks />
          </div>
        </div>

        {/* Scroll Down */}
        <div className="mt-10 flex justify-center">
          <Link href="#about" className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline">
            Scroll Down <ArrowDown size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
