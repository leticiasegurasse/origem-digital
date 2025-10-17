# Arquitetura do Projeto - Origem Digital

## 🏗️ Visão Geral

Este projeto utiliza **arquitetura baseada em features** (Feature-Based Architecture) para máxima organização, escalabilidade e manutenibilidade.

## 📐 Princípios

### 1. **Separação por Domínio**
Cada feature representa um domínio de negócio específico e é completamente isolada.

### 2. **Coesão Alta, Acoplamento Baixo**
Componentes dentro de uma feature são altamente coesos. Features diferentes têm baixo acoplamento.

### 3. **Escalabilidade**
Fácil adicionar novas features sem impactar as existentes.

### 4. **Manutenibilidade**
Cada feature pode ser mantida, testada e deployada independentemente.

## 🗂️ Estrutura de Features

```
src/
├── features/
│   ├── site/           # Site público (institucional)
│   ├── painel/         # Painel administrativo (futuro)
│   └── cliente/        # Área do cliente (futuro)
```

### Feature: Site Público

**Responsabilidade**: Site institucional, landing pages, marketing, captação de leads

```
features/site/
├── components/      # Componentes específicos do site
├── pages/          # Páginas públicas
├── layouts/        # Layouts do site
├── services/       # Dados e serviços (planos, cobertura)
├── types/          # Types TypeScript
├── hooks/          # Custom hooks
├── utils/          # Utilitários
├── index.ts        # Barrel exports
└── README.md       # Documentação
```

**Exemplos de páginas**:
- Home
- Planos
- Cobertura
- Para Empresas
- Suporte
- Contato

### Feature: Painel (Futuro)

**Responsabilidade**: Administração interna, gestão de clientes, relatórios

```
features/painel/
├── components/
├── pages/
│   ├── Dashboard.tsx
│   ├── Clientes.tsx
│   ├── Tecnicos.tsx
│   └── Relatorios.tsx
├── layouts/
│   └── PainelLayout.tsx
├── services/
├── types/
└── index.ts
```

**Exemplos de páginas**:
- Dashboard
- Gestão de Clientes
- Gestão de Técnicos
- Chamados
- Relatórios
- Configurações

### Feature: Área do Cliente (Futuro)

**Responsabilidade**: Portal do cliente, autoatendimento, faturas

```
features/cliente/
├── components/
├── pages/
│   ├── MinhaConta.tsx
│   ├── Faturas.tsx
│   ├── Chamados.tsx
│   └── Contrato.tsx
├── layouts/
│   └── ClienteLayout.tsx
└── index.ts
```

**Exemplos de páginas**:
- Minha Conta
- Faturas / 2ª Via
- Abrir Chamado
- Meus Chamados
- Contrato
- Alterar Plano

## 🔀 Roteamento

```tsx
// src/routes/index.tsx

<Routes>
  {/* Site Público */}
  <Route path="/" element={<Home />} />
  <Route path="/planos" element={<Planos />} />
  <Route path="/cobertura" element={<Cobertura />} />
  
  {/* Painel Administrativo */}
  <Route path="/painel/*" element={<PainelRoutes />} />
  
  {/* Área do Cliente */}
  <Route path="/minha-conta/*" element={<ClienteRoutes />} />
</Routes>
```

## 🧩 Componentes Compartilhados

Componentes usados por **múltiplas features** ficam em `src/components/`:

```
src/
├── components/
│   ├── Button.tsx           # Botão genérico
│   ├── LoadingSpinner.tsx   # Spinner
│   ├── Container.tsx        # Container
│   ├── Modal.tsx            # Modal genérico
│   └── ...
```

**Regra**: Se um componente é usado por 2+ features diferentes, ele vai para `src/components/`.

## 🎨 Estilos Globais

Variáveis CSS e estilos globais em `src/index.css`:

```css
:root {
  --color-primary: #eb8300;
  --color-secondary: #452483;
  /* ... */
}
```

## 📦 Imports

### Usando Barrel Exports

```tsx
// ✅ Recomendado
import { Home, Header, Footer } from '@/features/site';
```

### Imports Diretos

```tsx
// ✅ Também válido
import Home from '@/features/site/pages/Home';
```

### Imports Entre Features

```tsx
// ❌ EVITAR - Features não devem importar diretamente umas das outras
import Header from '@/features/site/components/Header';

// ✅ Use componentes compartilhados
import Button from '@/components/Button';
```

## 🔐 Autenticação e Permissões

### Site Público
- Sem autenticação
- Acesso livre

### Área do Cliente
- Autenticação obrigatória
- Permissões por cliente

### Painel Administrativo
- Autenticação obrigatória
- Permissões por perfil (admin, operador, técnico)

## 🗄️ Gerenciamento de Estado

### Estado Local
- `useState` para estado de componentes
- `useLocalStorage` para persistência local

### Estado Compartilhado (Futuro)
- Context API para estado da feature
- Zustand/Redux para estado global (se necessário)

```
src/
└── store/
    ├── auth.ts         # Estado de autenticação
    └── user.ts         # Estado do usuário
```

## 🌐 API e Serviços

### Configuração Global

```
src/
├── config/
│   └── api.ts          # URL base da API
└── lib/
    └── axios.ts        # Instância configurada
```

### Serviços por Feature

```
features/site/
└── services/
    ├── plans.ts        # Dados dos planos
    └── coverage.ts     # Verificação de cobertura

features/painel/
└── services/
    ├── clientes.ts
    └── chamados.ts
```

## 📊 Fluxo de Dados

```
┌─────────────┐
│   Component │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Service   │ ──► API Externa
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    State    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Re-render  │
└─────────────┘
```

## 🧪 Testes (Futuro)

Cada feature tem seus próprios testes:

```
features/site/
├── components/
│   ├── Header.tsx
│   └── Header.test.tsx
└── pages/
    ├── Home.tsx
    └── Home.test.tsx
```

## 📦 Build e Deploy

### Code Splitting por Feature

Vite faz code splitting automático:

```
dist/
├── assets/
│   ├── site-[hash].js
│   ├── painel-[hash].js
│   └── cliente-[hash].js
```

### Deploy

- **Site**: Vercel, Netlify, ou CDN
- **Painel**: Servidor protegido
- **API**: Backend separado

## 🚀 Adicionando Nova Feature

1. **Criar estrutura**:
```bash
mkdir -p src/features/nova-feature/{components,pages,layouts,services,types,hooks,utils}
```

2. **Criar index.ts**:
```tsx
export { default as MinhaPage } from './pages/MinhaPage';
```

3. **Criar rotas**:
```tsx
<Route path="/nova-feature/*" element={<NovaFeatureRoutes />} />
```

4. **Documentar** em `features/nova-feature/README.md`

## 📚 Vantagens

### ✅ Organização
- Código estruturado por domínio
- Fácil de navegar e entender

### ✅ Escalabilidade
- Adicione features sem impactar outras
- Múltiplos times podem trabalhar em paralelo

### ✅ Manutenibilidade
- Mudanças isoladas por feature
- Refatoração mais segura

### ✅ Performance
- Code splitting natural
- Lazy loading por feature

### ✅ Testabilidade
- Testes isolados por feature
- Mocks mais fáceis

## 🎯 Próximos Passos

1. ✅ Feature Site implementada
2. ⏳ Implementar feature Painel
3. ⏳ Implementar feature Cliente
4. ⏳ Autenticação e autorização
5. ⏳ Testes automatizados
6. ⏳ CI/CD pipeline

---

**Mantido por**: Equipe de Desenvolvimento Origem Digital
**Última atualização**: Outubro 2025

