/**
 * Informações da empresa
 */
export const COMPANY_INFO = {
  name: 'Origem Digital',
  formerName: 'G2 Telecom',
  cnpj: '00.000.000/0001-00', // Atualizar com CNPJ real
  phone: '5532999999999', // Atualizar com número real
  email: 'contato@origemdigital.com.br',
  
  // Endereço principal
  address: {
    street: 'Rua Exemplo, 123',
    city: 'Miracema',
    state: 'MG',
    cep: '00000-000',
  },

  // Redes sociais
  social: {
    facebook: 'https://facebook.com/origemdigital',
    instagram: 'https://instagram.com/origemdigital',
    linkedin: 'https://linkedin.com/company/origemdigital',
  },

  // Horário de atendimento
  businessHours: {
    weekdays: 'Segunda a Sexta: 8h às 18h',
    saturday: 'Sábado: 8h às 12h',
    sunday: 'Domingo: Fechado',
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

