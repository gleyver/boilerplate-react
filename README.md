# Boilerplate React + TypeScript + Vite

Este projeto é um boilerplate moderno para aplicações front-end, utilizando React, TypeScript e Vite. Ele já vem configurado com ferramentas essenciais para qualidade de código, testes, organização escalável e produtividade.

## Principais Tecnologias e Versões

- **React**: ^19.1.0
- **React DOM**: ^19.1.0
- **React Router DOM**: ^7.6.2
- **TypeScript**: ~5.8.3
- **Vite**: ^6.3.5
- **Vitest**: ^3.2.3
- **ESLint**: ^9.29.0
- **Prettier**: ^3.5.3
- **Nanostores**: ^1.0.1
- **Husky**: ^9.1.7
- **Testing Library**: ^16.3.0

Veja todas as dependências no `package.json`.

## Arquitetura e Organização

A estrutura do projeto é pensada para escalar e separar responsabilidades:

```
src/
  assets/       # Imagens, fontes, etc
  components/   # Componentes reutilizáveis globais
  config/       # Configurações globais
  contexts/     # React Contexts globais
  domains/      # Domínios de negócio (cada domínio tem sua própria estrutura)
  hooks/        # Custom hooks globais
  layouts/      # Layouts reutilizáveis
  routes/       # Definição das rotas da aplicação
  services/     # Serviços globais (ex: API)
  stores/       # Gerenciamento de estado global
  styles/       # Estilos globais
  tests/        # Utilitários de teste globais
  types/        # Tipagens globais
  utils/        # Funções utilitárias globais
  main.tsx      # Entry point da aplicação
  App.tsx       # Componente raiz
```

### Domínios
A pasta `domains/` permite organizar o código por contexto de negócio. Cada domínio pode conter seus próprios componentes, páginas, hooks, stores, services, types e testes. Exemplo:

```
src/domains/user/
  components/
  docs/
  pages/
  services/
  hooks/
  stores/
  types/
  tests/
```

### Rotas
As rotas são centralizadas em `src/routes/`, facilitando a manutenção e expansão. Cada domínio pode exportar suas rotas e elas são agregadas no arquivo principal de rotas.

## Scripts Disponíveis

- `npm run dev`: inicia o servidor de desenvolvimento
- `npm run build`: gera a build de produção
- `npm run preview`: roda a build localmente
- `npm run lint`: executa o ESLint
- `npm run format`: formata o código com Prettier
- `npm run test`: executa os testes unitários com Vitest
- `npm run prepare`: prepara os hooks do Husky

## Qualidade e Padronização

- **Commits** seguem o padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)
- **ESLint** e **Prettier** garantem código limpo e padronizado
- **Husky** e **lint-staged** automatizam checagens antes dos commits
- **Vitest** e **Testing Library** para testes rápidos e confiáveis

## Storybook

O projeto já vem configurado com o [Storybook](https://storybook.js.org/), uma ferramenta para desenvolvimento isolado, documentação e testes visuais de componentes de interface.

### Como rodar o Storybook

Para iniciar o Storybook em modo de desenvolvimento, execute:

```bash
npm run storybook
```

O Storybook ficará disponível em [http://localhost:6006](http://localhost:6006).

Para gerar uma build estática do Storybook (útil para deploy ou integração contínua):

```bash
npm run build-storybook
```

Os arquivos gerados ficarão na pasta `storybook-static/`.

### Estrutura dos stories

Os arquivos de stories ficam em `src/**/*.stories.tsx` ou `.ts`. Exemplos reais podem ser encontrados em `src/stories/`, como:
- `src/stories/Button.stories.ts`
- `src/stories/Header.stories.ts`
- `src/stories/Page.stories.ts`

Cada arquivo de story exporta variações do componente para facilitar testes e documentação. Exemplo simplificado:

```ts
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};
```

### Addons e integrações

O Storybook está configurado com os seguintes addons principais:
- **@storybook/addon-docs**: documentação automática dos componentes
- **@storybook/addon-a11y**: checagem de acessibilidade (a11y)
- **@storybook/addon-vitest**: integração com testes unitários
- **@chromatic-com/storybook**: integração para publicação e revisão visual (Chromatic)

A configuração dos addons pode ser vista em `.storybook/main.ts` e `.storybook/preview.ts`.

### Testes e acessibilidade

- Os stories podem ser usados como base para testes automatizados com o Vitest.
- O addon de acessibilidade já está ativado e pode ser customizado em `.storybook/preview.ts`.
- Para integração de testes com stories, veja `.storybook/vitest.setup.ts`.

### Documentação customizada

O Storybook suporta documentação customizada via arquivos `.mdx`, como `src/stories/Configure.mdx`.

### Mais informações

- [Documentação oficial do Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Como escrever stories](https://storybook.js.org/docs/react/writing-stories/introduction)

## Como Rodar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
3. **Acesse:**
   Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Testes

- Os testes ficam próximos aos componentes ou em `src/tests/`
- Exemplo de teste: `src/components/Hello.test.tsx`
- Para rodar os testes:
  ```bash
  npm run test
  ```

## Contribuição

1. Crie uma branch a partir da `main`
2. Faça suas alterações
3. Garanta que os testes, lint e format passaram
4. Faça commits seguindo o padrão
5. Abra um Pull Request

---

Este boilerplate é ideal para times que buscam produtividade, qualidade e organização desde o início do projeto. Sinta-se à vontade para adaptar conforme sua necessidade!
