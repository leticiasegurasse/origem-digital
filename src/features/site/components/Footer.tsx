import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_INFO } from '../utils/company';
import logoLaranjaBranca from '../../../assets/image/logo-laranja-branca.svg';
import contratoClientePDF from '../../../assets/docs/Contrato-cliente-G2.pdf';

const Footer = () => {
  const links = {
    navegacao: [
      { to: '/planos', label: 'Planos' },
      { to: '/cobertura', label: 'Cobertura' },
      { to: '/empresas', label: 'Para Empresas' },
      { to: '/suporte', label: 'Suporte' },
    ],
    legal: [
      { to: '/termos', label: 'Termos de Uso', isRoute: true },
      { to: '/privacidade', label: 'Política de Privacidade', isRoute: true },
      { to: contratoClientePDF, label: 'Contrato de Prestação de Serviços', isRoute: false, external: true },
    ],
  };

  const socialLinks = [
    { icon: <Facebook size={24} />, url: 'https://www.facebook.com/g2telecom', label: 'Facebook' },
    { icon: <Instagram size={24} />, url: 'https://www.instagram.com/origemdigitalnet', label: 'Instagram' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/company/g2telecom/', label: 'LinkedIn' },
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <img 
              src={logoLaranjaBranca} 
              alt="Origem Digital" 
              className="h-16 mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-300 mb-4">
              Conectando sua rotina com tecnologia e estabilidade de verdade.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
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

          {/* Navegação 
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
          </div>*/}

          {/* Legal */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 mx-auto md:mx-0 inline-block md:block text-left">
              {links.legal.map((link, index) => (
                <li key={link.to || index}>
                  {link.isRoute ? (
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 mx-auto md:mx-0 inline-block md:block text-left">
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className="text-sm text-gray-400">Telefone</div>
                  <a
                    href={`tel:+${COMPANY_INFO.phone}`}
                    className="transition-colors hover:[color:var(--color-primary)]"
                  >
                    4003-8398
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className="text-sm text-gray-400">WhatsApp</div>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:[color:var(--color-primary)]"
                  >
                    4003-8398
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className="text-sm text-gray-400">E-mail</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="transition-colors hover:[color:var(--color-primary)] text-sm break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-4">Horários</h3>
            <ul className="space-y-4 mx-auto md:mx-0 inline-block md:block text-left">
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className="text-sm font-semibold text-gray-200">Atendimento Presencial</div>
                  <p className="text-sm text-gray-300">{COMPANY_INFO.businessHours.presencial.days}</p>
                  <p className="text-sm text-gray-300">{COMPANY_INFO.businessHours.presencial.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
                <div>
                  <div className="text-sm font-semibold text-gray-200">Atendimento Online</div>
                  <p className="text-sm text-gray-300">{COMPANY_INFO.businessHours.online.days}</p>
                  <p className="text-sm text-gray-300">{COMPANY_INFO.businessHours.online.hours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400 text-center md:text-left">
            <div>
              <p>
                © {new Date().getFullYear()} {COMPANY_INFO.legalName} - Origem Digital (anteriormente G2 Telecom). Todos os direitos reservados.
              </p>
              <p className="mt-2">
                CNPJ: {COMPANY_INFO.cnpj}
              </p>
            </div>
            <div className="md:text-right">
              <p>
                Provedor de Internet - Serviço de Comunicação Multimídia (SCM)
              </p>
              <p className="mt-2">
                Autorizado e regulamentado pela Anatel
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

