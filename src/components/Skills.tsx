import { motion } from 'motion/react';
import { SITE_DATA } from '../data';
import { Languages, Wrench, MonitorSmartphone, ShieldCheck } from 'lucide-react';

export function Skills() {
  const { skills } = SITE_DATA;

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">技能與專長</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Languages */}
          <SkillCard 
            title="語言能力" 
            icon={<Languages className="w-6 h-6" />}
            colorClass="bg-violet-100 text-violet-600 border-violet-200"
            delay={0.1}
          >
            <ul className="space-y-4">
              {skills.language.map((lang, idx) => (
                <li key={idx} className="flex flex-col gap-1">
                  <span className="font-bold text-slate-800">{lang.name}</span>
                  <span className="text-sm text-slate-600">{lang.level}</span>
                </li>
              ))}
            </ul>
          </SkillCard>

          {/* Professional Skills */}
          <SkillCard 
            title="專業技能" 
            icon={<Wrench className="w-6 h-6" />}
            colorClass="bg-blue-100 text-blue-600 border-blue-200"
            delay={0.2}
            className="md:col-span-2 lg:col-span-2"
          >
            <div className="grid sm:grid-cols-3 gap-6">
              {skills.professional.map((prof, idx) => (
                <div key={idx}>
                  <h4 className="font-bold text-slate-800 mb-3 pb-2 border-b border-slate-100">{prof.category}</h4>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1.5">
                    {prof.items.map((item, i) => (
                       <li key={i} className="leading-snug">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SkillCard>

          {/* Computer Skills & Certs */}
          <div className="space-y-8 flex flex-col justify-between h-full">
            <SkillCard 
              title="電腦技能" 
              icon={<MonitorSmartphone className="w-6 h-6" />}
              colorClass="bg-amber-100 text-amber-600 border-amber-200"
              delay={0.3}
            >
               <ul className="space-y-2 text-sm text-slate-700">
                  {skills.computer.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {item}
                    </li>
                  ))}
               </ul>
            </SkillCard>

            <SkillCard 
              title="專業證照" 
              icon={<ShieldCheck className="w-6 h-6" />}
              colorClass="bg-teal-100 text-teal-600 border-teal-200"
              delay={0.4}
            >
               <ul className="space-y-2 text-sm text-slate-700">
                  {skills.certifications.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                       {item}
                    </li>
                  ))}
               </ul>
            </SkillCard>
          </div>

        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, icon, colorClass, children, delay, className = "" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorClass}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-6">{title}</h3>
      {children}
    </motion.div>
  );
}
