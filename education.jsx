export default function Education() {
  return (
    <section className="bg-white py-20 px-6 border-y border-slate-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:border-blue-200 transition">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Aug 2025 - May 2027</span>
            <h3 className="text-xl font-bold mt-2 text-slate-900">University of Maryland</h3>
            <p className="text-slate-600 italic">MS in Data Science | GPA: 3.9/4.0</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:border-blue-200 transition">
            <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Bachelor of Engineering</span>
            <h3 className="text-xl font-bold mt-2 text-slate-900">SPPU University, Pune</h3>
            <p className="text-slate-600 italic text-sm">AI and Data Science | CGPA: 8.98/10</p>
          </div>
        </div>
      </div>
    </section>
  );
}