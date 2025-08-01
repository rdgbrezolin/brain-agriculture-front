# Design System - Brain Agriculture

## 📋 Visão Geral

O Design System da Brain Agriculture é uma biblioteca de componentes e tokens de design que garante consistência visual e experiência do usuário em toda a aplicação.

## 🎨 Tokens de Design

### Cores

#### Paleta Primária

- **Primary Blue**: `#2196f3` - Cor principal da marca
- **Secondary Gray**: `#9e9e9e` - Cor secundária

#### Estados

- **Success**: `#4caf50` - Ações bem-sucedidas
- **Error**: `#f44336` - Erros e alertas críticos
- **Warning**: `#ffc107` - Avisos e alertas
- **Info**: `#03a9f4` - Informações

#### Neutras

- **Background**: `#ffffff`, `#f8f9fa`, `#e9ecef`
- **Text**: `#212529`, `#6c757d`, `#adb5bd`
- **Border**: `#dee2e6`, `#ced4da`, `#adb5bd`

### Tipografia

#### Família de Fontes

```typescript
fontFamily: {
  primary: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  monospace: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
}
```

#### Tamanhos

- **xs**: 12px
- **sm**: 14px
- **base**: 16px
- **lg**: 18px
- **xl**: 20px
- **2xl**: 24px
- **3xl**: 30px
- **4xl**: 36px
- **5xl**: 48px

#### Pesos

- **light**: 300
- **normal**: 400
- **medium**: 500
- **semibold**: 600
- **bold**: 700
- **extrabold**: 800

### Espaçamento

Sistema baseado em múltiplos de 4px:

- **0**: 0px
- **1**: 4px
- **2**: 8px
- **3**: 12px
- **4**: 16px
- **5**: 20px
- **6**: 24px
- **8**: 32px
- **10**: 40px
- **12**: 48px
- **16**: 64px
- **20**: 80px
- **24**: 96px
- **32**: 128px

### Border Radius

- **none**: 0px
- **sm**: 2px
- **base**: 4px
- **md**: 6px
- **lg**: 8px
- **xl**: 12px
- **2xl**: 16px
- **3xl**: 24px
- **full**: 9999px

### Shadows

- **none**: Sem sombra
- **sm**: Sombra sutil
- **base**: Sombra padrão
- **md**: Sombra média
- **lg**: Sombra grande
- **xl**: Sombra extra grande
- **2xl**: Sombra máxima
- **inner**: Sombra interna

## 🧩 Componentes

### Layout

#### Container

```typescript
<Container maxWidth="1400px" padding="24px">
  Conteúdo
</Container>
```

#### Grid

```typescript
<Grid columns={3} gap="24px">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

#### Flex

```typescript
<Flex direction="row" gap="16px" alignItems="center">
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

### Tipografia

#### Heading

```typescript
<Heading level={1} color="primary.500" align="center">
  Título Principal
</Heading>
```

#### Text

```typescript
<Text size="lg" color="text.secondary" weight="medium">
  Texto de exemplo
</Text>
```

### Feedback

#### Badge

```typescript
<Badge variant="success" size="md">
  Ativo
</Badge>
```

#### Card

```typescript
<Card padding="24px" shadow="md" borderRadius="lg">
  Conteúdo do card
</Card>
```

## 📱 Responsividade

### Breakpoints

- **xs**: 320px
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

### Uso

```typescript
@media (max-width: ${theme.breakpoints.md}) {
}
```

## 🎯 Acessibilidade

### Focus Visible

```typescript
const StyledButton = styled.button`
  ${focusVisible}
`;
```

### Screen Reader Only

```typescript
const VisuallyHiddenText = styled.span`
  ${srOnly}
`;
```

## 🔧 Uso

### Importação

```typescript
import { theme, colors, spacing, typography } from "@/design-system";
import { Container, Heading, Text, Badge } from "@/design-system/components";
```

### Com Styled Components

```typescript
import styled from "styled-components";
import { theme } from "@/design-system";

const StyledComponent = styled.div`
  color: ${theme.colors.primary[500]};
  padding: ${theme.spacing[4]};
  font-size: ${theme.typography.fontSize.lg};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;
```

## 📐 Princípios

1. **Consistência**: Todos os componentes seguem os mesmos padrões
2. **Reutilização**: Componentes são modulares e reutilizáveis
3. **Acessibilidade**: Suporte completo a WCAG 2.1
4. **Responsividade**: Funciona em todos os dispositivos
5. **Performance**: Otimizado para performance
6. **Manutenibilidade**: Fácil de manter e expandir

## 🚀 Desenvolvimento

### Adicionando Novos Tokens

1. Adicione o token em `tokens.ts`
2. Atualize os tipos em `theme.ts`
3. Documente no README

### Criando Novos Componentes

1. Crie o componente em `components.ts`
2. Adicione tipos apropriados
3. Inclua suporte a acessibilidade
4. Teste em diferentes dispositivos
5. Documente o uso

## 📚 Recursos

- [Figma Design System](link-para-figma)
- [Storybook](link-para-storybook)
- [Documentação de Acessibilidade](link-para-docs)
- [Guia de Contribuição](link-para-guide)
