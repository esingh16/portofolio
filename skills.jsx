const skillGroups = [
  { category: "Advanced AI", items: ["RAG", "Generative AI", "LangChains", "Vector DBs", "AI-Agents"] },
  { category: "ML & Data Science", items: ["Python", "SQL", "Pandas", "NumPy", "NLP", "Deep Learning", "XGBoost"] },
  { category: "Analytics & Tools", items: ["Tableau", "Power BI", "Git/GitHub", "Jupyter", "Google Cloud", "ETL"] }
];

export default function Skills() {
  return (
    <section className="bg-slate-900 py-24 px-6 text-white rounded-3xl mx-4 my-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">Technical Expertise</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-6">
              <h3 className="text-blue-400 font-bold text-sm uppercase tracking-[0.2em]">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map(item => (
                  <span key={item} className="text-slate-300 text-sm border border-slate-700 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}