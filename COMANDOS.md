# Comandos Úteis

## 🚀 Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# Acesse: http://localhost:5173

# Build para produção
npm run build

# Preview do build de produção
npm run preview

# Lint (verificar código)
npm run lint
```

## 📦 Gerenciamento de Dependências

```bash
# Adicionar nova dependência
npm install nome-do-pacote

# Adicionar dependência de desenvolvimento
npm install -D nome-do-pacote

# Atualizar dependências
npm update

# Verificar dependências desatualizadas
npm outdated

# Remover dependência
npm uninstall nome-do-pacote
```

## 🔍 Debug

```bash
# Verificar versão do Node
node --version

# Verificar versão do npm
npm --version

# Limpar cache do npm
npm cache clean --force

# Reinstalar dependências do zero
rm -rf node_modules package-lock.json
npm install
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instalar CLI da Vercel
npm install -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### Netlify

```bash
# Instalar CLI do Netlify
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy para produção
netlify deploy --prod
```

### Build Manual

```bash
# 1. Build
npm run build

# 2. Os arquivos estarão em /dist
# 3. Faça upload dos arquivos de /dist para seu servidor
```

## 📊 Análise do Bundle

```bash
# Analisar tamanho do bundle
npm run build -- --mode analyze
```

## 🧹 Limpeza

```bash
# Limpar pasta de build
rm -rf dist

# Limpar cache do Vite
rm -rf node_modules/.vite
```

## 🔧 TypeScript

```bash
# Verificar tipos sem compilar
npx tsc --noEmit

# Gerar declarações de tipo
npx tsc --declaration
```

## 📝 Git

```bash
# Inicializar repositório (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Commit
git commit -m "feat: implementação inicial do site"

# Adicionar remote
git remote add origin URL_DO_REPOSITORIO

# Push
git push -u origin main
```

## 🎨 Tailwind CSS

```bash
# Recompilar Tailwind (se necessário)
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

## 🧪 Testes (quando implementados)

```bash
# Rodar testes
npm test

# Rodar testes em modo watch
npm test -- --watch

# Cobertura de testes
npm test -- --coverage
```

## 📱 Teste em Dispositivos Móveis

### Expor servidor local na rede

```bash
# Vite já expõe na rede por padrão
npm run dev

# Acesse pelo IP local:
# http://SEU_IP_LOCAL:5173
# Exemplo: http://192.168.1.100:5173
```

### Usando ngrok (túnel público)

```bash
# Instalar ngrok
npm install -g ngrok

# Em um terminal, rode o projeto
npm run dev

# Em outro terminal, crie o túnel
ngrok http 5173
```

## 🔐 Variáveis de Ambiente

```bash
# Criar arquivo .env
cp env.example.txt .env

# Editar variáveis
nano .env  # ou use seu editor preferido
```

## 📦 Dependências Principais

### Atualizar React

```bash
npm install react@latest react-dom@latest
npm install -D @types/react@latest @types/react-dom@latest
```

### Atualizar Tailwind

```bash
npm install -D tailwindcss@latest autoprefixer@latest postcss@latest
```

### Atualizar Vite

```bash
npm install -D vite@latest
```

## 🆘 Solução de Problemas Comuns

### Porta já em uso

```bash
# Matar processo na porta 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID NUMERO_DO_PID /F

# Linux/Mac:
lsof -ti:5173 | xargs kill -9

# Ou usar outra porta
npm run dev -- --port 3000
```

### Erro de permissão (Linux/Mac)

```bash
# Dar permissões de execução
chmod +x node_modules/.bin/*
```

### Módulos não encontrados

```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

## 📊 Performance

```bash
# Analisar bundle size
npm run build
npx vite-bundle-visualizer

# Lighthouse CI (auditoria)
npx lighthouse http://localhost:5173 --view
```

## 🔄 Workflow Recomendado

```bash
# 1. Criar branch para feature
git checkout -b feature/nova-funcionalidade

# 2. Desenvolver
npm run dev

# 3. Testar e lint
npm run lint

# 4. Commit
git add .
git commit -m "feat: adiciona nova funcionalidade"

# 5. Build de produção (teste)
npm run build
npm run preview

# 6. Push
git push origin feature/nova-funcionalidade

# 7. Criar Pull Request no GitHub/GitLab
```

---

**Dica**: Adicione scripts personalizados no `package.json` conforme necessário!

