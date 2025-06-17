
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "WAR – The Fight Within ME, MYSELF and I",
    description: "Directed and produced a 3D short film aligning artistic vision with technical execution."
  },
  {
    title: "The Moroccan YU-GI-OH Cards",
    description: "Co-designed custom Yu-Gi-Oh cards for Moroccan National Football Team. Merged sports and pop culture elements through creative visual design."
  },
  {
    title: "ZMANINO Animated Series Assets",
    description: "Contributed to Moroccan animated series ZMANINO, creating 3D assets through modeling, UV unwrapping, and texturing workflows."
  }
];

const experiences = [
  {
    role: "3D Hard Surface and Prop Artist",
    company: "Bloody Rain Studios LLC",
    period: "April 2025 – Present",
    details: [
      "Delivering AAA game-ready props.",
      "Mentoring junior artists.",
      "Collaborating with cross-disciplinary teams.",
      "Ensuring real-time rendering standards."
    ]
  },
  {
    role: "3D Generalist - Intern",
    company: "Bloody Rain Studios LLC",
    period: "September 2024 - April 2025",
    details: [
      "Mastered game-optimized workflows.",
      "Resolved baking artifacts and material errors.",
      "Co-owned asset deliveries."
    ]
  },
  {
    role: "3D Generalist - Intern",
    company: "Artchemist Studio",
    period: "February 2024 – June 2024",
    details: [
      "Created 3D assets for ZMANINO.",
      "Completed rigging and animation exercises.",
      "Maintained visual consistency."
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16 font-sans">
      <section className="text-center mb-20">
        <motion.h1 
          className="text-6xl font-extrabold mb-4" 
          initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>
          Yassine Elwadoudi
        </motion.h1>
        <p className="text-xl mb-8">3D Prop & Texturing Artist</p>
        <p className="max-w-2xl mx-auto mb-4">
          Delivering AAA game-ready assets blending technical efficiency with artistic mastery. Specialized in hard surface modeling, UV unwrapping, PBR texturing, and real-time optimization.
        </p>
        <div className="flex justify-center gap-6 mt-8">
          <a href="#projects" className="border border-white px-6 py-2">Projects</a>
          <a href="#experience" className="border border-white px-6 py-2">Experience</a>
          <a href="/Yassine_Elwadoudi_Resume.pdf" target="_blank" className="border border-white px-6 py-2">Download CV</a>
        </div>
      </section>

      <section id="projects" className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-center">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
              <div className="placeholder-icon mt-4"></div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="project-card p-6">
              <h3 className="text-2xl font-semibold">{exp.role} - {exp.company}</h3>
              <p className="italic mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-1">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p>Email: <a href="mailto:yassineelwadoudi2@gmail.com" className="underline">yassineelwadoudi2@gmail.com</a></p>
        <p><a href="https://www.artstation.com/yassine_elwadoudi" className="underline">ArtStation</a></p>
        <p><a href="https://www.linkedin.com/in/yassine-elwadoudi-625499248/" className="underline">LinkedIn</a></p>
      </section>
    </main>
  );
}
