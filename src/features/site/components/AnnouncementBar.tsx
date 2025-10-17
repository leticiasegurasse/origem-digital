import { useState } from 'react';
import { X } from 'lucide-react';

interface AnnouncementBarProps {
  onLearnMoreClick: () => void;
}

const AnnouncementBar = ({ onLearnMoreClick }: AnnouncementBarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="text-white py-3 px-4 relative bg-[var(--color-secondary)]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm md:text-base pr-8 sm:pr-4">
        <p className="text-center">
          <span className="font-semibold">G2 Telecom agora é Origem Digital</span>
          <span className="hidden sm:inline"> — novo nome, nova tecnologia, mesma confiança.</span>
        </p>
        <button
          onClick={onLearnMoreClick}
          className="underline hover:no-underline font-medium whitespace-nowrap text-xs sm:text-sm md:text-base"
          aria-label="Saiba mais sobre a mudança"
        >
          Saiba mais
        </button>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
        aria-label="Fechar anúncio"
      >
        <X size={18} className="sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default AnnouncementBar;

