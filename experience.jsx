import { motion } from 'framer-motion';

const experiences = [
  {
    company: "YBI Foundation",
    role: "Data Science and AIML Engineer Intern",
    period: "Oct 2024 - Jan 2025",
    location: "Delhi, India",
    points: [
      "Built a handwritten digit classification system (MNIST) using CNN, achieving 87-92% accuracy. [cite: 20]",
      "Developed bank customer churn prediction models using feature engineering and EDA. [cite: 21]"
    ]
  },
  {
    company: "Nexus Info",
    role: "AIML Engineer Intern",
    period: "Dec 2023 - Mar 2024",
    location: "Coimbatore, India",
    points: [
      "Designed a real-time chatbot for college admissions using NLP and deployed via Flask. [cite: 25]",
      "Engineered a multi-class Disease Prediction System using Random Forest and XGBoost. [cite: 26, 27]"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-200">
      <h2 className="text-3xl font-bold mb-16 text-slate-900">Professional Experience</h2>
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-slate-200"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
              <span className="text-blue-600 font-mono text-sm font-bold">{exp.period}</span>
            </div>
            <p className="text-slate-500 font-medium mb-6 uppercase tracking-widest text-xs">{exp.company} • {exp.location}</p>
            <ul className="space-y-4">
              {exp.points.map((p, i) => (
                <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-3">
                  <span className="text-blue-600 mt-1">•</span> {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}