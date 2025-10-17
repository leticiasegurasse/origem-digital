/**
 * Informações da empresa
 */
export const COMPANY_INFO = {
  name: 'Origem Digital',
  formerName: 'G2 Telecom',
  legalName: 'Telecomunicações S. Goncalves',
  cnpj: '09.223.089/0001-20',
  phone: '552240038398', // WhatsApp principal
  email: 'atendimento@g2telecom.com',
  
  // Endereço principal
  address: {
    street: 'Rua Exemplo, 123',
    city: 'Miracema',
    state: 'MG',
    cep: '00000-000',
  },

  // Redes sociais
  social: {
    facebook: 'https://www.facebook.com/g2telecom',
    instagram: 'https://www.instagram.com/origemdigitalnet',
    linkedin: 'https://www.linkedin.com/company/g2telecom/',
  },

  // Horário de atendimento
  businessHours: {
    presencial: {
      days: 'Segunda a sexta',
      hours: '8h às 18h',
    },
    online: {
      days: 'Segunda a domingo e feriados',
      hours: '8h às 18h',
    },
  },
};

/**
 * Cidades atendidas
 */
export const CITIES = [
  'Miracema',
  'Laje do Muriaé',
  'Paraíso do Tobias',
  'Pirapetinga',
  'Estrela Dalva',
  'Monte Alegre',
  'Palma',
] as const;

/**
 * Mensagens padrão do WhatsApp
 */
export const WHATSAPP_MESSAGES = {
  default: 'Olá! Gostaria de mais informações sobre a Origem Digital.',
  plans: 'Olá! Gostaria de saber mais sobre os planos disponíveis.',
  support: 'Olá! Preciso de suporte técnico.',
  sales: 'Olá! Gostaria de contratar um plano da Origem Digital.',
  coverage: 'Olá! Gostaria de verificar se vocês atendem minha região.',
  business: 'Olá! Gostaria de informações sobre planos empresariais.',
};

/**
 * Links úteis
 */
export const USEFUL_LINKS = {
  speedTest: 'https://fast.com',
  anatel: 'https://www.anatel.gov.br',
  procon: 'https://www.procon.mg.gov.br',
};

