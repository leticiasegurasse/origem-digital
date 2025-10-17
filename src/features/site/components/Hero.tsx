import { MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import mascoteImage from '../../../assets/image/mascote-hero.jpg';
import logo from '../../../assets/image/logo-hero.png'

interface HeroProps {
  onCheckCoverage?: (cep: string) => void;
}

const Hero = ({ onCheckCoverage: _onCheckCoverage }: HeroProps) => {

  return (
    <section className="py-16 md:py-0 text-white">
      <div className="h-[80vh]">
        <div className="flex flex-col md:flex-row items-center">
          {/* Imagem do Mascote - Esquerda (apenas em telas médias+) */}
          <div className="hidden lg:flex lg:w-1/2 justify-center lg:justify-start">
            <img 
              src={mascoteImage} 
              alt="Mascote Origem Digital" 
              className="h-screen"
            />
          </div>

          {/* Textos - Direita */}
          <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center justify-center lg:items-start text-center lg:text-left p-16 lg:p-0">
            <img src={logo} alt="Logo Origem Digital" className="w-[280px] mb-6" />
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl  font-bold text-[var(--color-primary)] mb-6">
              Novo nome, nova tecnologia, mesma confiança.
            </h1>

            {/* Sub */}
            <p className="text-xl mb-8 text-gray-900">
              A internet da G2 Telecom agora é Origem Digital, a mesma equipe, com ainda mais desempenho. 
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#planos"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)] text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Ver planos na minha cidade
              </a>
              <WhatsAppButton
                variant="secondary"
                message="Olá! Gostaria de falar com um especialista sobre os planos da Origem Digital."
                className="bg-white text-secondary hover:bg-gray-100 text-lg"
                utm={{ source: 'hero', medium: 'website', campaign: 'especialista' }}
              >
                <MessageCircle size={24} />
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

