# Portfólio | Giovanna Mendes

Site pessoal de uma página, responsivo, com identidade em azul e preto.

## Ver localmente

Abra `index.html` no navegador (não há instalação, build ou dependências externas).

Para trabalhar como desenvolvedora, também é possível usar a extensão Live Server do VS Code ou executar `python3 -m http.server 8000` dentro da pasta e abrir `http://localhost:8000`.

## Estrutura

- `index.html`: conteúdo e estrutura semântica
- `assets/styles.css`: visual responsivo, paleta e animações
- `assets/script.js`: menu mobile, indicador de rolagem, navegação ativa, links externos, verificação do PDF e cópia de e-mail
- `assets/favicon.svg`: ícone

## Personalização

- Substitua o título do cabeçalho e hero em `index.html` conforme desejar.
- O GitHub já aponta para `https://github.com/agiovannamendes`.
- **LinkedIn:** abra `assets/script.js`, localize `const LINKEDIN_URL = '';` e informe a URL completa do seu perfil (por exemplo, `https://www.linkedin.com/in/seu-usuario/`). Os botões no topo e no contato serão ativados automaticamente. Enquanto não houver link, informam que falta configuração ao clicar.
- A data de início na URBS não foi adicionada porque ainda precisa de confirmação.
- **Currículo PDF:** quando a versão definitiva estiver pronta, coloque o arquivo PDF na raiz do projeto, com o nome **`curriculo.pdf`** (ao lado de `index.html`). Os botões do cabeçalho e de contato passarão a baixá-lo. Enquanto não existir, a versão publicada informa que o currículo estará disponível em breve. Em `file://`, use um servidor local para testar essa verificação. Não publique currículo antigo por engano.
- Antes de publicar, revise a lista de tecnologias para garantir que ela descreva corretamente seus conhecimentos e sua experiência.
- As tecnologias são apresentadas como repertório técnico, não como alegações de experiência profissional em cada uma delas.

## Publicar sem comprar domínio: GitHub Pages

1. Crie no GitHub um repositório público chamado `agiovannamendes.github.io`.
2. Envie `index.html` e a pasta `assets/` para a raiz do repositório (o README é opcional). Quando finalizado, envie também `curriculo.pdf`. Antes, configure o LinkedIn no JavaScript.
3. Em **Settings → Pages**, escolha **Deploy from a branch**; selecione a branch **main** e a pasta **/(root)**. Salve.
4. Depois da publicação, acesse `https://agiovannamendes.github.io`.

A URL acima é um formato esperado, **não um endereço já publicado**. Sem domínio personalizado, o GitHub fornece seu domínio `github.io`.

Opção alternativa: envie a pasta do site pelo Netlify Drop e receba uma URL `*.netlify.app`.

## Nota

O texto da experiência descreve atividades relatadas na URBS, e o cargo aparece como estágio. O editor de código da página é uma ilustração decorativa, não um repositório real.
