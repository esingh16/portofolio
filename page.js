"use client";
import Hero from '@/components/Hero';
import Education from '@/components/education';
import ProjectCard from '@/components/projectcard';
import Experience from '@/components/experience';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Hero />
      <Education />
      
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-slate-900">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            title="Care Compass" 
            achievement="2nd Place @ Gemini Hackathon UMD"
            description="Full-stack health platform using FHIR standards for real-time risk assessment and MongoDB for patient data."
            tech={["React", "Node.js", "MongoDB", "FHIR"]}
          />
          <ProjectCard 
            title="Career Counselling AI" 
            achievement="Published Paper @ WRFER"
            description="Android app using RAG and GPT models for context-aware career recommendations with voice features."
            tech={["RAG", "NLP", "GPT Models", "Android"]}
          />
          <ProjectCard 
            title="Loan Risk Prediction" 
            description="Binary classification model using Gradient Boosting and LIME for transparent, explainable risk insights."
            tech={["XGBoost", "LIME", "Python", "ML"]}
          />
        </div>
      </section>

      <Experience />
      <Skills />

      <footer className="py-20 text-center text-slate-500 border-t border-slate-100">
        <p className="font-semibold text-slate-900">Eshan Singh</p>
        <p className="text-sm mt-2">College Park, Maryland | esingh16@umd.edu</p>
      </footer>
    </main>
  );
}