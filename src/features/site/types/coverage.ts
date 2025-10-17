export interface CoverageCheckResult {
  available: boolean;
  cep: string;
  city?: string;
  plans?: Array<{
    speed: number;
    price: number;
  }>;
}

export interface LeadForm {
  name: string;
  whatsapp: string;
  neighborhood: string;
  cep: string;
}

