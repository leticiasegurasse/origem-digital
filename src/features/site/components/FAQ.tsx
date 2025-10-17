import { useState } from 'react';
import { ChevronDown, Ticket, Gauge, Wifi, FileText, HelpCircle, ExternalLink } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona a instalação?',
      answer: 'Nossa equipe técnica agenda um horário conveniente com você. A instalação é feita no mesmo dia e inclui passagem de cabo de fibra óptica, instalação do equipamento e configuração do Wi-Fi. Todo o processo leva em média 2 a 3 horas.',
    },
    {
      question: 'Como faço para pagar a segunda via do boleto?',
      answer: 'Você pode acessar a área do cliente no nosso site ou entrar em contato via WhatsApp. Também enviamos o boleto por e-mail todo mês.',
    },
    {
      question: 'Como testar a velocidade da minha internet?',
      answer: 'Recomendamos usar sites como Fast.com ou Speedtest.net. Para resultados mais precisos, conecte seu computador diretamente ao roteador via cabo de rede e feche outros programas durante o teste.',
    },
    {
      question: 'O roteador está incluído no plano?',
      answer: 'Sim! Todos os nossos planos incluem o roteador Wi-Fi em comodato, sem custo adicional. Planos a partir de 600 Mega incluem roteadores com tecnologia Wi-Fi 6.',
    },
    {
      question: 'Quais as condições do contrato?',
      answer: 'Para conhecer todas as condições contratuais, incluindo fidelidade e termos de instalação, consulte nosso regulamento completo. Entre em contato via WhatsApp para receber mais informações.',
    },
    {
      question: 'Qual a diferença entre os planos?',
      answer: 'A principal diferença é a velocidade de download e upload. Planos mais altos também incluem tecnologia Wi-Fi 6 para melhor cobertura e desempenho. Consulte as condições de cada plano.',
    },
  ];

  const quickActions = [
    {
      icon: <Ticket size={36} />,
      title: 'Abrir chamado',
      description: 'Suporte técnico',
      link: '/suporte/chamado',
    },
    {
      icon: <FileText size={36} />,
      title: '2ª via do boleto',
      description: 'Fatura online',
      link: '/segunda-via',
    },
    {
      icon: <Gauge size={36} />,
      title: 'Teste de velocidade',
      description: 'Medir conexão',
      link: 'https://fast.com',
      external: true,
    },
    {
      icon: <Wifi size={36} />,
      title: 'Manual do Wi-Fi',
      description: 'Configurações',
      link: '/suporte/wifi',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Ações Rápidas */}
        <div className="mb-20">
          <div className="text-center mb-10 sm:mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Suporte & Autoatendimento
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Resolva suas dúvidas rapidamente
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.link}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border-2 border-gray-100 hover:border-[var(--color-primary)] hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Conteúdo */}
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {action.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">{action.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{action.description}</p>
                  
                  {action.external && (
                    <ExternalLink size={16} className="inline-block text-[var(--color-primary)] mt-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white mb-4 sm:mb-6 shadow-xl">
              <HelpCircle size={32} className="sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Perguntas Frequentes
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-[var(--color-primary)] shadow-2xl' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-start justify-between text-left hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start gap-3 sm:gap-4 flex-1">
                    {/* Número da pergunta */}
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-colors ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }`}>
                      {index + 1}
                    </div>
                    
                    {/* Pergunta */}
                    <span className="font-bold text-gray-900 text-sm sm:text-base md:text-lg pr-2 sm:pr-4 pt-0.5 sm:pt-1">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Ícone */}
                  <div className={`flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 text-[var(--color-primary)]' : 'text-gray-400'
                  }`}>
                    <ChevronDown size={24} className="sm:w-7 sm:h-7" />
                  </div>
                </button>
                
                {/* Resposta com animação */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pl-4 sm:pl-16 md:pl-[88px]">
                    <div className="bg-gradient-to-r from-gray-50 to-transparent p-4 sm:p-5 md:p-6 rounded-xl border-l-4 border-[var(--color-primary)]">
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

