# Livraria Inclusiva — Acessibilidade Web com React

## 1. Apresentação

Este repositório contém o projeto **Livraria Inclusiva**, desenvolvido como parte da atividade **Parada Obrigatória 02 — Desenvolvimento Fullstack**, do curso de Ciência de Dados e Inteligência Artificial do SENAI CIMATEC.

O projeto consiste em uma aplicação de livraria online desenvolvida com React, Redux e React Router, com foco na implementação, avaliação e validação de melhorias de acessibilidade digital.

A proposta foi demonstrar como decisões de desenvolvimento frontend podem afetar a experiência de pessoas com deficiência, especialmente aquelas que utilizam tecnologias assistivas, como leitores de tela, ou dependem da navegação por teclado.

Para isso, foram utilizadas duas versões da aplicação: uma versão inicial, contendo barreiras de acessibilidade, e uma versão aprimorada, desenvolvida com base nas recomendações das **Web Content Accessibility Guidelines (WCAG) 2.2**.

## 2. Objetivos

O objetivo geral do projeto foi identificar, corrigir e avaliar problemas de acessibilidade em uma aplicação web, aplicando boas práticas de desenvolvimento inclusivo.

Entre os objetivos específicos, destacam-se:

- Desenvolver uma aplicação funcional de livraria online utilizando React.
- Implementar o gerenciamento de estado global com Redux.
- Utilizar React Router para navegação entre páginas.
- Identificar barreiras de acessibilidade por meio do Lighthouse.
- Corrigir problemas relacionados à semântica HTML, contraste, navegação por teclado e identificação de elementos interativos.
- Melhorar a compatibilidade com leitores de tela.
- Validar as modificações por meio de auditorias automatizadas e testes manuais.
- Comparar os resultados obtidos antes e depois das intervenções.

## 3. Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| React | Desenvolvimento da interface e dos componentes |
| JavaScript (JSX) | Implementação da lógica e das funcionalidades |
| Vite | Ambiente de desenvolvimento e ferramenta de build |
| Redux | Gerenciamento centralizado do estado da aplicação |
| React Router | Navegação entre páginas |
| HTML5 | Estrutura semântica e elementos acessíveis |
| CSS3 | Estilização, responsividade e indicadores de foco |
| Lighthouse | Auditoria automatizada de acessibilidade |
| NVDA | Avaliação com leitor de tela |
| Git e GitHub | Versionamento e disponibilização do código |

## 4. Funcionalidades da aplicação

A Livraria Inclusiva oferece um conjunto de funcionalidades que simulam a experiência de utilização de uma plataforma de comércio eletrônico.

### Catálogo de livros

- Visualização de livros disponíveis.
- Exibição de títulos, autores e preços.
- Pesquisa por título ou autor.
- Adição de produtos ao carrinho.

### Carrinho de compras

- Visualização dos produtos selecionados.
- Gerenciamento de quantidades.
- Cálculo de subtotais e valor total.
- Remoção individual de produtos.
- Limpeza do carrinho.

### Navegação

- Navegação entre catálogo e carrinho.
- Gerenciamento das rotas com React Router.
- Estrutura responsiva para diferentes tamanhos de tela.

Os livros e valores apresentados são fictícios e utilizados exclusivamente para fins acadêmicos.

## 5. Publicação

A aplicação Livraria Inclusiva foi publicada na plataforma Vercel, utilizando integração com o repositório GitHub.

**Acesse a aplicação:** https://parada-obrigatoria-02-desenvolvimen.vercel.app

A publicação utiliza o framework Vite, com compilação por meio do comando `npm run build` e disponibilização dos arquivos gerados no diretório `dist`.

O código-fonte está disponível no GitHub:

https://github.com/jvpdsena/Parada-Obrigatoria-02---Desenvolvimento-Fullstack-