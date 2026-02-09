import { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    whatsapp: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({ name: '', company: '', whatsapp: '', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Erro ao enviar mensagem. Por favor, tente novamente.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Solicite seu orçamento técnico
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fale com nossa equipe e receba uma solução elétrica planejada, segura e adequada às necessidades do seu projeto.
          </p>
          <div className="inline-block mt-6 bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-semibold">
            Agenda técnica limitada para novos projetos
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* FORMULÁRIO */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-blue-900 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-blue-900 mb-2">
                    Empresa (opcional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-blue-900 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="(35) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-blue-900 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Descreva seu projeto ou necessidade"
                  ></textarea>
                </div>

                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                {isSuccess && (
                  <div className="bg-green-50 text-green-600 p-4 rounded-xl text-sm flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all hover:shadow-xl hover:shadow-yellow-400/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar solicitação'}</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* MAPA + CONTATOS */}
          <div className="space-y-8">
            {/* MAPA */}
            <div className="bg-white p-4 rounded-2xl shadow-lg h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.167187520443!2d-45.709115499999996!3d-22.246506099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8748d0ef2734b6dd%3A0x5404e189275e78c8!2zU0VORExJR0hUIC0gU09MVcOHw5VFUyBFTMOJVFJJQ0FT!5e1!3m2!1spt-BR!2sbr!4v1767709097869!5m2!1spt-BR!2sbr"
                className="w-full h-full rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>

            {/* INFO */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Endereço</p>
                  <p className="text-gray-600">Santa Rita do Sapucaí - MG</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Telefone</p>
                  <p className="text-gray-600">(35) 99887-4509</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-blue-900">E-mail</p>
                  <p className="text-gray-600">eletricistacesarmoreira@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5535998874509"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-yellow-400 text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all hover:shadow-xl hover:shadow-yellow-400/30"
          >
            <Phone className="w-5 h-5" />
            <span>Fale conosco no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
