# Estrutura Visual do Projeto

## 🌳 Árvore de Diretórios Completa

```
ORIGEM/SITE/FRONT/
│
├── 📁 public/                    # Assets públicos
│   └── vite.svg
│
├── 📁 src/                       # Código-fonte
│   │
│   ├── 📁 features/              # ⭐ Features isoladas por domínio
│   │   │
│   │   └── 📁 site/              # Site público (institucional)
│   │       ├── 📁 components/    # Componentes do site
│   │       │   ├── AboutRebrand.tsx
│   │       │   ├── AnnouncementBar.tsx
│   │       │   ├── AnnouncementModal.tsx
│   │       │   ├── Button.tsx
│   │       │   ├── CityPlansSelector.tsx
│   │       │   ├── CoverageChecker.tsx
│   │       │   ├── FAQ.tsx
│   │       │   ├── FinalCTA.tsx
│   │       │   ├── Footer.tsx
│   │       │   ├── Header.tsx
│   │       │   ├── Hero.tsx
│   │       │   ├── QuickBenefits.tsx
│   │       │   ├── ScrollToTop.tsx
│   │       │   ├── WhatsAppButton.tsx
│   │       │   └── WhyOrigemDigital.tsx
│   │       │
│   │       ├── 📁 pages/         # Páginas do site
│   │       │   └── Home.tsx
│   │       │
│   │       ├── 📁 layouts/       # Layouts do site
│   │       │   └── SiteLayout.tsx
│   │       │
│   │       ├── 📁 services/      # Dados e serviços
│   │       │   └── plans.ts      # Planos por cidade
│   │       │
│   │       ├── 📁 types/         # TypeScript types
│   │       │   ├── plans.ts
│   │       │   └── coverage.ts
│   │       │
│   │       ├── 📁 hooks/         # Custom hooks
│   │       │   └── useLocalStorage.ts
│   │       │
│   │       ├── 📁 utils/         # Utilitários
│   │       │   ├── formatters.ts
│   │       │   └── company.ts
│   │       │
│   │       ├── index.ts          # Barrel exports
│   │       └── README.md         # Documentação da feature
│   │
│   ├── 📁 components/            # Componentes compartilhados globalmente
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── LoadingSpinner.tsx
│   │   └── Sidebar.tsx           # (será movido para feature painel)
│   │
│   ├── 📁 layouts/               # Layouts globais
│   │   └── DefaultLayout.tsx
│   │
│   ├── 📁 routes/                # Configuração de rotas
│   │   └── index.tsx             # Router principal
│   │
│   ├── 📁 config/                # Configurações
│   │   ├── api.ts                # URL da API
│   │   └── routes.ts             # Constantes de rotas
│   │
│   ├── 📁 lib/                   # Bibliotecas configuradas
│   │   └── axios.ts              # Cliente HTTP
│   │
│   ├── 📁 store/                 # Estado global (vazio, futuro)
│   ├── 📁 styles/                # Estilos adicionais (vazio)
│   ├── 📁 types/                 # Types globais (vazio)
│   ├── 📁 hooks/                 # Hooks globais (vazio)
│   │
│   ├── App.tsx                   # Componente raiz
│   ├── main.tsx                  # Entry point
│   ├── index.css                 # ⭐ Estilos globais + Variáveis CSS
│   └── vite-env.d.ts             # Types do Vite
│
├── 📄 index.html                 # HTML principal + SEO
├── 📄 package.json               # Dependências
├── 📄 vite.config.ts             # Config Vite
├── 📄 tailwind.config.js         # Config Tailwind
├── 📄 tsconfig.json              # Config TypeScript
│
├── 📚 Documentação/
│   ├── README.md                 # Visão geral
│   ├── ARQUITETURA.md            # ⭐ Arquitetura por features
│   ├── SETUP.md                  # Setup técnico
│   ├── VARIAVEIS-CSS.md          # ⭐ Guia de variáveis CSS
│   ├── PERSONALIZACAO.md         # Guia de personalização
│   ├── COMANDOS.md               # Comandos úteis
│   └── ESTRUTURA-PROJETO.md      # Este arquivo
│
└── 📁 node_modules/              # Dependências instaladas
```

## 🎯 O que está onde?

### 🌐 Site Público (Atual)
**Localização**: `src/features/site/`

Tudo relacionado ao site institucional:
- Landing page / Home
- Páginas de planos e cobertura
- Formulários de contato
- Marketing e SEO

### 🔮 Painel Administrativo (Futuro)
**Localização**: `src/features/painel/`

Dashboard interno para:
- Gestão de clientes
- Gestão de técnicos
- Chamados e suporte
- Relatórios

### 👤 Área do Cliente (Futuro)
**Localização**: `src/features/cliente/`

Portal do cliente:
- Minha conta
- Faturas e pagamentos
- Abrir chamados
- Alterar plano

## 🔄 Fluxo de Navegação

