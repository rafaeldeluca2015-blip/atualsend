import { useState } from 'react';

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const projects = [
    {
  type: 'AP em Edíficio Comercial',
  description:
    'Instalação elétrica completa com automação, iluminação técnica e sistema de segurança integrado.',
  specs: 'Automação · Iluminação LED · CFTV',
  video:
    'https://res.cloudinary.com/downfwgxg/video/upload/f_auto,q_auto,vc_auto,w_900/alto_padr%C3%A3o_tfvisv',
},

    {
  type: 'Residencial Alto Padrão',
  description:
    'Projeto Alto Padrão de iluminação, elétrica e climatização, infraestrutura completa.',
  specs: 'Projeto Elétrico · Subestação · BMS',
  video:
    'https://res.cloudinary.com/downfwgxg/video/upload/f_auto,q_auto,vc_auto,w_900/SnapInsta.to_AQPSwJsI9HENGTPP381p2zNNWXOUOqYvoohiVLGY7-MygRkD4kYQsM4Y9CDTxsZOpJGXSkgnbczu-p7zyZON7Og9ImrVkKZrCbtI7AM_isaafs',
},

    {
      type: 'Shopping Center',
      description:
        'Sistema elétrico completo para centro comercial incluindo iluminação e segurança elétrica.',
      specs: 'Alta Tensão · Iluminação',
      video:
        'https://res.cloudinary.com/downfwgxg/video/upload/f_auto,q_auto,vc_auto,w_900/SnapInsta.to_AQPum8ol-vtyYx0XzpuXdTmHWjlSnELywMULO0QZDV0iytIzilbAb3JD3ED5xDxSh724g3qchTKSSS1SLP8VvkbewD2h9SG64gCr1r0_mnycnv',
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="py-24 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Projetos executados com excelência técnica.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Cada projeto é único e desenvolvido com total atenção aos detalhes
              técnicos e normativos.
            </p>
            <p className="text-lg font-semibold text-blue-700">
              Nada gera mais confiança do que projetos bem executados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => setActiveVideo(project.video)}
                className="cursor-pointer group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <video
                      src={project.video}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl shadow-lg">
                        ▶
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      {project.type}
                    </span>
                    <p className="text-gray-700 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.specs.split(' · ').map((spec, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-4xl font-bold hover:text-yellow-400"
            >
              ×
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
