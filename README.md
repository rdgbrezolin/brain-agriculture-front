# Brain Agriculture - Sistema de Gerenciamento de Produtores Rurais

## 📋 Descrição

Sistema front-end desenvolvido para o teste técnico da Brain Agriculture, focado no gerenciamento de produtores rurais e suas propriedades. A aplicação permite cadastrar, editar e visualizar produtores rurais com suas respectivas fazendas e culturas plantadas.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **Redux Toolkit** - Gerenciamento de estado
- **Styled Components** - CSS-in-JS para estilização
- **React Hook Form** - Gerenciamento de formulários
- **Yup** - Validação de esquemas
- **Recharts** - Biblioteca de gráficos
- **Jest** - Framework de testes
- **React Testing Library** - Utilitários para testes

## 🏗️ Arquitetura

O projeto segue o padrão **Atomic Design** para organização dos componentes:

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Button, Input, Select, Card)
│   ├── molecules/      # Componentes compostos (PieChart)
│   ├── organisms/      # Componentes complexos (ProducerForm, Dashboard, ProducersList)
│   ├── templates/      # Layouts (Layout)
│   └── pages/          # Páginas da aplicação
├── store/              # Redux store e slices
├── types/              # Definições de tipos TypeScript
├── utils/              # Utilitários (validação CPF/CNPJ)
├── hooks/              # Hooks personalizados
├── mocks/              # Dados mockados
└── services/           # Serviços (futuras integrações com API)
```

## ✨ Funcionalidades

### 📊 Dashboard

- **Estatísticas gerais**: Total de fazendas, hectares, produtores e culturas
- **Gráficos de pizza**:
  - Distribuição por estado
  - Distribuição por cultura plantada
  - Distribuição por uso do solo (área agricultável vs vegetação)

### 👥 Gerenciamento de Produtores

- **Cadastro de produtores** com validação de CPF/CNPJ
- **Edição de dados** existentes
- **Exclusão** com confirmação
- **Listagem detalhada** com informações das fazendas

### 🏡 Dados das Fazendas

- **Informações básicas**: Nome, cidade, estado
- **Áreas**: Total, agricultável e vegetação
- **Validação**: Soma das áreas não pode ultrapassar área total
- **Culturas**: Múltiplas culturas por safra

### ✅ Validações Implementadas

- **CPF/CNPJ**: Validação completa com dígitos verificadores
- **Áreas**: Validação de soma das áreas
- **Campos obrigatórios**: Todos os campos necessários
- **Formatação automática**: CPF/CNPJ formatados automaticamente

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd brain-agriculture-front

# Instale as dependências
npm install
```

### Execução

```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Testes

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

## 📁 Estrutura de Dados

### Produtor

```typescript
interface Producer {
  id: string;
  cpfCnpj: string;
  name: string;
  farms: Farm[];
}
```

### Fazenda

```typescript
interface Farm {
  id: string;
  name: string;
  city: string;
  state: string;
  totalArea: number; // hectares
  agriculturalArea: number; // hectares
  vegetationArea: number; // hectares
  crops: Crop[];
}
```

### Cultura

```typescript
interface Crop {
  id: string;
  name: string;
  harvest: string; // ex: "Safra 2021"
  area: number; // hectares
}
```

## 🎨 Design System

### Cores

- **Primary**: #007bff (Azul)
- **Secondary**: #6c757d (Cinza)
- **Success**: #28a745 (Verde)
- **Danger**: #dc3545 (Vermelho)
- **Warning**: #ffc107 (Amarelo)

### Componentes

- **Button**: Variantes primary, secondary, danger
- **Input**: Com validação visual
- **Select**: Dropdown customizado
- **Card**: Container com sombra
- **PieChart**: Gráficos de pizza responsivos

## 🧪 Testes

O projeto inclui testes unitários para:

- Componentes React
- Funções de validação
- Utilitários

Cobertura mínima de 80% para:

- Branches
- Functions
- Lines
- Statements

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:

- **Desktop**: Layout completo com gráficos
- **Tablet**: Layout adaptado
- **Mobile**: Layout otimizado para telas pequenas

## 🔧 Configurações

### Vite

- TypeScript support
- Hot Module Replacement
- Build otimizado

### Jest

- Ambiente jsdom
- Setup automático para React Testing Library
- Cobertura de código

### ESLint

- Configuração para React + TypeScript
- Regras de qualidade de código

## 🚀 Deploy

Para fazer deploy da aplicação:

1. Execute o build:

```bash
npm run build
```

2. Os arquivos estarão na pasta `dist/`

3. Faça upload para seu servidor web ou plataforma de deploy

## 💾 Persistência de Dados

### Armazenamento Local

- **localStorage**: Dados persistidos no navegador
- **Sobrevivência**: Dados mantidos após atualizações da página
- **Dados Iniciais**: JSON com dados mockados para primeiro acesso
- **Gerenciamento**: Interface para reset, exportação e limpeza

### Funcionalidades de Dados

- ✅ **Persistência Automática**: Dados salvos automaticamente
- ✅ **Reset para Inicial**: Voltar aos dados originais
- ✅ **Exportação**: Download dos dados em JSON
- ✅ **Limpeza Total**: Remover todos os dados salvos
- ✅ **Status Visual**: Indicação se há dados salvos

### Estrutura de Arquivos

```
src/
├── mocks/
│   ├── initialData.json    # Dados iniciais em JSON
│   └── data.ts            # Exportação dos dados
├── services/
│   └── storageService.ts  # Serviço de persistência
└── components/
    └── molecules/
        └── DataManager.tsx # Interface de gerenciamento
```

## 📈 Melhorias Futuras

- [ ] Integração com API backend
- [ ] Autenticação de usuários
- [ ] Filtros avançados na listagem
- [ ] Exportação de dados
- [ ] Notificações em tempo real
- [ ] PWA (Progressive Web App)
- [ ] Testes E2E com Cypress

## 👨‍💻 Desenvolvimento

### Padrões de Código

- **Clean Code**: Código limpo e legível
- **SOLID**: Princípios de design
- **DRY**: Don't Repeat Yourself
- **KISS**: Keep It Simple, Stupid

### Commits

Siga o padrão Conventional Commits:

```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: formatação de código
refactor: refatoração
test: adiciona testes
chore: tarefas de manutenção
```

## 📄 Licença

Este projeto foi desenvolvido para o teste técnico da Brain Agriculture.

---

**Desenvolvido com ❤️ para Brain Agriculture**
