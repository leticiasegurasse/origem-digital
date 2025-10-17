import { Zap, Calendar, MapPin, Wifi } from 'lucide-react';

const QuickBenefits = () => {
  const benefits = [
    {
      icon: <Zap size={40} />,
      title: 'Fibra 100% até sua casa',
      description: 'Conexão direta e estável'
    },
    {
      icon: <Calendar size={40} />,
      title: 'Instalação rápida',
      description: 'Processo ágil e sem complicações'
    },
    {
      icon: <MapPin size={40} />,
      title: 'Atendimento local',
      description: 'Suporte próximo de você'
    },
    {
      icon: <Wifi size={40} />,
      title: 'Wi-Fi 6',
      description: 'Tecnologia de ponta disponível'
    },
  ];

  return (
    <section className="py-16 md:py-20 ">
      <div className="container mx-auto px-4">

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 hover:border-[var(--color-primary)] hover:-translate-y-1"
            >
              {/* Ícone com background */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-primary)] text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              {/* Título */}
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {benefit.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-sm text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Texto de Cobertura */}
        <div className="bg-[var(--color-secondary)] rounded-2xl p-6 sm:p-8 text-center shadow-lg">
          <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
            <span className="font-semibold block sm:inline mb-2 sm:mb-0">Cidades atendidas:</span>
            <span className="block sm:inline"> Miracema, Laje do Muriaé, Paraíso do Tobias, 
            Pirapetinga, Estrela Dalva, Monte Alegre, Palma e Santo Antônio de Padua</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickBenefits;

