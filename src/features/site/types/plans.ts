export interface Plan {
  id: string;
  speed: number; // em Mbps
  price: number;
  benefits: string[];
  hasFidelity?: boolean;
  hasWifi6?: boolean;
}

export interface CityPlans {
  city: string;
  plans: Plan[];
}

export type City = 
  | 'Miracema'
  | 'Laje do Muriaé'
  | 'Paraíso do Tobias'
  | 'Pirapetinga'
  | 'Estrela Dalva'
  | 'Monte Alegre'
  | 'Palma'
  | 'Santo Antônio de Padua';

