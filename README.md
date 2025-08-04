# 🧠 Brain Agriculture Frontend

Uma aplicação React moderna com arquitetura de microfrontends usando Module Federation.

## 🚀 Características

- **⚛️ React 19** com TypeScript
- **🏗️ Microfrontends** com Module Federation
- **🎨 Styled Components** para estilização
- **📊 Recharts** para gráficos e visualizações
- **🔄 Redux Toolkit** para gerenciamento de estado
- **🛣️ React Router** para navegação
- **🧪 Jest** para testes
- **⚡ Vite** para build e desenvolvimento

## 📁 Estrutura do Projeto

```
brain-agriculture-front/
├── src/                    # Código da aplicação principal
│   ├── components/         # Componentes reutilizáveis
│   ├── microfrontends/     # Configurações dos microfrontends
│   ├── store/             # Redux store
│   ├── routes/            # Configurações de rotas
│   └── utils/             # Utilitários
├── microfrontends/         # Microfrontends
│   ├── header/            # Header microfrontend
│   └── dashboard/         # Dashboard microfrontend
├── scripts/               # Scripts de automação
├── logs/                  # Logs dos serviços
└── docs/                  # Documentação
```

## 🛠️ Pré-requisitos

- **Node.js**: v18 ou superior
- **npm**: v9 ou superior
- **Python**: v3.9 ou superior (para servidor CORS)

## 🚀 Instalação e Execução

### 1. Instalar Dependências

```bash
# Instalar dependências principais
npm install

# Instalar dependências dos microfrontends
cd microfrontends/header && npm install --force && cd ../..
cd microfrontends/dashboard && npm install --force && cd ../..
```

### 2. Executar o Projeto

```bash
# Método recomendado (com servidor CORS)
npm run microfrontends:http
```

### 3. Acessar a Aplicação

- **🏠 Aplicação Principal**: `http://localhost:5173`
- **📊 Header Microfrontend**: `http://localhost:3001`
- **📈 Dashboard Microfrontend**: `http://localhost:3002`

## 📋 Scripts Disponíveis

| Script                         | Descrição                                         |
| ------------------------------ | ------------------------------------------------- |
| `npm run dev`                  | Executa apenas a aplicação principal              |
| `npm run microfrontends:http`  | **Recomendado** - Executa todos os microfrontends |
| `npm run build`                | Build da aplicação principal                      |
| `npm run build:microfrontends` | Build de todos os microfrontends                  |
| `npm run cleanup`              | Limpa processos e portas                          |
| `npm run test`                 | Executa testes                                    |
| `npm run lint`                 | Executa linting                                   |

## 🏗️ Arquitetura

### Microfrontends

O projeto utiliza uma arquitetura de microfrontends com:

- **Header Microfrontend**: Navegação e layout superior
- **Dashboard Microfrontend**: Gráficos e visualizações
- **Aplicação Principal**: Container que orquestra os microfrontends

### Module Federation

- **Compartilhamento de Dependências**: React, React-DOM, Styled Components
- **Isolamento**: Cada microfrontend pode ser desenvolvido independentemente
- **Integração**: Carregamento dinâmico dos microfrontends

## 🧪 Testes

```bash
# Executar todos os testes
npm run test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

## 🔧 Desenvolvimento

### Estrutura de Componentes

```
src/components/
├── atoms/          # Componentes atômicos (Button, Input, etc.)
├── molecules/      # Componentes moleculares (DataManager, etc.)
├── organisms/      # Componentes orgânicos (Dashboard, etc.)
├── pages/          # Páginas da aplicação
└── templates/      # Templates de layout
```

### Design System

O projeto utiliza um design system consistente com:

- **Tokens**: Cores, tipografia, espaçamentos
- **Componentes**: Biblioteca de componentes reutilizáveis
- **Temas**: Sistema de temas para personalização

## 🐛 Solução de Problemas

### Problemas Comuns

1. **Porta já em uso**: Execute `npm run cleanup`
2. **Erro de CORS**: Use `npm run microfrontends:http`
3. **Erro de build**: Verifique as versões do React nos microfrontends

### Logs

Os logs estão disponíveis em `logs/`:

- `header.log` - Log do Header microfrontend
- `dashboard.log` - Log do Dashboard microfrontend
- `header-build.log` - Log do build do Header
- `dashboard-build.log` - Log do build do Dashboard

## 📚 Documentação

- **SETUP.md**: Guia completo de configuração e execução
- **README.md**: Este arquivo

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **Brain Agriculture Team**

---

**Desenvolvido com ❤️ para Brain Agriculture**
