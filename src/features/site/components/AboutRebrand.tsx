import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

interface AboutRebrandProps {
  onLearnMoreClick: () => void;
}

const AboutRebrand = ({ onLearnMoreClick }: AboutRebrandProps) => {
  const continuity = [
    { label: 'Mesma equipe', icon: <CheckCircle2 size={20} /> },
    { label: 'Mesma direção', icon: <CheckCircle2 size={20} /> },
    { label: 'Mesmo CNPJ', icon: <CheckCircle2 size={20} /> },
    { label: 'Mesma estrutura', icon: <CheckCircle2 size={20} /> },
    { label: 'Mesmo compromisso', icon: <CheckCircle2 size={20} /> },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge de Destaque */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border-2 border-white/30 shadow-lg">
              <Sparkles size={24} className="animate-pulse" />
              <span className="font-bold text-lg uppercase tracking-wide">Importante</span>
              <Sparkles size={24} className="animate-pulse" />
            </div>
          </div>

          {/* Título Principal */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              De G2 Telecom para <br />
              <span className="text-yellow-300">Origem Digital</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border-2 border-white/30">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-white whitespace-nowrap">G2 Telecom</p>
              </div>
              <ArrowRight size={32} className="text-yellow-300 animate-pulse rotate-90 sm:rotate-0" />
              <div className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl border-2 border-yellow-300 shadow-xl">
                <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent whitespace-nowrap">
                  Origem Digital
                </p>
              </div>
            </div>
          </div>

          {/* Cards de Conteúdo */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card: O que muda */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl mb-6 shadow-lg">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                O que muda?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Novo nome, nova identidade visual e ainda mais investimento em tecnologia e infraestrutura para você.
              </p>
            </div>

            {/* Card: O que continua */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 shadow-lg">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                O que continua igual?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {continuity.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-600 flex-shrink-0">{item.icon}</span>
                    <span className="font-semibold text-sm sm:text-base">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mensagem Principal */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl mb-8 border-2 border-white/50">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-center font-medium">
              Continuamos <span className="font-bold text-[var(--color-primary)]">firmes no propósito</span> de conectar você com o que importa, 
              agora com ainda mais <span className="font-bold text-[var(--color-secondary)]">performance e inovação</span>.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={onLearnMoreClick}
              className="group inline-flex items-center gap-3 bg-white text-[var(--color-secondary)] hover:bg-yellow-300 font-bold px-10 py-5 rounded-full transition-all duration-300 shadow-2xl hover:shadow-yellow-300/50 hover:scale-105 text-lg"
            >
              <span>Leia o anúncio completo</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutRebrand;

