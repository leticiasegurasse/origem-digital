import type { ReactNode } from 'react';

interface SiteLayoutProps {
  children: ReactNode;
}

/**
 * Layout específico para o site público da Origem Digital
 * Diferente do layout do painel administrativo
 */
const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
};

export default SiteLayout;

