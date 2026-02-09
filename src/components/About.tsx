import { ArrowRight } from 'lucide-react';

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">
              Mais do que elétrica.<br />Engenharia aplicada.
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                A <span className="font-semibold text-blue-900">SENDLIGHT Soluções Elétricas</span> atua com foco em qualidade, segurança e alto padrão de execução.
              </p>
              <p>
                Cada projeto é planejado com precisão técnica, respeitando normas, prazos e a necessidade real de cada cliente.
              </p>
              <p>
                Nossa expertise abrange desde instalações residenciais de alto padrão até complexos sistemas industriais, sempre com o compromisso de entregar soluções que combinam segurança, eficiência e tecnologia.
              </p>
            </div>
            <button
              onClick={() => scrollToSection('services')}
              className="mt-8 inline-flex items-center space-x-2 text-blue-900 font-semibold hover:text-yellow-500 transition-colors group"
            >
              <span>Conheça nossos diferenciais</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
  {/* Imagem de fundo */}
  <img
    src="https://i.imgur.com/w56Ai1X.jpeg"
    alt="SENDLIGHT - Engenharia elétrica"
    className="w-full h-full object-cover"
  />

  {/* Overlay para leitura do texto */}
  <div className="absolute inset-0 bg-blue-900/60"></div>

  {/* Texto por cima */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white p-8">
      <div className="text-6xl font-bold mb-4">5+</div>
      <div className="text-2xl font-light">Anos de excelência técnica</div>
    </div>
  </div>
</div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
