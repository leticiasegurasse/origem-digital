import { Network, Wifi, Users, Wrench, Quote } from 'lucide-react';

const WhyOrigemDigital = () => {
  const reasons = [
    {
      icon: <Network size={40} />,
      title: 'Internet estável o dia todo',
      description: 'Velocidade garantida mesmo nos horários de pico, quando todo mundo está conectado.',
    },
    {
      icon: <Wifi size={40} />,
      title: 'Roteadores atualizados',
      description: 'Wi-Fi 6 nos planos top para máxima velocidade e alcance na sua casa.',
    },
    {
      icon: <Users size={40} />,
      title: 'Atendimento próximo',
      description: 'Times locais que conhecem sua região e estão prontos para ajudar.',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Instalação organizada e limpa',
      description: 'Técnicos qualificados que realizam a instalação com cuidado e profissionalismo.',
    },
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'Centro, Miracema',
      text: 'Melhor internet que já tive! Trabalho de casa e nunca mais tive problemas com quedas.',
      rating: 5,
    },
    {
      name: 'João Santos',
      location: 'Palma',
      text: 'Atendimento excelente e instalação super rápida. Recomendo!',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      location: 'Laje do Muriaé',
      text: 'Mudei da concorrente e não me arrependo. Internet estável e suporte sempre disponível.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por que a Origem Digital?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Conectamos sua rotina com estabilidade de verdade
          </p>
        </div>

        {/* Motivos - Cards Melhorados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 hover:border-[var(--color-primary)] hover:-translate-y-2"
            >
              {/* Ícone com Background Circular */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {reason.icon}
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {reason.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Depoimentos - Seção Redesenhada */}
        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
              O que nossos clientes dizem
            </h3>
            <p className="text-white/90 text-lg">
              Veja a experiência de quem já é Origem Digital
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative"
              >
                {/* Ícone de Aspas */}
                <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center shadow-lg">
                  <Quote size={24} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-5 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-700 mb-6 italic text-base leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Autor */}
                <div className="border-t-2 border-gray-100 pt-5">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 font-medium flex items-center gap-1 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyOrigemDigital;

