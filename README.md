# 🚀 Biblioteca Template

Um template/boilerplate moderno e completo para projetos Next.js com TypeScript, Tailwind CSS 4, HeroUI v3 e sistema de temas dark/light integrado.

## 📋 Índice

- [Características](#-características)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Uso](#-uso)
- [Componentes Disponíveis](#-componentes-disponíveis)
- [Sistema de Temas](#-sistema-de-temas)
- [Convenções](#-convenções)
- [Scripts](#-scripts)
- [Próximos Passos](#-próximos-passos)

## ✨ Características

- ⚡ **Next.js 16** com App Router
- 🎨 **HeroUI v3** - Biblioteca completa de componentes React
- 🌓 **Sistema de Temas** - Dark/Light mode com persistência
- 💅 **Tailwind CSS 4** - Estilização utilitária moderna
- 📘 **TypeScript** - Tipagem estática completa
- 🎭 **Framer Motion** - Animações suaves
- 📦 **67 Componentes** - Todos os componentes do HeroUI v3 prontos para uso
- 🗂️ **Estrutura Organizada** - Pastas bem definidas seguindo boas práticas
- 🔧 **Path Aliases** - Importações simplificadas com `@/`

## 🛠️ Tecnologias

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Next.js** | 16.1.6 | Framework React com App Router |
| **React** | 19.2.3 | Biblioteca UI |
| **TypeScript** | ^5 | Tipagem estática |
| **Tailwind CSS** | ^4 | Framework CSS utilitário |
| **HeroUI** | beta | Biblioteca de componentes React |
| **Framer Motion** | ^12.30.1 | Biblioteca de animações |

## 📦 Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

## 🚀 Instalação

1. **Clone o repositório:**
```bash
git clone <seu-repositorio>
cd biblioteca-template
```

2. **Instale as dependências:**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador:**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
biblioteca-template/
├── app/                        # App Router do Next.js
│   ├── layout.tsx             # Layout raiz com ThemeProvider
│   ├── page.tsx               # Página inicial
│   ├── globals.css            # Estilos globais e tema
│   └── favicon.ico            # Ícone do site
├── components/                 # Componentes React
│   ├── ui/                    # 67 componentes do HeroUI v3
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── ThemeToggle.tsx    # Componente para alternar tema
│   │   └── index.ts           # Exportações centralizadas
│   ├── common/                # Componentes comuns reutilizáveis
│   └── providers/             # Providers React
│       └── ThemeProvider.tsx  # Provider de tema dark/light
├── lib/                        # Bibliotecas e utilitários
│   ├── utils/                 # Funções utilitárias
│   ├── constants/            # Constantes da aplicação
│   └── heroui-config.ts      # Configurações do HeroUI
├── hooks/                      # Custom React hooks
├── types/                      # Definições de tipos TypeScript
├── public/                     # Arquivos estáticos
├── styles/                     # Estilos adicionais (se necessário)
├── .gitignore                 # Arquivos ignorados pelo Git
├── next.config.ts             # Configuração do Next.js
├── tailwind.config.ts         # Configuração do Tailwind CSS
├── tsconfig.json              # Configuração do TypeScript
└── package.json               # Dependências e scripts
```

## 💻 Uso

### Importando Componentes

Todos os componentes estão disponíveis através do path alias `@/components/ui`:

```typescript
import { Button, Card, Input, ThemeToggle } from '@/components/ui';

export default function MyPage() {
  return (
    <div>
      <Card>
        <Input placeholder="Digite algo..." />
        <Button variant="primary">Enviar</Button>
      </Card>
      <ThemeToggle />
    </div>
  );
}
```

### Usando o Sistema de Temas

O tema é gerenciado automaticamente pelo `ThemeProvider`. Para usar em seus componentes:

```typescript
'use client';

import { useTheme } from '@/components/providers/ThemeProvider';

export const MyComponent = () => {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <div>
      <p>Tema atual: {theme}</p>
      <button onClick={toggleTheme}>
        Alternar para {theme === 'light' ? 'dark' : 'light'}
      </button>
    </div>
  );
};
```

### Path Aliases

O projeto está configurado com path aliases para facilitar as importações:

```typescript
// Componentes
import { Button } from '@/components/ui';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

// Utilitários
import { cn } from '@/lib/utils';

// Constantes
import { APP_NAME } from '@/lib/constants';

// Tipos
import type { BaseEntity } from '@/types';

// Hooks
import { useCustomHook } from '@/hooks/useCustomHook';
```

## 🎨 Componentes Disponíveis

O template inclui **67 componentes** do HeroUI v3, todos prontos para uso:

### Formulários
- `Input`, `Textarea`, `TextField`, `NumberField`, `DateField`, `TimeField`
- `Select`, `Autocomplete`, `Combobox`, `SearchField`
- `Checkbox`, `CheckboxGroup`, `Radio`, `RadioGroup`
- `Switch`, `SwitchGroup`, `InputOTP`, `InputGroup`
- `Form`, `Fieldset`, `Label`, `Description`
- `ErrorMessage`, `FieldError`

### Navegação e Layout
- `Button`, `ButtonGroup`, `Link`, `Breadcrumbs`
- `Tabs`, `Menu`, `MenuItem`, `MenuSection`
- `Dropdown`, `Popover`, `Modal`, `AlertDialog`
- `Disclosure`, `DisclosureGroup`, `Accordion`

### Exibição
- `Card`, `Surface`, `Alert`, `EmptyState`
- `Avatar`, `Chip`, `Tag`, `TagGroup`
- `Badge`, `Kbd`, `Text`, `Separator`
- `Skeleton`, `Spinner`, `ScrollShadow`

### Outros
- `Calendar`, `DateInputGroup`
- `Listbox`, `ListboxItem`, `ListboxSection`
- `Slider`, `Toast`, `Tooltip`
- `Header`, `CloseButton`

### Tema
- `ThemeToggle` - Componente para alternar entre dark/light mode

## 🌓 Sistema de Temas

O projeto inclui um sistema completo de temas dark/light:

### Características

- ✅ **Persistência** - Salva a preferência no `localStorage`
- ✅ **Detecção Automática** - Detecta a preferência do sistema operacional
- ✅ **Transições Suaves** - Animações ao alternar temas
- ✅ **Type-Safe** - Totalmente tipado com TypeScript

### Como Funciona

1. O `ThemeProvider` envolve toda a aplicação no `layout.tsx`
2. A preferência é salva automaticamente no `localStorage`
3. A classe `dark` é aplicada no elemento `<html>` quando o tema escuro está ativo
4. O Tailwind CSS aplica os estilos automaticamente baseado na classe

### Personalização

Para personalizar as cores do tema, edite `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
}
```

## 📝 Convenções

### Organização de Componentes

- **`components/ui/`**: Componentes de UI base e primitivos (HeroUI)
- **`components/common/`**: Componentes comuns e reutilizáveis do projeto
- **`app/`**: Componentes específicos de páginas/rotas

### Nomenclatura

- Componentes: PascalCase (`Button.tsx`, `ThemeProvider.tsx`)
- Arquivos de utilitários: camelCase (`index.ts`, `utils.ts`)
- Hooks: camelCase com prefixo `use` (`useTheme`, `useCustomHook`)

### Estilização

- Use Tailwind CSS para estilização
- Prefira componentes do HeroUI quando possível
- Use a propriedade `sx` para estilização inline em componentes MUI/HeroUI

## 🎯 Scripts

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa o linter
```

## 🚦 Próximos Passos

Ao criar um novo projeto a partir deste template:

1. ✅ **Renomear o projeto** - Atualize o `name` no `package.json`
2. ✅ **Configurar repositório** - Adicione a URL do seu repositório
3. ✅ **Personalizar tema** - Ajuste cores e estilos em `globals.css`
4. ✅ **Adicionar rotas** - Crie novas páginas em `app/`
5. ✅ **Criar componentes** - Adicione componentes específicos em `components/common/`
6. ✅ **Configurar variáveis de ambiente** - Crie `.env.local` se necessário
7. ✅ **Adicionar funcionalidades** - Implemente features específicas do seu projeto

## 📚 Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [HeroUI v3 Documentation](https://v3.heroui.com/docs/react/getting-started/quick-start)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 Licença

Este é um template de projeto. Sinta-se livre para usar e modificar conforme necessário.

## 🤝 Contribuindo

Este é um template pessoal, mas sugestões e melhorias são sempre bem-vindas!

---

**Desenvolvido com ❤️ para acelerar o desenvolvimento de novos projetos**
