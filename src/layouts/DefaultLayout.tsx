// Layout padrão para as páginas
import type { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 md:p-8">{/* Conteúdo principal */}
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout; 