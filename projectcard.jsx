import { motion } from 'framer-motion';
import { ExternalLink, Trophy, BookOpen } from 'lucide-react';

export default function ProjectCard({ title, description, tech, achievement }) {
  return (
    <motion.div 
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
      className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col h-full transition-all"
    >
      <div className="flex justify-between items-start mb-6">
        {achievement && (
          <span className="flex items-center gap-2 bg-blue-50 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
            {achievement.includes("Paper") ? <BookOpen size={12}/> : <Trophy size={12}/>} 
            {achievement}
          </span>
        )}
        <ExternalLink size={18} className="text-slate-300 hover:text-blue-600 cursor-pointer" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}