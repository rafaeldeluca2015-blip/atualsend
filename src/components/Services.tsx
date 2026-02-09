import { Lightbulb, Shield, Cpu, Wrench, FileText, Zap } from 'lucide-react';

export default function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const services = [
    {
      icon: Zap,
      title: 'Instalações Elétricas',
      description: 'Execução segura e normatizada para projetos residenciais, prediais e industriais.',
    },
    {
      icon: Lightbulb,
      title: 'Iluminação Técnica e Decorativa',
      description: 'Eficiência energética, estética e conforto visual em ambientes de qualquer porte.',
    },
    {
      icon: Shield,
      title: 'Segurança Eletrônica',
      description: 'Proteção, aterramento e adequações técnicas conforme normas regulamentadoras.',
    },
    {
      icon: Cpu,
      title: 'Automação Residencial, Predial e Industrial',
      description: 'Controle inteligente, tecnologia de ponta e eficiência operacional.',
    },
    {
      icon: Wrench,
      title: 'Manutenção Elétrica',
      description: 'Serviços preventivos e corretivos para garantir a continuidade operacional.',
    },
    {
      icon: FileText,
      title: 'Projetos Elétricos',
      description: 'Planejamento técnico completo para obras de qualquer porte e complexidade.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Soluções elétricas para projetos que exigem confiança.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços de elétrica com padrão técnico elevado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-400 group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all hover:shadow-xl hover:shadow-yellow-400/30 hover:scale-105"
          >
            Quero uma solução elétrica profissional
          </button>
        </div>
      </div>
    </section>
  );
}
