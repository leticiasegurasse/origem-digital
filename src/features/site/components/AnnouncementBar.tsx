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
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base">
        <p className="text-center">
          <span className="font-semibold">G2 Telecom agora é Origem Digital</span> — novo nome, nova tecnologia, mesma confiança.
        </p>
        <button
          onClick={onLearnMoreClick}
          className="underline hover:no-underline font-medium whitespace-nowrap"
          aria-label="Saiba mais sobre a mudança"
        >
          Saiba mais
        </button>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
        aria-label="Fechar anúncio"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default AnnouncementBar;