```
┌─────────────────────────────────────────────────────────┐
│                    index.html (/)                       │
│                         ↓                               │
│                    src/main.tsx                         │
│                         ↓                               │
│                     src/App.tsx                         │
│                         ↓                               │
│                 src/routes/index.tsx                    │
└─────────────────────────┬───────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Site (/)   │  │ Painel       │  │ Cliente      │
│              │  │ /painel/*    │  │ /cliente/*   │
│              │  │ (futuro)     │  │ (futuro)     │
└──────────────┘  └──────────────┘  └──────────────┘
        │
        └──► features/site/pages/Home.tsx
                    │
                    ├──► AnnouncementBar
                    ├──► Header
                    ├──► Hero
                    ├──► QuickBenefits
                    ├──► CityPlansSelector
                    ├──► CoverageChecker
                    ├──► WhyOrigemDigital
                    ├──► FAQ
                    ├──► FinalCTA
                    ├──► Footer
                    └──► ScrollToTop
```

## 📦 Imports e Dependências

### Imports Internos (Feature Site)

```tsx
// De dentro da feature site
import Hero from '../components/Hero';
import { plansData } from '../services/plans';
import type { City } from '../types/plans';
```

### Imports Globais

```tsx
// Componentes globais
import Button from '@/components/Button';
import Container from '@/components/Container';

// Configurações
import { API_URL } from '@/config/api';

// Lib
import api from '@/lib/axios';
```

### Imports de Outras Features

```tsx
// ❌ EVITAR - não importar diretamente
import Header from '@/features/site/components/Header';

// ✅ CORRETO - usar barrel exports
import { Header } from '@/features/site';

// ✅ CORRETO - ou usar componentes compartilhados
import Button from '@/components/Button';
```

## 🎨 Estilos e Temas

### Variáveis CSS (Root)
**Arquivo**: `src/index.css`

```css
:root {
  --color-primary: #eb8300;
  --color-secondary: #452483;
  /* ... mais variáveis */
}
```

### Tailwind (Utilitários)
Classes utilitárias do Tailwind para layout e espaçamento.

### Inline Styles (Cores da Marca)
Cores da marca usando variáveis CSS:

```tsx
<div style={{ backgroundColor: 'var(--color-primary)' }}>
```

## 🗺️ Rotas do Sistema

### Atuais (Site Público)

| Rota | Componente | Feature |
|------|-----------|---------|
| `/` | Home | site |
| `/planos` | Planos (futuro) | site |
| `/cobertura` | Cobertura (futuro) | site |
| `/empresas` | Empresas (futuro) | site |
| `/suporte` | Suporte (futuro) | site |

### Futuras (Painel)

| Rota | Componente | Feature |
|------|-----------|---------|
| `/painel` | Dashboard | painel |
| `/painel/clientes` | Clientes | painel |
| `/painel/tecnicos` | Técnicos | painel |
| `/painel/chamados` | Chamados | painel |

### Futuras (Cliente)

| Rota | Componente | Feature |
|------|-----------|---------|
| `/cliente` | Minha Conta | cliente |
| `/cliente/faturas` | Faturas | cliente |
| `/cliente/chamados` | Chamados | cliente |

## 📊 Dados e Estado

### Dados Estáticos
**Localização**: `features/site/services/plans.ts`

Planos por cidade (hardcoded no momento).

### API (Futuro)
**Configuração**: `src/lib/axios.ts`

Cliente HTTP configurado para chamar APIs.

### Estado Local
`useState` para estado de componentes.

### Estado Persistente
`localStorage` via `useLocalStorage` hook.

### Estado Global (Futuro)
Context API ou Zustand para estado compartilhado.

## 🔧 Configurações

| Arquivo | Propósito |
|---------|-----------|
| `vite.config.ts` | Config do Vite (bundler) |
| `tailwind.config.js` | Config do Tailwind |
| `tsconfig.json` | Config do TypeScript |
| `package.json` | Dependências e scripts |
| `.env` | Variáveis de ambiente |

## 📚 Documentação

| Arquivo | Conteúdo |
|---------|----------|
| `README.md` | Visão geral do projeto |
| `ARQUITETURA.md` | Arquitetura detalhada |
| `SETUP.md` | Setup e próximos passos |
| `VARIAVEIS-CSS.md` | Guia de variáveis CSS |
| `PERSONALIZACAO.md` | Como personalizar |
| `COMANDOS.md` | Comandos úteis |
| `features/site/README.md` | Doc da feature site |

## 🚀 Quick Start

```bash
# 1. Instalar
npm install

# 2. Rodar
npm run dev

# 3. Acessar
http://localhost:5173
```

## 🎯 Próximas Features a Implementar

1. **Site Público** ✅ (Completo)
   - Home ✅
   - Header/Footer ✅
   - Planos por cidade ✅
   - Verificação de cobertura ✅

2. **Site Público** ⏳ (Páginas adicionais)
   - Página de Planos detalhada
   - Página de Cobertura expandida
   - Página Para Empresas
   - Página de Suporte/FAQ

3. **Painel Administrativo** 🔮
   - Dashboard
   - Gestão de clientes
   - Gestão de técnicos
   - Chamados

4. **Área do Cliente** 🔮
   - Login/Registro
   - Minha conta
   - Faturas
   - Chamados

---

**Dica**: Use este arquivo como mapa para navegar no projeto! 🗺️

