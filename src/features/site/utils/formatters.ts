/**
 * Formata um número como moeda brasileira
 * @param value - Valor numérico
 * @returns String formatada como R$ 00,00
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata um CEP no padrão brasileiro
 * @param value - CEP com apenas números
 * @returns CEP formatado como 00000-000
 */
export function formatCEP(value: string): string {
  const numbers = value.replace(/\D/g, '');
  if (numbers.length <= 5) return numbers;
  return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
}

/**
 * Formata um telefone no padrão brasileiro
 * @param value - Telefone com apenas números
 * @returns Telefone formatado como (00) 00000-0000 ou (00) 0000-0000
 */
export function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, '');
  
  if (numbers.length <= 10) {
    // Formato: (00) 0000-0000
    return numbers
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
  }
  
  // Formato: (00) 00000-0000
  return numbers
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d)(\d{4})$/, '$1-$2');
}

/**
 * Remove acentos de uma string
 * @param value - String com acentos
 * @returns String sem acentos
 */
export function removeAccents(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Valida um CEP brasileiro
 * @param cep - CEP a ser validado
 * @returns true se válido, false caso contrário
 */
export function isValidCEP(cep: string): boolean {
  const numbers = cep.replace(/\D/g, '');
  return numbers.length === 8;
}

/**
 * Valida um telefone brasileiro
 * @param phone - Telefone a ser validado
 * @returns true se válido, false caso contrário
 */
export function isValidPhone(phone: string): boolean {
  const numbers = phone.replace(/\D/g, '');
  return numbers.length >= 10 && numbers.length <= 11;
}

