import { motion } from 'motion/react';
import { SITE_DATA } from '../data';
import { Quote } from 'lucide-react';

export function Autobiography() {
  const { autobiography } = SITE_DATA;
  const paragraphs = autobiography.split('\n\n');

  return (
    <section id="autobiography" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
           <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
             <Quote className="w-8 h-8" fill="currentColor" />
           </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">個人自傳</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100/50 max-w-none text-base sm:text-lg"
        >
          {paragraphs.map((p, i) => (
            <p key={i} className="text-slate-700 leading-loose text-justify mb-6 last:mb-0">
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
