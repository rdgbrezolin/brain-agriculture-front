# 🚀 Guia de Configuração - Brain Agriculture Frontend

## 📋 Pré-requisitos

- **Node.js**: v18 ou superior
- **npm**: v9 ou superior
- **Python**: v3.9 ou superior (para servidor CORS)

## 🛠️ Instalação

```bash
# 1. Clonar o repositório
git clone <repository-url>
cd brain-agriculture-front

# 2. Instalar dependências
npm install

# 3. Instalar dependências dos microfrontends
cd microfrontends/header && npm install --force && cd ../..
cd microfrontends/dashboard && npm install --force && cd ../..
```

## 🚀 Como Executar

### ⚡ Método Recomendado (com servidor CORS)

```bash
# Executar todos os microfrontends e aplicação principal
npm run microfrontends:http
```

### 🔧 Outros Métodos Disponíveis

```bash
# Modo simples (dev mode)
npm run microfrontends:simple

# Modo com build prévio
npm run microfrontends:build

# Limpar processos e portas
npm run cleanup
```

## 🌐 URLs de Acesso

Após executar o projeto, você terá acesso a:

- **🏠 Aplicação Principal**: `http://localhost:5173`
- **📊 Header Microfrontend**: `http://localhost:3001`
- **📈 Dashboard Microfrontend**: `http://localhost:3002`

## 📁 Estrutura do Projeto

```
brain-agriculture-front/
├── src/                    # Código da aplicação principal
├── microfrontends/
│   ├── header/            # Microfrontend do Header
│   └── dashboard/         # Microfrontend do Dashboard
├── scripts/               # Scripts de automação
└── logs/                  # Logs dos serviços
```

## 🔧 Configurações Importantes

### ✅ Compatibilidade de Versões do React

**IMPORTANTE**: Todos os microfrontends devem usar a **mesma versão do React** que a aplicação principal:

- **Aplicação Principal**: React 19.1.1
- **Header Microfrontend**: React 19.1.1 ✅
- **Dashboard Microfrontend**: React 19.1.1 ✅

### 🔄 Servidor CORS Personalizado

O projeto usa um servidor CORS personalizado (`scripts/simple_cors_server.py`) para:

- ✅ Configurar MIME types corretos (`application/javascript`)
- ✅ Adicionar cabeçalhos CORS necessários
- ✅ Servir arquivos `remoteEntry.js` corretamente

### 🛠️ Correções de Erros Aplicadas

#### ✅ Erro: "Received `true` for a non-boolean attribute `active`"

**Causa**: Atributo `active` sendo passado para o DOM como booleano.

**Solução**: Implementado `shouldForwardProp` no `NavButton`:

```typescript
const NavButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  // ... estilos
`;
```

#### ✅ Erro: "Cannot read properties of null (reading 'useRef')"

**Causa**: Conflito de dependências compartilhadas entre microfrontends.

**Solução**: Atualizado Module Federation para compartilhar todas as dependências:

```typescript
shared: [
  "react",
  "react-dom",
  "react-router-dom",
  "styled-components",
  "recharts",
];
```

## 🐛 Solução de Problemas

### ❌ Erro: "React Element from an older version"

**Causa**: Múltiplas versões do React sendo carregadas simultaneamente.

**Solução**:

```bash
# 1. Verificar versões
npm list react react-dom
cd microfrontends/header && npm list react react-dom
cd ../dashboard && npm list react react-dom

# 2. Se houver incompatibilidade, reinstalar com --force
cd microfrontends/header && npm install --force
cd ../dashboard && npm install --force
```

### ❌ Erro: "Received `true` for a non-boolean attribute `active`"

**Causa**: Atributo `active` sendo passado para o DOM.

**Solução**: Já corrigido com `shouldForwardProp` no `NavButton`.

### ❌ Erro: "Cannot read properties of null (reading 'useRef')"

**Causa**: Conflito de dependências compartilhadas.

**Solução**: Já corrigido com dependências compartilhadas atualizadas.

### ❌ Erro: CORS ou MIME Type

**Causa**: Servidor não configurado corretamente.

**Solução**:

```bash
# 1. Parar todos os processos
npm run cleanup

# 2. Executar com servidor CORS configurado
npm run microfrontends:http
```

### ❌ Erro: "Porta já em uso"

**Solução**:

```bash
# Limpar processos
npm run cleanup

# Verificar se as portas estão livres
lsof -i :3001 -i :3002 -i :5173
```

### ❌ Erro: Build falha

**Solução**:

```bash
# 1. Limpar cache
rm -rf node_modules package-lock.json
npm install

# 2. Reinstalar microfrontends
cd microfrontends/header && rm -rf node_modules package-lock.json && npm install --force
cd ../dashboard && rm -rf node_modules package-lock.json && npm install --force
```

## 🧪 Testes

### Teste de Compatibilidade de Versões

```bash
# Executar teste automatizado
node scripts/test-react-versions.js
```

### Teste de Correções de Erros

```bash
# Executar teste de correções
node scripts/test-errors.js
```

### Teste Manual

```bash
# Verificar se os microfrontends estão servindo corretamente
curl -s http://localhost:3001/assets/remoteEntry.js | head -5
curl -s http://localhost:3002/assets/remoteEntry.js | head -5

# Verificar cabeçalhos CORS
curl -s -I http://localhost:3001/assets/remoteEntry.js
```

## 📝 Logs

Os logs estão disponíveis em:

- **Header**: `logs/header.log`
- **Dashboard**: `logs/dashboard.log`
- **Build Header**: `logs/header-build.log`
- **Build Dashboard**: `logs/dashboard-build.log`

## 🔄 Scripts Disponíveis

| Script                          | Descrição                                   |
| ------------------------------- | ------------------------------------------- |
| `npm run microfrontends:http`   | **Recomendado** - Executa com servidor CORS |
| `npm run microfrontends:simple` | Modo simples (dev)                          |
| `npm run microfrontends:build`  | Modo com build prévio                       |
| `npm run cleanup`               | Limpa processos e portas                    |
| `npm run dev`                   | Apenas aplicação principal                  |

## ✅ Checklist de Verificação

Antes de acessar a aplicação, verifique:

- [ ] Todas as portas estão livres (3001, 3002, 5173)
- [ ] Microfrontends estão servindo `remoteEntry.js` corretamente
- [ ] Cabeçalhos CORS estão configurados
- [ ] MIME types estão corretos (`application/javascript`)
- [ ] Versões do React são compatíveis em todos os projetos
- [ ] Erros de `active` e `useRef` foram corrigidos

## 🎯 Status Final Esperado

Quando tudo estiver funcionando corretamente:

- ✅ **Porta 3001**: Header microfrontend funcionando
- ✅ **Porta 3002**: Dashboard microfrontend funcionando
- ✅ **Porta 5173**: Aplicação principal funcionando
- ✅ **CORS**: Configurado corretamente
- ✅ **MIME Types**: `application/javascript` configurado
- ✅ **Module Federation**: Funcionando corretamente
- ✅ **React Versions**: Todas compatíveis (19.1.1)
- ✅ **Erros Corrigidos**: `active` e `useRef` resolvidos

## 🆘 Suporte

Se encontrar problemas:

1. Execute `npm run cleanup`
2. Verifique os logs em `logs/`
3. Execute `node scripts/test-react-versions.js`
4. Execute `node scripts/test-errors.js`
5. Verifique se todas as versões do React são compatíveis
