import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Equipe técnica extremamente profissional. Entrega segura, organizada e dentro do padrão exigido para um projeto industrial de grande porte.',
      author: 'Carlos Mendes',
      role: 'Diretor de Operações',
    
    },
    {
      text: 'Projeto elétrico impecável para nosso edifício corporativo. A SENDLIGHT demonstrou domínio técnico e compromisso com prazos em todas as etapas.',
      author: 'Ana Paula Costa',
    
    },
    {
      text: 'Automação residencial executada com excelência. Tecnologia de ponta aliada a uma equipe que entende as reais necessidades do cliente.',
      author: 'Roberto Silva',
      role: 'Proprietário',

    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Empresas e clientes que confiaram na SENDLIGHT.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-yellow-400 opacity-20" />

              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-blue-100 pt-4">
                <p className="font-bold text-blue-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-blue-700 font-semibold">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-blue-50 py-8 rounded-2xl">
          <p className="text-lg font-semibold text-blue-900">
            Alto índice de satisfação em projetos residenciais, prediais e industriais.
          </p>
        </div>
      </div>
    </section>
  );
}
