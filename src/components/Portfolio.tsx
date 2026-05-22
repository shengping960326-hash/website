import { motion } from 'motion/react';
import { SITE_DATA } from '../data';
import { Map, Presentation, Cuboid, ExternalLink } from 'lucide-react';

export function Portfolio() {
  const { projects } = SITE_DATA;

  return (
    <section id="portfolio" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">課程專案與作品集</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="space-y-20">
          {/* Project 1: Itinerary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200"
          >
            <div className="flex flex-col items-center mb-10 text-center">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl mb-4">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">旅遊規劃專案</h3>
              <p className="text-slate-600 max-w-2xl">{projects.itinerary.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.itinerary.days.map((day, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors">
                  <h4 className="font-bold text-lg text-blue-700 mb-4 pb-2 border-b border-blue-100">{day.day}</h4>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-3"><span className="font-semibold text-slate-900 shrink-0">上午</span> {day.morning}</li>
                    <li className="flex gap-3"><span className="font-semibold text-slate-900 shrink-0">中午</span> {day.lunch}</li>
                    <li className="flex gap-3"><span className="font-semibold text-slate-900 shrink-0">下午</span> {day.afternoon}</li>
                    <li className="flex gap-3"><span className="font-semibold text-slate-900 shrink-0">晚上</span> {day.evening}</li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-slate-200/50">
                    <span className="inline-block bg-orange-100 text-orange-700 font-medium px-3 py-1 rounded-lg text-sm">
                      預算: {day.budget}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="inline-block bg-slate-900 text-white font-bold text-xl px-8 py-4 rounded-2xl shadow-lg mb-12">
                總預算：{projects.itinerary.totalBudget} /四人行
              </div>
            </div>

            {/* Video grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-8 border-t border-slate-200 pt-12">
              <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex items-center justify-center">
                <iframe 
                  src="https://drive.google.com/file/d/1SB_PY75o3YwXxTIxgglmmmuSd1AthMg_/preview" 
                  className="w-full h-full border-0" 
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex items-center justify-center">
                <iframe 
                  src="https://drive.google.com/file/d/1YCXHagFtUIrRHknpl9jGHzBbNmVNxmdc/preview" 
                  className="w-full h-full border-0" 
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex items-center justify-center">
                <iframe 
                  src="https://drive.google.com/file/d/1Kv5bJyWJQdleMIXNo5bPP4zelpVGWLK4/preview" 
                  className="w-full h-full border-0" 
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex items-center justify-center">
                <iframe 
                  src="https://drive.google.com/file/d/1rTqtuUxXanT9ZXYq2nQ9w7G-gfdOHT4o/preview" 
                  className="w-full h-full border-0" 
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 flex flex-col items-center"
          >
            <div className="flex flex-col items-center mb-8 text-center">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-xl mb-4">
                <Presentation className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">旅遊簡報展示</h3>
              <p className="text-slate-600">展示旅遊規劃專案的數位簡報內容。</p>
            </div>

            <div className="w-full aspect-[16/10] sm:aspect-video max-w-4xl rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
              <iframe 
                src={projects.presentations[0].embedUrl} 
                className="w-full h-full border-0"
                allowFullScreen={true}
              ></iframe>
            </div>
          </motion.div>

          {/* Project 3: 3D and Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200 flex flex-col items-center gap-8"
          >
            <div className="flex flex-col items-center mb-2 text-center">
              <div className="p-3 bg-teal-100 text-teal-600 rounded-xl mb-4">
                <Cuboid className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">3D與影音展示</h3>
              <p className="text-slate-600">包含 3D 建模與動態影音作品展示。</p>
            </div>
              
            {/* Media embeds */}
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl w-full">
              <div className="flex flex-col gap-3">
                <a 
                  href="https://studio.tripo3d.ai/3d-model/46bd21a3-9d8b-402c-bd53-5549252a08fa?invite_code=ARN5FT" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center justify-self-start gap-1 p-2 bg-teal-50 rounded-lg w-fit transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Tripo3D 3D模型查看
                </a>
                <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex items-center justify-center relative">
                  <iframe 
                    src="https://drive.google.com/file/d/1hzkp_b5OZ1JQa7y94j_LdmIk6dqrc3of/preview"
                    className="w-full h-full border-0 absolute inset-0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://studio.tripo3d.ai/workspace/generate/7e0bbf8e-b9de-4da0-bd1e-afade92bff2d" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center justify-self-start gap-1 p-2 bg-teal-50 rounded-lg w-fit transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Tripo3D 3D模型查看
                </a>
                <div className="w-full aspect-video bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex items-center justify-center relative">
                  <iframe 
                    src="https://drive.google.com/file/d/1JubXuScQf7VCNUKxbEfknQzL3K9csLK3/preview"
                    className="w-full h-full border-0 absolute inset-0"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-sm text-slate-500 text-center mt-1">小時候的好朋友</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
