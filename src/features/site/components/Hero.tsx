import { MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import mascoteImage from '../../../assets/image/mascote-hero.jpg';
import logo from '../../../assets/image/logo-hero.png'

interface HeroProps {
  onCheckCoverage?: (cep: string) => void;
}

const Hero = ({ onCheckCoverage: _onCheckCoverage }: HeroProps) => {

  return (
    <section className="py-8 md:py-0 text-white">
      <div className="md:h-[80vh]">
        <div className="flex flex-col md:flex-row items-center h-full">
          {/* Imagem do Mascote - Esquerda (apenas em telas médias+) */}
          <div className="hidden lg:flex lg:w-1/2 justify-center lg:justify-start">
            <img 
              src={mascoteImage} 
              alt="Mascote Origem Digital" 
              className="h-screen object-cover"
            />
          </div>

          {/* Textos - Direita */}
          <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center justify-center lg:items-start text-center lg:text-left px-4 sm:px-6 md:px-8 lg:px-12 py-8">
            <img src={logo} alt="Logo Origem Digital" className="w-[200px] sm:w-[240px] md:w-[280px] mb-4 md:mb-6" />
            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4 md:mb-6 leading-tight">
              Novo nome, nova tecnologia, mesma confiança.
            </h1>

            {/* Sub */}
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-900 leading-relaxed">
              A internet da G2 Telecom agora é Origem Digital, a mesma equipe, com ainda mais desempenho. 
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#planos"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-base sm:text-lg text-center"
              >
                Ver planos na minha cidade
              </a>
              <WhatsAppButton
                variant="secondary"
                message="Olá! Gostaria de falar com um especialista sobre os planos da Origem Digital."
                className="bg-white text-secondary hover:bg-gray-100 text-base sm:text-lg justify-center"
                utm={{ source: 'hero', medium: 'website', campaign: 'especialista' }}
              >
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                <span>Falar com especialista</span>
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

