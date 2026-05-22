import { motion } from 'motion/react';
import { SITE_DATA } from '../data';
import { Mail, Instagram, Facebook, Github, Youtube, Calendar } from 'lucide-react';

export function Hero() {
  const { profile } = SITE_DATA;

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-3/5 space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight">
              {profile.name.split(' ')[0]} <span className="text-blue-600">{profile.name.split(' ')[1]}</span>
            </h1>
            <div className="flex items-center text-slate-500 gap-2 mt-2">
              <Calendar className="w-4 h-4" />
              <span>{profile.birthday}</span>
              <span className="mx-2">•</span>
              <Mail className="w-4 h-4" />
              <a href={`mailto:${profile.email}`} className="hover:text-blue-600 transition-colors">{profile.email}</a>
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed max-w-2xl bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
            {profile.bio}
          </p>

          <div className="flex space-x-6">
            <SocialLink href={profile.social.instagram} icon={<Instagram className="w-6 h-6" />} label="Instagram" />
            <SocialLink href={profile.social.facebook} icon={<Facebook className="w-6 h-6" />} label="Facebook" />
            <SocialLink href={profile.social.youtube} icon={<Youtube className="w-6 h-6" />} label="YouTube" />
            <SocialLink href={profile.social.github} icon={<Github className="w-6 h-6" />} label="GitHub" />
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-2/5 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            {/* The image from the video shows a guy sitting on a scooter. I'll use a placeholder styled as a circle. */}
            <img 
              referrerPolicy="no-referrer"
              src={profile.avatar} 
              alt={profile.name}
              className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-white z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="text-slate-400 hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full"
    >
      {icon}
    </a>
  );
}
