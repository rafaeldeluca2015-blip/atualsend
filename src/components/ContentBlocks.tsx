import { Shield, Building2, Cpu, ArrowRight } from 'lucide-react';

export default function ContentBlocks() {
  const blocks = [
    {
      icon: Shield,
      title: 'Importância da segurança elétrica em projetos modernos',
      content:
        'A segurança elétrica não é apenas uma exigência normativa, mas um investimento essencial para proteger pessoas, equipamentos e patrimônio. Em projetos modernos, sistemas adequados de proteção, aterramento e dispositivos de segurança são fundamentais para prevenir acidentes e garantir a continuidade operacional.',
      iconPosition: 'left' as const,
    },
    {
      icon: Building2,
      title: 'Diferença entre instalação comum e engenharia elétrica',
      content:
        'Enquanto uma instalação comum atende requisitos básicos, a engenharia elétrica envolve análise técnica completa, dimensionamento adequado, planejamento de expansões futuras e conformidade rigorosa com normas. O resultado é um sistema eficiente, seguro e preparado para as demandas reais do projeto.',
      iconPosition: 'right' as const,
    },
    {
      icon: Cpu,
      title: 'Como a automação aumenta eficiência e segurança',
      content:
        'Sistemas de automação permitem controle preciso de iluminação, climatização, segurança e consumo energético. Além de proporcionar conforto e praticidade, reduzem custos operacionais e aumentam a segurança através de monitoramento em tempo real e ações automatizadas em situações de risco.',
      iconPosition: 'left' as const,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Conteúdo técnico e orientação profissional.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informações relevantes para quem busca excelência em engenharia elétrica.
          </p>
        </div>

        <div className="space-y-16">
          {blocks.map((block, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                block.iconPosition === 'right' ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={block.iconPosition === 'right' ? 'md:col-start-2' : ''}>
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-12 shadow-2xl relative overflow-hidden h-full flex items-center justify-center min-h-[300px]">
                  <block.icon className="w-32 h-32 text-yellow-400 relative z-10" />
                  <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
                </div>
              </div>

              <div className={block.iconPosition === 'right' ? 'md:col-start-1 md:row-start-1' : ''}>
                <h3 className="text-3xl font-bold text-blue-900 mb-6 leading-tight">{block.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">{block.content}</p>
                <button className="inline-flex items-center space-x-2 text-blue-900 font-semibold hover:text-yellow-500 transition-colors group">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
