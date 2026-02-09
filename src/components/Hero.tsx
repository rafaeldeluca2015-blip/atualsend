import { Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100svh]
        pt-28
        md:pt-0
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        {/* Glow effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <Zap
              key={i}
              className="absolute text-yellow-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                animation: `pulse ${2 + Math.random() * 3}s infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Soluções elétricas no mais alto padrão.
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Instalações, automação, iluminação e segurança elétrica para projetos
          residenciais, prediais e industriais — com excelência técnica e total
          confiabilidade.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all hover:shadow-2xl hover:shadow-yellow-400/40 hover:scale-105"
          >
            Solicitar orçamento técnico
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all hover:scale-105"
          >
            Ver nossos projetos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
