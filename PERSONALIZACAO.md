# Guia Rápido de Personalização

## 🎨 Cores da Marca

**Arquivo**: `src/index.css`

Este projeto usa **variáveis CSS** definidas no `:root` para máxima flexibilidade.

```css
:root {
  /* Cores da Marca - Origem Digital */
  --color-primary: #eb8300;           /* Laranja principal */
  --color-primary-hover: #d17600;     /* Laranja hover */
  --color-primary-light: #ffa726;     /* Laranja claro */
  
  --color-secondary: #452483;         /* Roxo principal */
  --color-secondary-hover: #3a1f6e;   /* Roxo hover */
  --color-secondary-light: #5e35b1;   /* Roxo claro */
}
```

### Como usar nos componentes:

```tsx
// Cor de fundo
<div style={{ backgroundColor: 'var(--color-primary)' }}>

// Cor de texto
<span style={{ color: 'var(--color-secondary)' }}>

// Múltiplas propriedades
<button style={{
  backgroundColor: 'var(--color-primary)',
  color: 'white'
}}>
```

**Vantagem**: Mude as cores em **um único lugar** e todo o site é atualizado automaticamente!

📖 **Veja mais**: `VARIAVEIS-CSS.md` para guia completo

## 📞 Contatos

### WhatsApp

**Arquivos a atualizar**:

1. `src/components/WhatsAppButton.tsx` - Linha 9
2. `src/components/home/CoverageChecker.tsx` - Linha 102
3. `src/components/Footer.tsx` - Linhas 87 e 97
4. `src/constants/company.ts` - Linha 10

**Formato**: `552240038398` (sem espaços, sem parênteses)
- `55` = código do Brasil
- `32` = DDD
- `999999999` = número com 9 dígitos

### Outros Contatos

**Arquivo**: `src/constants/company.ts`

```typescript
export const COMPANY_INFO = {
  name: 'Origem Digital',
  cnpj: '00.000.000/0001-00',      // ← ATUALIZAR
  phone: '552240038398',           // ← ATUALIZAR
  email: 'contato@origemdigital.com.br', // ← ATUALIZAR
  
  address: {
    street: 'Rua Exemplo, 123',     // ← ATUALIZAR
    city: 'Miracema',                // ← ATUALIZAR
    state: 'MG',
    cep: '00000-000',                // ← ATUALIZAR
  },

  social: {
    facebook: 'https://facebook.com/origemdigital',   // ← ATUALIZAR
    instagram: 'https://instagram.com/origemdigital',  // ← ATUALIZAR
    linkedin: 'https://linkedin.com/company/origemdigital', // ← ATUALIZAR
  },
}
```

## 📊 Planos e Preços

**Arquivo**: `src/data/plans.ts`

Para adicionar/editar planos de uma cidade:

```typescript
{
  city: 'Miracema',
  plans: [
    {
      id: 'miracema-200',
      speed: 200,              // ← Velocidade em Mbps
      price: 79.90,            // ← Preço mensal
      benefits: [              // ← Benefícios inclusos
        'Wi-Fi incluso',
        'Instalação grátis*',
        'Suporte local'
      ],
      hasWifi6: false,         // ← true se incluir Wi-Fi 6
    },
  ]
}
```

### Para adicionar nova cidade:

```typescript
{
  city: 'Nova Cidade',
  plans: [
    // ... seus planos
  ]
}
```

Lembre-se de adicionar também em `src/types/plans.ts`:

```typescript
export type City = 
  | 'Miracema'
  | 'Laje do Muriaé'
  // ...
  | 'Nova Cidade'; // ← Adicionar aqui
```

## 📝 Textos e Mensagens

### Hero Section

**Arquivo**: `src/components/home/Hero.tsx`

- Linha 25: Headline principal
- Linha 30: Subtítulo
- Linha 63: Texto do selo de confiança

### Benefícios Rápidos

**Arquivo**: `src/components/home/QuickBenefits.tsx`

- Linhas 6-21: Cards de benefícios
- Linha 40: Cidades atendidas

### FAQ

**Arquivo**: `src/components/home/FAQ.tsx`

Array `faqs` (linha 9): adicione/edite perguntas e respostas

```typescript
{
  question: 'Sua pergunta aqui?',
  answer: 'Resposta detalhada...',
}
```

### Depoimentos

**Arquivo**: `src/components/home/WhyOrigemDigital.tsx`

Array `testimonials` (linha 29):

```typescript
{
  name: 'Nome do Cliente',
  location: 'Bairro, Cidade',
  text: 'Depoimento do cliente...',
  rating: 5,
}
```

## 🔗 Links do Menu

**Arquivo**: `src/components/Header.tsx`

Array `menuLinks` (linha 10):

```typescript
{ to: '/planos', label: 'Planos' },
```

## 🎯 Meta Tags (SEO)

**Arquivo**: `index.html`

- Linha 9: Título da página
- Linha 10: Descrição (importante para Google)
- Linha 11: Palavras-chave
- Linhas 14-17: Open Graph (compartilhamento em redes)

## 🖼️ Imagens e Logo

### Logo

Substitua em `src/components/Header.tsx` (linha 25-29):

```tsx
<div className="text-2xl font-bold">
  <span className="text-primary">Origem</span>{' '}
  <span className="text-secondary">Digital</span>
</div>
```

Por uma imagem:

```tsx
<img 
  src="/logo.png" 
  alt="Origem Digital" 
  className="h-12"
/>
```

### Favicon

Substitua `/public/vite.svg` pelo favicon da empresa.

## 🚀 Deploy

### Build

```bash
npm run build
```

Os arquivos otimizados estarão em `/dist`

### Variáveis de Ambiente (Produção)

Configure no seu serviço de hospedagem:

```
VITE_API_URL=https://api.origemdigital.com.br
```

## ✅ Checklist de Personalização

- [ ] Atualizar número do WhatsApp (4 arquivos)
- [ ] Atualizar dados da empresa (company.ts)
- [ ] Revisar planos e preços (plans.ts)
- [ ] Atualizar CNPJ no Footer
- [ ] Configurar links de redes sociais
- [ ] Revisar e ajustar textos principais
- [ ] Adicionar/editar depoimentos
- [ ] Atualizar FAQ com perguntas relevantes
- [ ] Trocar logo e favicon
- [ ] Configurar meta tags (SEO)
- [ ] Testar todos os links do WhatsApp
- [ ] Verificar responsividade no mobile
- [ ] Configurar variáveis de ambiente

## 💡 Dicas

1. **Cores**: Use sempre `text-primary` e `text-secondary` nos componentes para manter consistência
2. **Espaçamentos**: Siga o padrão Tailwind (py-16, px-4, etc)
3. **Responsividade**: Use `md:` e `lg:` prefixes
4. **Performance**: Otimize imagens antes de adicionar (WebP, tamanhos adequados)
5. **Acessibilidade**: Sempre adicione `alt` em imagens e `aria-label` em botões sem texto

---

**Dúvidas?** Consulte o `SETUP.md` para documentação completa.

