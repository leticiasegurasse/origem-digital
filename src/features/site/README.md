# Feature: Site Público - Origem Digital

Esta feature contém todo o código relacionado ao **site público** da Origem Digital (provedor de internet).

## 📂 Estrutura

```
site/
├── components/          # Componentes específicos do site
│   ├── Hero.tsx        # Seção hero da home
│   ├── Header.tsx      # Cabeçalho do site
│   ├── Footer.tsx      # Rodapé do site
│   ├── WhatsAppButton.tsx
│   └── ...
├── pages/              # Páginas do site
│   └── Home.tsx        # Página inicial
├── layouts/            # Layouts do site
│   └── SiteLayout.tsx  # Layout padrão
├── services/           # Serviços e dados
│   └── plans.ts        # Dados dos planos
├── types/              # Tipos TypeScript
│   ├── plans.ts
│   └── coverage.ts
├── hooks/              # Custom hooks
│   └── useLocalStorage.ts
├── utils/              # Utilitários
│   ├── formatters.ts
│   └── company.ts
└── index.ts            # Barrel exports
```

## 🎯 Responsabilidade

Esta feature é responsável por:

- ✅ Site institucional público
- ✅ Landing pages
- ✅ Páginas de planos e cobertura
- ✅ Formulários de contato e leads
- ✅ SEO e marketing

## 🚫 O que NÃO fica aqui

- ❌ Painel administrativo (vai em `features/painel`)
- ❌ Área do cliente (vai em `features/cliente`)
- ❌ APIs internas (vai em `services/`)
- ❌ Componentes compartilhados globalmente (vão em `src/components/`)

## 📦 Como Importar

### Usando barrel exports (recomendado):

```tsx
import { Home, Header, Footer, WhatsAppButton } from '@/features/site';
```

### Imports diretos:

```tsx
import Home from '@/features/site/pages/Home';
import Header from '@/features/site/components/Header';
```

## 🎨 Componentes Principais

### Header
Cabeçalho fixo com menu responsivo e CTAs

### Hero
Seção principal da home com verificação de CEP

### CityPlansSelector
Seletor inteligente de planos por cidade com localStorage

### CoverageChecker
Verificador de cobertura com captura de leads

### WhatsAppButton
Botão reutilizável para WhatsApp com rastreamento UTM

## 🔄 Fluxo de Dados

```
User Action → Component → Service/API → Update State → Re-render
```

## 📝 Convenções

### Nomenclatura de Arquivos
- Componentes: `PascalCase.tsx`
- Utilitários: `camelCase.ts`
- Types: `camelCase.ts`

### Organização de Imports
```tsx
// 1. React e bibliotecas externas
import { useState } from 'react';
import { Link } from 'react-router-dom';

// 2. Componentes internos
import Header from '../components/Header';

// 3. Hooks e utilitários
import { useLocalStorage } from '../hooks/useLocalStorage';

// 4. Types
import type { Plan } from '../types/plans';

// 5. Estilos e assets
import './styles.css';
```

## 🧪 Testes (futuro)

```
site/
├── components/
│   ├── Header.tsx
│   └── Header.test.tsx
```

## 🚀 Adicionando Novas Páginas

1. Criar em `pages/NomeDaPagina.tsx`
2. Adicionar rota em `src/routes/index.tsx`
3. Exportar em `index.ts` se for página principal

```tsx
// pages/Planos.tsx
const Planos = () => {
  return <div>Página de Planos</div>;
};

export default Planos;
```

```tsx
// src/routes/index.tsx
import { Home, Planos } from '../features/site';

<Route path="/planos" element={<Planos />} />
```

## 📚 Recursos

- Veja `VARIAVEIS-CSS.md` na raiz para cores da marca
- Veja `PERSONALIZACAO.md` para guia de personalização
- Use `plansData` em `services/plans.ts` para dados dos planos

---

**Nota**: Esta feature deve permanecer **completamente isolada** das outras features (painel, área do cliente, etc). Compartilhe código através de `src/components/` ou `src/utils/` globais apenas quando necessário.

