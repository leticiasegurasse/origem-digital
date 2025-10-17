# Origem Digital - Site Institucional

> Site do provedor de internet fibra óptica **Origem Digital** (anteriormente G2 Telecom)

## 🚀 Tecnologias

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 3
- React Router DOM 7
- Axios
- Lucide React
- **CSS Custom Properties (Variáveis CSS)** para cores da marca

## 📦 Instalação e Execução

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🎨 Estrutura do Site

### ✅ Implementado

- **Barra de Anúncio**: Comunicação sobre mudança de marca (G2 → Origem Digital)
- **Header Fixo**: Menu responsivo com CTAs (WhatsApp e Assinar)
- **Hero Section**: Headline principal com verificador de CEP
- **Benefícios Rápidos**: Cards com diferenciais da empresa
- **Planos por Cidade**: Seletor inteligente com 7 cidades atendidas
- **Verificação de Cobertura**: Cheque de CEP com captura de leads
- **Por que Origem Digital**: Seção com benefícios e depoimentos
- **Sobre a Mudança**: Contexto sobre rebrand
- **FAQ**: Acordeão com perguntas frequentes
- **Suporte Rápido**: Botões para chamado, 2ª via, teste de velocidade
- **CTA Final**: Chamada para conversão
- **Footer Completo**: Links, contatos e informações legais

### 📱 Responsividade

- Design mobile-first
- Menu hambúrguer no mobile
- Grids adaptáveis
- Botões grandes e touch-friendly

### ♿ Acessibilidade

- Contraste AA/AAA
- ARIA labels
- Navegação por teclado
- Texto alternativo

### 🔍 SEO

- Meta tags otimizadas
- Open Graph configurado
- H1 único e semântico
- Schema.org ready

## 🏗️ Arquitetura por Features

O projeto utiliza **arquitetura baseada em features** para melhor organização e escalabilidade:

- **`features/site/`** - Site público (institucional, landing pages, marketing)
- **`features/painel/`** - Painel administrativo (futuro)
- **`features/cliente/`** - Área do cliente (futuro)

Cada feature é **isolada** e contém seus próprios componentes, páginas, hooks, types e utils.

**Benefícios**:
- ✅ Separação clara de responsabilidades
- ✅ Fácil de escalar e adicionar novas features
- ✅ Time pode trabalhar em features diferentes sem conflitos
- ✅ Code splitting natural por feature

## 📂 Estrutura de Arquivos

```
src/
├── features/                  # Features isoladas por domínio
│   └── site/                 # Site público (institucional)
│       ├── components/       # Componentes do site
│       ├── pages/           # Páginas do site
│       ├── layouts/         # Layouts do site
│       ├── services/        # Dados e serviços
│       ├── types/           # Types do site
│       ├── hooks/           # Hooks do site
│       ├── utils/           # Utilitários do site
│       ├── index.ts         # Barrel exports
│       └── README.md        # Documentação da feature
├── components/              # Componentes compartilhados globalmente
│   ├── Button.tsx
│   ├── LoadingSpinner.tsx
│   └── Container.tsx
├── layouts/                 # Layouts globais
│   └── DefaultLayout.tsx
├── routes/                  # Configuração de rotas
│   └── index.tsx
├── config/                  # Configurações globais
│   ├── api.ts
│   └── routes.ts
├── lib/                     # Bibliotecas configuradas
│   └── axios.ts
└── index.css                # Estilos globais + variáveis CSS
```

## 🎯 Cidades Atendidas

- Miracema (200, 500, 600, 800 Mb)
- Laje do Muriaé (200, 500, 600, 800 Mb)
- Paraíso do Tobias (200, 500, 600, 800 Mb)
- Pirapetinga (200, 500, 600, 800 Mb)
- Estrela Dalva (200, 500, 600, 800 Mb)
- Monte Alegre (200, 500, 600, 800 Mb)
- Palma (300, 500, 800 Mb)

## 🎨 Cores da Marca

O projeto usa **variáveis CSS** para gerenciar as cores. Edite em `src/index.css`:

```css
:root {
  --color-primary: #eb8300;        /* Laranja */
  --color-secondary: #452483;      /* Roxo */
}
```

Use nos componentes:
```tsx
<div style={{ backgroundColor: 'var(--color-primary)' }}>
```

📖 **Documentação completa**: `VARIAVEIS-CSS.md`

## ⚙️ Configurações Necessárias

### 1. Número do WhatsApp

Atualize em:
- `src/components/WhatsAppButton.tsx`
- `src/components/home/CoverageChecker.tsx`
- `src/components/Footer.tsx`

### 2. Informações da Empresa

Atualize em `src/constants/company.ts`:
- CNPJ
- Endereço
- Telefone
- E-mail
- Redes sociais

### 3. API (quando disponível)

Configure em `.env`:
```env
VITE_API_URL=https://api.origemdigital.com.br
```

## 📝 Documentação Completa

- **`ARQUITETURA.md`** - Arquitetura por features e organização do código
- **`SETUP.md`** - Documentação técnica detalhada e próximos passos
- **`VARIAVEIS-CSS.md`** - Guia completo de variáveis CSS
- **`PERSONALIZACAO.md`** - Como personalizar cores, textos e dados
- **`COMANDOS.md`** - Comandos úteis para desenvolvimento
- **`features/site/README.md`** - Documentação específica do site público

---

**Desenvolvido para Origem Digital** 🚀
