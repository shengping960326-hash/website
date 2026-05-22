import { motion } from 'motion/react';
import { Mail, Instagram, Facebook, Github, Youtube, MapPin, Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavLinks = [
  { name: '首頁', href: '#home' },
  { name: '簡歷', href: '#resume' },
  { name: '技能', href: '#skills' },
  { name: '作品集', href: '#portfolio' },
  { name: '自傳', href: '#autobiography' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#" className="font-bold text-xl text-slate-800 tracking-tight">
              Andrew<span className="text-blue-600">.</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2 rounded-md"
            >
              <span className="sr-only">打開選單</span>
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-slate-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavLinks.map((link) => (
              <a
                 key={link.name}
                 href={link.href}
                 onClick={() => setIsOpen(false)}
                 className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
               >
                 {link.name}
               </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
