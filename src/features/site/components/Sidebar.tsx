import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Users, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const [open, setOpen] = useState(false); // mobile
  const [collapsed, setCollapsed] = useState(false); // desktop

  // Links do menu
  const links = [
    { to: '/', label: 'Dashboard', icon: <Home size={20} /> },
    { to: '/technicians', label: 'Técnicos', icon: <Users size={20} /> },
    { to: '/services', label: 'Serviços', icon: <Wrench size={20} /> },
  ];

  return (
    <>
      {/* Botão para abrir o menu no mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu lateral"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para fechar o menu no mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white shadow-lg z-50
          transition-all duration-300
          ${collapsed ? 'md:w-20' : 'md:w-64'}
          transform ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:block
        `}
      >
        {/* Botão de recolher/expandir em telas grandes */}
        <button
          className="hidden md:flex items-center justify-center absolute top-4 right-[-16px] w-8 h-8 bg-gray-200 rounded-full shadow border z-50 transition-transform hover:bg-gray-300"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
        <nav className={`flex flex-col min-h-screen gap-4 ${collapsed ? 'w-full items-center p-2' : 'p-6'}`}>
          <h2 className={`text-xl font-bold mb-6 transition-opacity ${collapsed ? 'opacity-0 h-0 mb-0' : 'opacity-100 h-auto mb-6'}`}>Menu</h2>
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 hover:bg-gray-100 rounded px-3 py-2 w-full transition-colors ${collapsed ? 'justify-center' : ''}`}
            >
              {link.icon}
              <span className={`transition-all duration-200 ${collapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto ml-2'}`}>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar; 