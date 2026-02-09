<p align="center">
    <img src="https://i.imgur.com/buTYOfg.png" width="250px">
</p>

<h1 align="center">💚 Contabilidade.com</h1>

Aplicação desenvolvida como teste técnico para a vaga de Desenvolvedor Front-End da empresa [Contabilidade.com](https://contabilidade.com/).

## 🛠️ Tecnologias utilizadas

[![Stack](https://skillicons.dev/icons?i=react,vite,styledcomponents,ts)](https://skillicons.dev)

## 📋 Setup do Projeto

> [!NOTE]
> **Pré-requisitos:**
>
> - Node 20+
> - pnpm para gerenciamento de pacotes

Para rodar o projeto localmente, considere os passos a seguir:

#### 1. Clone o repositório:

```bash
git clone https://github.com/kwojtyla/contabilidade.git
```

#### 2. Navegue até o diretório do projeto:

```bash
cd contabilidade
```

#### 3. Instale as dependências necessárias:

```bash
pnpm install
```

#### 4. Inicie o servidor local:

```bash
pnpm dev
```

#### 5. Acesse o servidor local:

Abra [http://localhost:5173](http://localhost:5173) no seu navegador para acessar o projeto.

## 📁 Estrutura de Pastas

O projeto está organizado da seguinte forma:

```
src/
├── assets/
│   ├── icons/          # Ícones
│   └── img/            # Imagens e recursos visuais
├── components/
│   ├── layout/         # Componentes de estrutura (Header, Footer, Sections)
│   ├── sections/       # Seções (dobras) da página
│   └── ui/             # Componentes globais reutilizáveis
├── constants/          # Constantes do projeto
├── styles/             # Estilos globais e tema do Styled-Components
└── types/              # Interfaces e tipos TypeScript
```

## 💡 Decisões técnicas

### 🖥️ Tecnologias/Ferramentas

- **Vite:** escolhi o Vite como bundler, principalmente pela velocidade superior de build e hot module replacement (HMR) que ele proporciona. Para projetos de pequeno porte como este, prefiro utilizar o Vite pela experiência de desenvolvimento mais ágil comparado a alternativas como o CRA, sem a complexidade adicional de frameworks mais robustos como o Next.js que não seriam necessários neste contexto.

- **Styled-Components:** optei pelo SC como solução de CSS-in-JS principalmente por familiaridade com a biblioteca, mas também pela facilidade e hábito em trabalhar com temas dinâmicos. Nele, implementei um tema global que centraliza todas as variáveis de design (cores, espaçamentos, tipografia), facilitando a manutenção e garantindo consistência visual em todo o projeto.

- **Prettier/ESLint:** adicionei o Prettier e o ESLint no projeto para garantir a qualidade e padronização do código. Não fiz muitas alterações na config padrão, mas customizei as regras para incluir aspas duplas, ponto e vírgula obrigatório e organização automática de imports, mantendo o código limpo e consistente.

### 🎨 Decisões de Design

Durante o desenvolvimento do projeto, percebi alguns pontos não especificados no Figma que optei por uma abordagem que me permitisse dar vazão mais rápido, sem abrir mão da qualidade, como:

- **Hover states de botões:** apesar de não documentados, fiz uma rápida pesquisa no portal oficial da empresa e entendi como era feito ali. Fiz uma abordagem parecida, apenas alterando levemente as cores e adicionando um `transition` no CSS para uma mudança mais "smooth";

- **Componente de Vídeo:** o vídeo que aparecia na dobra 1 não estava documentado, então optei por criar um componente separado e global, que recebesse como `prop` tanto a thumbnail (imagem de destaque), quando uma `source`, que poderia ser tanto um arquivo local, quanto um link do YouTube. Tentei deixar o componente inteligente o bastante para gerar o embed do YouTube automaticamente, além de adicionar um popover para reprodução do vídeo no site.

---

<p align="center">
    Desenvolvido com 💚 por <a href="https://karolwojtyla.dev">Karol Wojtyla</a>
</p>
