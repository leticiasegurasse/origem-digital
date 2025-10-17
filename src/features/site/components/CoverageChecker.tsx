import { useState } from 'react';
import { Search, CheckCircle, XCircle, MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { COMPANY_INFO } from '../utils/company';

interface CoverageResult {
  available: boolean;
  city?: string;
  message: string;
}

const CoverageChecker = () => {
  const [cep, setCep] = useState('');
  const [result, setResult] = useState<CoverageResult | null>(null);
  const [leadForm, setLeadForm] = useState({
    name: '',
    whatsapp: '',
    neighborhood: '',
  });
  const [isChecking, setIsChecking] = useState(false);

  const formatCep = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 5) return numbers;
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`;
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCep(e.target.value);
    setCep(formatted);
  };

  const checkCoverage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cep.length < 9) return;

    setIsChecking(true);
    
    // Simulação de verificação de cobertura
    // Na versão real, fazer chamada à API
    setTimeout(() => {
      // Simula que algumas áreas são atendidas
      const isAvailable = Math.random() > 0.3;
      
      setResult({
        available: isAvailable,
        city: isAvailable ? 'Miracema' : undefined,
        message: isAvailable
          ? 'Ótima notícia! Atendemos seu endereço.'
          : 'No momento não atendemos seu endereço, mas queremos chegar até você!',
      });
      setIsChecking(false);
    }, 1500);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Na versão real, enviar para API
    const message = `Olá! Gostaria de ser avisado quando a Origem Digital chegar na minha região.\n\nNome: ${leadForm.name}\nBairro: ${leadForm.neighborhood}\nCEP: ${cep}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_INFO.phone}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Verificar Cobertura
            </h2>
            <p className="text-gray-600 text-lg">
              Digite seu CEP para verificar disponibilidade no seu endereço
            </p>
          </div>

          {/* Formulário de CEP */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <form onSubmit={checkCoverage} className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={cep}
                onChange={handleCepChange}
                placeholder="00000-000"
                maxLength={9}
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary text-lg"
                aria-label="Digite seu CEP"
                required
              />
              <button
                type="submit"
                disabled={isChecking || cep.length < 9}
                className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Search size={20} />
                <span>{isChecking ? 'Verificando...' : 'Consultar'}</span>
              </button>
            </form>

            {/* Resultado da Verificação */}
            {result && (
              <div className="mt-6 p-6 rounded-lg border-2" style={{
                borderColor: result.available ? '#10b981' : '#ef4444',
                backgroundColor: result.available ? '#f0fdf4' : '#fef2f2',
              }}>
                <div className="flex items-start gap-3">
                  {result.available ? (
                    <CheckCircle size={32} className="text-green-600 flex-shrink-0" />
                  ) : (
                    <XCircle size={32} className="text-red-600 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2" style={{
                      color: result.available ? '#166534' : '#991b1b',
                    }}>
                      {result.message}
                    </h3>
                    
                    {result.available ? (
                      <div className="space-y-4">
                        <p className="text-gray-700">
                          Fale conosco agora mesmo para contratar seu plano!
                        </p>
                        <WhatsAppButton
                          variant="primary"
                          message={`Olá! Verifiquei que vocês atendem o CEP ${cep}. Gostaria de contratar um plano.`}
                          utm={{ source: 'cobertura', medium: 'website', campaign: 'cep-disponivel' }}
                        >
                          <MessageCircle size={20} />
                          <span>Contratar via WhatsApp</span>
                        </WhatsAppButton>
                      </div>
                    ) : (
                      <div className="mt-4">
                        <p className="text-gray-700 mb-4">
                          Deixe seus dados e entraremos em contato quando chegarmos na sua região:
                        </p>
                        <form onSubmit={handleLeadSubmit} className="space-y-3">
                          <input
                            type="text"
                            placeholder="Seu nome"
                            value={leadForm.name}
                            onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                            required
                          />
                          <input
                            type="tel"
                            placeholder="WhatsApp (com DDD)"
                            value={leadForm.whatsapp}
                            onChange={(e) => setLeadForm({ ...leadForm, whatsapp: e.target.value })}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                            required
                          />
                          <input
                            type="text"
                            placeholder="Bairro"
                            value={leadForm.neighborhood}
                            onChange={(e) => setLeadForm({ ...leadForm, neighborhood: e.target.value })}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                            required
                          />
                          <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                          >
                            Avise-me quando chegar
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mapa de Cobertura (placeholder) */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-secondary mb-4 text-center">
              Áreas Atendidas
            </h3>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-gray-500 mb-4">
                <svg className="w-full h-64 mx-auto" viewBox="0 0 400 300" fill="none">
                  <rect x="50" y="50" width="300" height="200" fill="#e5e7eb" rx="8" />
                  <circle cx="120" cy="100" r="30" fill="#eb8300" opacity="0.3" />
                  <circle cx="200" cy="150" r="40" fill="#eb8300" opacity="0.3" />
                  <circle cx="280" cy="120" r="35" fill="#eb8300" opacity="0.3" />
                  <text x="200" y="160" textAnchor="middle" fill="#6b7280" fontSize="16">
                    Mapa de Cobertura
                  </text>
                </svg>
              </div>
              <p className="text-gray-600 font-medium">
                Miracema • Laje do Muriaé • Paraíso do Tobias • Pirapetinga • Estrela Dalva • Monte Alegre • Palma
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageChecker;

