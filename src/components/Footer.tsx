import { Phone, Instagram, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-900" />
              </div>
              <span className="text-2xl font-bold">SENDLIGHT</span>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Soluções Elétricas com padrão de engenharia para projetos que exigem excelência técnica.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-200">
                <Phone className="w-5 h-5" />
                <span>(35) 99887-4509</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-200">
                <Instagram className="w-5 h-5" />
                <span>@sendlighteletrica</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Especialidades</h3>
            <ul className="space-y-2 text-blue-200">
              <li>Instalações Elétricas</li>
              <li>Automação</li>
              <li>Projetos Elétricos</li>
              <li>Segurança Eletrônica</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center space-y-2">
          <p className="text-blue-200">
            © 2026 SENDLIGHT Soluções Elétricas. Todos os direitos reservados.
          </p>
          <p className="text-yellow-400 font-semibold">
            Segurança, tecnologia e confiança.
          </p>
        </div>
      </div>
    </footer>
  );
}
