import { Shield, Award, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CredibilityStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      icon: Shield,
      text: 'Projetos executados conforme normas técnicas',
    },
    {
      icon: Award,
      text: 'Soluções completas em elétrica e eletrônica',
    },
    {
      icon: Users,
      text: 'Atendimento profissional e especializado',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white relative -mt-20 z-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-50 hover:border-yellow-400 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <p className="text-blue-900 text-lg font-semibold leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
