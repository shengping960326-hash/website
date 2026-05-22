import { motion } from 'motion/react';
import { SITE_DATA } from '../data';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Resume() {
  const { experience, education } = SITE_DATA;

  return (
    <section id="resume" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">個人簡歷</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">打工經驗</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {experience.map((job, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 group-[.is-active]:bg-blue-600 text-white shadow shrink-0 z-10 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                    <div className="flex justify-between flex-wrap gap-2 mb-2">
                       <h4 className="font-bold text-lg text-slate-900">{job.company}</h4>
                       <span className="bg-slate-100 text-slate-600 text-sm font-medium px-3 py-1 rounded-full">{job.period}</span>
                    </div>
                    <p className="font-medium text-blue-600 mb-4">{job.role}</p>
                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                      {job.tasks.map((task, i) => (
                        <li key={i} className="leading-relaxed">{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">學歷</h3>
            </div>

            <div className="space-y-6">
               {education.map((edu, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col gap-2">
                    <span className="text-sm font-medium text-slate-500">{edu.period}</span>
                    <h4 className="text-xl font-bold text-slate-900">{edu.school}</h4>
                    <p className="text-lg text-slate-700">{edu.department}</p>
                    <div className="self-start px-3 py-1 bg-emerald-50 text-emerald-700 font-medium text-sm rounded-full mt-2">
                      {edu.status}
                    </div>
                  </div>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
