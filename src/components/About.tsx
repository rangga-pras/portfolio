import { SectionTitle } from "./ui/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      {/* Background Elements */}

      <div className="container mx-auto px-6 relative">
        <SectionTitle>About Me</SectionTitle>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Rangga Prasetya</span>,
            a first-semester Computer Science student who just started my journey in the world of programming.
            I'm still a beginner, but I'm eager to learn web development and build real-world projects step by step.
            With each line of code, I'm discovering how technology can shape the future — and I'm excited to be part of it.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
              🚀 I love solving problems through hands-on learning and experimentation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
