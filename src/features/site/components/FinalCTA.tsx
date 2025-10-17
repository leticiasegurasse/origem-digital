import { MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const FinalCTA = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título Principal */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Pronto para uma internet estável de verdade?
          </h2>
          
          <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-2xl mx-auto">
            Junte-se a mais de 3.000 clientes satisfeitos na região
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <WhatsAppButton
              variant="secondary"
              message="Olá! Quero assinar um plano da Origem Digital."
              className="bg-white text-[var(--color-primary)] hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-xl"
              utm={{ source: 'final-cta', medium: 'website', campaign: 'assinar' }}
            >
              <MessageCircle size={24} />
              <span>Assinar via WhatsApp</span>
            </WhatsAppButton>
            
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg border-2 border-white/30"
            >
              Ver planos na minha cidade
            </a>
          </div>

          {/* Garantias */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Sem fidelidade</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Instalação rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Suporte local</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

