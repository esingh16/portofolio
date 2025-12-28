import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-7xl font-extrabold text-slate-900 mb-4 tracking-tighter">Eshan Singh</h1>
        <h2 className="text-2xl text-blue-600 font-semibold mb-6 italic">Data Science & AI Engineer</h2>
        <p className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed font-medium">
          MS in Data Science at the University of Maryland (GPA 3.9/4.0). Proficient in Python, SQL, and end-to-end ML pipelines.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a href="/Singh_Eshan_RESUME.pdf" download className="flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg">
            <Download size={20} /> Download Resume
          </a>
          <div className="flex gap-6 items-center px-6 border-l border-slate-200">
            <a href="mailto:esingh16@umd.edu" className="text-slate-400 hover:text-blue-600 transition"><Mail size={24}/></a>
            <a href="https://linkedin.com/in/eshansingh" className="text-slate-400 hover:text-blue-600 transition"><Linkedin size={24}/></a>
            <a href="https://github.com/eshansingh" className="text-slate-400 hover:text-blue-600 transition"><Github size={24}/></a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}