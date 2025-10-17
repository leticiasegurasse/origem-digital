import { Link } from 'react-router-dom';
import { MessageCircle, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const links = {
    navegacao: [
      { to: '/planos', label: 'Planos' },
      { to: '/cobertura', label: 'Cobertura' },
      { to: '/empresas', label: 'Para Empresas' },
      { to: '/suporte', label: 'Suporte' },
    ],
    legal: [
      { to: '/termos', label: 'Termos de Uso' },
      { to: '/privacidade', label: 'Política de Privacidade' },
      { to: '/contrato', label: 'Contrato de Prestação de Serviços' },
    ],
  };

  const socialLinks = [
    { icon: <Facebook size={24} />, url: '#', label: 'Facebook' },
    { icon: <Instagram size={24} />, url: '#', label: 'Instagram' },
    { icon: <Linkedin size={24} />, url: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span style={{ color: 'var(--color-primary)' }}>Origem</span>{' '}
              <span className="text-white">Digital</span>
            </div>
            <p className="text-gray-300 mb-4">
              Conectando sua rotina com tecnologia e estabilidade de verdade.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg transition-colors"
                  style={{ ['--hover-bg' as string]: 'var(--color-primary)' } as React.CSSProperties}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              {links.navegacao.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className="text-sm text-gray-400">WhatsApp</div>
                  <a
                    href="https://wa.me/5532999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:[color:var(--color-primary)]"
                  >
                    (32) 99999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className="text-sm text-gray-400">Telefone</div>
                  <a
                    href="tel:+5532999999999"
                    className="transition-colors hover:[color:var(--color-primary)]"
                  >
                    (32) 99999-9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className="text-sm text-gray-400">Endereço</div>
                  <p className="text-gray-300">
                    Rua Exemplo, 123<br />
                    Miracema - MG
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p>
                © {new Date().getFullYear()} Origem Digital (anteriormente G2 Telecom). Todos os direitos reservados.
              </p>
              <p className="mt-2">
                CNPJ: 00.000.000/0001-00
              </p>
            </div>
            <div className="md:text-right">
              <p>
                Serviço de comunicação multimídia (SCM) conforme regulamentação da Anatel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

