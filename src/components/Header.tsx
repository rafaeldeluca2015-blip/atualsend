import { useState, useEffect } from 'react';
import { Phone, Zap } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
    <Zap className="w-5 h-5 text-blue-900" />
  </div>
  <span className="text-blue-900 font-bold text-xl tracking-tight">
    SENDLIGHT
  </span>
</div>


        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-blue-900 hover:text-yellow-500 font-medium transition-colors">
            Início
          </button>
          <button onClick={() => scrollToSection('services')} className="text-blue-900 hover:text-yellow-500 font-medium transition-colors">
            Serviços
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-blue-900 hover:text-yellow-500 font-medium transition-colors">
            Projetos
          </button>
          <button onClick={() => scrollToSection('about')} className="text-blue-900 hover:text-yellow-500 font-medium transition-colors">
            Sobre
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-blue-900 hover:text-yellow-500 font-medium transition-colors">
            Contato
          </button>
        </div>

        <a
          href="https://wa.me/5535998874509"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-blue-900 px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-500 transition-all hover:shadow-lg hover:shadow-yellow-400/30 flex items-center space-x-2"
        >
          <Phone className="w-4 h-4" />
          <span>Fale conosco</span>
        </a>
      </nav>
    </header>
  );
}
