# Origem Digital - Site

## 📋 Sobre o Projeto

Site institucional da **Origem Digital** (anteriormente G2 Telecom), provedor de internet fibra óptica que atende as cidades de Miracema, Laje do Muriaé, Paraíso do Tobias, Pirapetinga, Estrela Dalva, Monte Alegre e Palma.

## 🚀 Tecnologias

- **React 19** com TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **Lucide React** - Ícones

## 🎨 Identidade Visual

### Cores
- **Primária (Laranja)**: `#eb8300`
- **Secundária (Roxo)**: `#452483`

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 400, 500, 600, 700, 800

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://api.origemdigital.com.br
```

### Número do WhatsApp

Atualize o número do WhatsApp em:
- `src/components/WhatsAppButton.tsx` (linha 9)
- `src/components/home/CoverageChecker.tsx` (linha 102)
- `src/components/Footer.tsx` (linhas 87 e 97)

**Formato**: `5532999999999` (código do país + DDD + número)

### Informações da Empresa

Atualize no `src/components/Footer.tsx`:
- CNPJ
- Endereço
- Telefone
- Links de redes sociais

## 📱 Estrutura da Home

1. **Barra de Anúncio (Ribbon)** - Comunicação sobre mudança de nome
2. **Header** - Menu fixo com navegação e CTAs
3. **Hero** - Seção principal com headline e verificação de CEP
4. **Benefícios Rápidos** - Cards com diferenciais
5. **Planos por Cidade** - Seletor com planos específicos
6. **Verificação de Cobertura** - Cheque de CEP com captura de leads
7. **Por que a Origem Digital** - Benefícios e depoimentos
8. **Sobre a Mudança** - Contexto sobre rebrand
9. **FAQ** - Perguntas frequentes
10. **CTA Final** - Chamada para ação
11. **Footer** - Links e informações de contato

## 📂 Estrutura de Arquivos

```
src/
├── components/           # Componentes reutilizáveis
│   ├── home/            # Componentes específicos da home
│   ├── AnnouncementBar.tsx
│   ├── AnnouncementModal.tsx
│   ├── Header.tsx
│   ├── WhatsAppButton.tsx
│   └── Footer.tsx
├── data/                # Dados estáticos
│   └── plans.ts         # Planos por cidade
├── pages/               # Páginas
│   └── Home.tsx
├── types/               # Definições TypeScript
│   ├── plans.ts
│   └── coverage.ts
├── routes/              # Configuração de rotas
│   └── index.tsx
└── config/              # Configurações
    ├── api.ts
    └── routes.ts
```

## 🎯 Funcionalidades Implementadas

### ✅ Componentes Principais
- [x] Barra de anúncio com modal explicativo
- [x] Header responsivo com menu mobile
- [x] Hero com verificação de CEP
- [x] Seletor de planos por cidade com localStorage
- [x] Verificador de cobertura com captura de leads
- [x] FAQ com acordeão
- [x] Footer completo
- [x] Botão WhatsApp reutilizável com UTM

### 🎨 Design & UX
- [x] Mobile-first e responsivo
- [x] Cores da marca configuradas
- [x] Smooth scroll
- [x] Animações e transições
- [x] Acessibilidade (ARIA labels)

### 🔍 SEO
- [x] Meta tags configuradas
- [x] Open Graph para redes sociais
- [x] H1 único e semântico
- [x] Lang="pt-BR"

## 🔄 Próximos Passos

### Backend/API
- [ ] Implementar API para verificação real de CEP
- [ ] Endpoint para captura de leads
- [ ] Sistema de pagamento/assinatura

### Páginas Adicionais
- [ ] Página de Planos (detalhada)
- [ ] Página de Cobertura
- [ ] Página Para Empresas
- [ ] Página de Suporte
- [ ] Área do Cliente

### Funcionalidades
- [ ] Sistema de autenticação
- [ ] Portal do cliente
- [ ] Segunda via de boleto
- [ ] Abertura de chamados
- [ ] Teste de velocidade integrado
- [ ] Chat/chatbot

### Performance
- [ ] Lazy loading de imagens
- [ ] Code splitting
- [ ] Otimização de bundle
- [ ] PWA (Progressive Web App)

### Analytics
- [ ] Google Analytics
- [ ] Facebook Pixel
- [ ] Hotjar ou similar
- [ ] Rastreamento de conversões

## 📞 Conversões e UTM

O componente `WhatsAppButton` suporta parâmetros UTM para rastreamento:

```tsx
<WhatsAppButton
  utm={{ 
    source: 'hero', 
    medium: 'website', 
    campaign: 'plano-500mb' 
  }}
/>
```

## 🐛 Solução de Problemas

### Avisos do ESLint sobre @tailwind
Os avisos sobre `@tailwind` no CSS são normais e não afetam o funcionamento. São regras específicas do Tailwind CSS.

### Estilos não carregando
Certifique-se de que o `postcss.config.js` e `tailwind.config.js` estão configurados corretamente.

### WhatsApp não abrindo
Verifique se o número está no formato correto: `55` (Brasil) + `32` (DDD) + número com 9 dígitos.

## 📄 Licença

Projeto proprietário da Origem Digital.

---

**Desenvolvido para Origem Digital** 🚀

