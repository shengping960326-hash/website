import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Resume } from './components/Resume';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Autobiography } from './components/Autobiography';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 relative">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Resume />
        <Skills />
        <Portfolio />
        <Autobiography />
      </main>

      <Footer />
    </div>
  );
}
