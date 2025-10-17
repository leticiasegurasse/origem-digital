# Variáveis CSS - Origem Digital

## 📋 Visão Geral

Este projeto utiliza **variáveis CSS (CSS Custom Properties)** definidas no `:root` para gerenciar as cores da identidade visual. Isso oferece maior flexibilidade e facilita a manutenção.

## 🎨 Variáveis Disponíveis

### Cores da Marca

```css
:root {
  /* Primária (Laranja) */
  --color-primary: #eb8300;
  --color-primary-hover: #d17600;
  --color-primary-light: #ffa726;
  
  /* Secundária (Roxo) */
  --color-secondary: #452483;
  --color-secondary-hover: #3a1f6e;
  --color-secondary-light: #5e35b1;
}
```

### Cores Neutras

```css
:root {
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
}
```

### Cores de Feedback

```css
:root {
  --color-success: #10b981;
  --color-error: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;
}
```

## 📝 Como Usar

### 1. **Inline Styles (Recomendado para cores da marca)**

```tsx
// Cor de fundo
<div style={{ backgroundColor: 'var(--color-primary)' }}>
  Conteúdo
</div>

// Cor de texto
<span style={{ color: 'var(--color-secondary)' }}>
  Texto
</span>

// Múltiplas propriedades
<button style={{
  backgroundColor: 'var(--color-primary)',
  color: 'white',
  border: '2px solid var(--color-primary-light)'
}}>
  Botão
</button>
```

### 2. **Classes CSS Personalizadas**

Crie classes reutilizáveis em `src/index.css`:

```css
@layer components {
  .btn-primary {
    background-color: var(--color-primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s;
  }
  
  .btn-primary:hover {
    background-color: var(--color-primary-hover);
  }
  
  .text-brand-primary {
    color: var(--color-primary);
  }
  
  .text-brand-secondary {
    color: var(--color-secondary);
  }
  
  .bg-brand-primary {
    background-color: var(--color-primary);
  }
  
  .bg-brand-secondary {
    background-color: var(--color-secondary);
  }
  
  .border-brand-primary {
    border-color: var(--color-primary);
  }
}
```

Uso:

```tsx
<div className="bg-brand-primary text-white p-4">
  Conteúdo
</div>
```

### 3. **Hover States com JavaScript**

```tsx
<button
  style={{ backgroundColor: 'var(--color-primary)' }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
>
  Hover
</button>
```

### 4. **Usando Componentes Prontos**

O projeto já tem componentes que usam as variáveis:

```tsx
import Button from '@/components/Button';
import WhatsAppButton from '@/components/WhatsAppButton';

// Botão primário
<Button variant="primary">Assinar</Button>

// Botão secundário
<Button variant="secondary">Saiba Mais</Button>

// Botão outline
<Button variant="outline-primary">Ver Detalhes</Button>

// WhatsApp
<WhatsAppButton variant="primary">Falar no WhatsApp</WhatsAppButton>
```

## 🔄 Alterando as Cores

Para mudar as cores da marca, edite apenas o arquivo `src/index.css`:

```css
:root {
  --color-primary: #eb8300;        /* ← Mude aqui */
  --color-primary-hover: #d17600;  /* ← E aqui */
  --color-primary-light: #ffa726;  /* ← E aqui */
}
```

**Todas** as partes do site que usam essas variáveis serão atualizadas automaticamente! 🎉

## 🎭 Tema Escuro (Futuro)

As variáveis CSS facilitam a implementação de tema escuro:

```css
/* Tema claro (padrão) */
:root {
  --color-background: #ffffff;
  --color-text: #111827;
}

/* Tema escuro */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: #111827;
    --color-text: #f9fafb;
  }
}

/* Ou com classe */
[data-theme="dark"] {
  --color-background: #111827;
  --color-text: #f9fafb;
}
```

## 💡 Vantagens das Variáveis CSS

### ✅ Facilidade de Manutenção
- Mude a cor em **um lugar** e atualize **todo o site**

### ✅ Performance
- Nativo do navegador, sem JavaScript adicional
- Sem re-renderizações desnecessárias

### ✅ Flexibilidade
- Fácil criar temas (claro/escuro)
- Personalizações por página
- Animações e transições suaves

### ✅ TypeScript Friendly
- Type-safe com interfaces
- IntelliSense completo

### ✅ SSR Compatible
- Funciona perfeitamente com renderização no servidor

## 🛠️ Dicas e Boas Práticas

### 1. **Nomenclatura Consistente**
Use sempre o padrão `--color-nome-variacao`:
```css
--color-primary
--color-primary-hover
--color-primary-light
```

### 2. **Fallbacks**
Sempre forneça um fallback:
```css
background-color: var(--color-primary, #eb8300);
```

### 3. **Documentação**
Comente as variáveis para facilitar manutenção:
```css
:root {
  /* Laranja - Cor principal da marca */
  --color-primary: #eb8300;
}
```

### 4. **Agrupamento Lógico**
Agrupe variáveis relacionadas:
```css
/* Cores da Marca */
--color-primary: ...

/* Cores Neutras */
--color-gray-50: ...

/* Cores de Feedback */
--color-success: ...
```

## 📦 Exemplos Práticos

### Card com Hover

```tsx
<div 
  className="p-6 rounded-lg border-2 transition-all"
  style={{ borderColor: 'var(--color-gray-200)' }}
  onMouseEnter={(e) => {
    e.currentTarget.style.borderColor = 'var(--color-primary)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.borderColor = 'var(--color-gray-200)';
  }}
>
  Conteúdo do Card
</div>
```

### Gradiente

```tsx
<div style={{
  background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`
}}>
  Gradiente
</div>
```

### Ícone Colorido

```tsx
import { Star } from 'lucide-react';

<Star style={{ color: 'var(--color-primary)' }} />
```

### Borda com Variável

```tsx
<input
  type="text"
  style={{
    border: '2px solid var(--color-gray-300)',
    outline: 'none'
  }}
  onFocus={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
  onBlur={(e) => e.currentTarget.style.borderColor = 'var(--color-gray-300)'}
/>
```

## 🔍 Debugging

Para ver todas as variáveis disponíveis no console:

```javascript
// No DevTools do navegador
const root = document.documentElement;
const styles = getComputedStyle(root);
console.log('Primary:', styles.getPropertyValue('--color-primary'));
```

## 📚 Recursos

- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Can I Use: CSS Variables](https://caniuse.com/css-variables)
- [CSS Tricks: A Complete Guide](https://css-tricks.com/a-complete-guide-to-custom-properties/)

---

**Dúvida?** Consulte o time de desenvolvimento ou abra uma issue no repositório.

