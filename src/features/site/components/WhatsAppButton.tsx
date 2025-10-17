import type { ReactNode } from 'react';
import { COMPANY_INFO } from '../utils/company';

interface WhatsAppButtonProps {
  children: ReactNode;
  message?: string;
  phone?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
}

const WhatsAppButton = ({
  children,
  message = 'Olá! Gostaria de mais informações.',
  phone = COMPANY_INFO.phone, // Número centralizado
  variant = 'primary',
  className = '',
  utm,
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    let url = `https://wa.me/${phone}?text=${encodedMessage}`;

    // Adiciona parâmetros UTM se fornecidos
    if (utm) {
      const utmParams = new URLSearchParams();
      if (utm.source) utmParams.append('utm_source', utm.source);
      if (utm.medium) utmParams.append('utm_medium', utm.medium);
      if (utm.campaign) utmParams.append('utm_campaign', utm.campaign);
      
      if (utmParams.toString()) {
        url += `&${utmParams.toString()}`;
      }
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getStyle = () => {
    switch (variant) {
      case 'primary':
        return { backgroundColor: 'var(--color-primary)', color: 'white' };
      case 'secondary':
        return { backgroundColor: 'var(--color-secondary)', color: 'white' };
      case 'outline':
        return {
          border: '2px solid var(--color-primary)',
          color: 'var(--color-primary)',
          backgroundColor: 'transparent',
        };
      default:
        return {};
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (variant) {
      case 'primary':
        e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
        break;
      case 'secondary':
        e.currentTarget.style.backgroundColor = 'var(--color-secondary-hover)';
        break;
      case 'outline':
        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
        e.currentTarget.style.color = 'white';
        break;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    const style = getStyle();
    Object.assign(e.currentTarget.style, style);
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={getStyle()}
      className={`
        font-semibold px-6 py-3 rounded-lg transition-all duration-200
        flex items-center gap-2
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default WhatsAppButton;

