# 📱 Configuração do WhatsApp

## Número Atual
**552240038398**
- 55: Código do Brasil
- 22: DDD
- 4003-8398: Número

## Como Alterar o Número

Para alterar o número do WhatsApp em todo o site, **edite apenas 1 arquivo**:

### Arquivo Principal
📁 `src/features/site/utils/company.ts`

```typescript
export const COMPANY_INFO = {
  name: 'Origem Digital',
  formerName: 'G2 Telecom',
  cnpj: '00.000.000/0001-00',
  phone: '552240038398', // ← ALTERE AQUI
  email: 'contato@origemdigital.com.br',
  // ...
};
```

### Formato do Número
- **Formato**: `552240038398`
- **Sem** espaços, parênteses ou hífens
- **Com** código do país (55) + DDD + número completo

## Onde o Número é Usado

Todos os componentes importam automaticamente de `COMPANY_INFO.phone`:

✅ **WhatsAppButton** - Todos os botões de WhatsApp do site
✅ **Footer** - Links de WhatsApp e telefone no rodapé
✅ **CoverageChecker** - Formulário de verificação de cobertura
✅ **Todas as páginas** - Qualquer link de contato

## Teste Após Alteração

1. Altere o número em `src/features/site/utils/company.ts`
2. Salve o arquivo
3. Teste clicando nos botões do WhatsApp no site
4. Verifique se o número correto aparece no WhatsApp Web/App

## Observações

- O número deve incluir o código do país (55 para Brasil)
- Se for número fixo, use o formato: 55 + DDD + número (ex: 552240038398)
- Se for celular, use o formato: 55 + DDD + 9 + número (ex: 5522999887766)
- Não esqueça de atualizar também o texto exibido no Footer se necessário (linha 106 e 118)

