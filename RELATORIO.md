# Relatório técnico — Acessibilidade da Livraria Online

## 1. Introdução
A atividade propõe a melhoria da acessibilidade de uma livraria online, considerando pessoas que utilizam tecnologias assistivas, navegação por teclado e diferentes tamanhos de tela. O projeto foi desenvolvido com React, Redux e React Router, incorporando técnicas associadas às Web Content Accessibility Guidelines (WCAG).

## 2. Aplicação
A aplicação contém um catálogo com pesquisa e botões de adição, além de um carrinho de compras com remoção de produtos e cálculo de total. O estado do carrinho é controlado pelo Redux e as rotas são gerenciadas pelo React Router.

## 3. Análise dos riscos de acessibilidade na versão base
A implementação simplificada apresentada no enunciado utiliza botões com nomes genéricos, não evidencia um mecanismo para pular a navegação, não demonstra mensagens de atualização do carrinho para leitores de tela e não especifica a estrutura semântica completa, os estilos de foco e o contraste. Esses pontos foram tratados como riscos a corrigir, não como falhas comprovadas por auditoria.

## 4. Melhorias realizadas
Foram incorporados idioma do documento, regiões semânticas, títulos hierárquicos, campo de busca com rótulo, botões com nomes específicos para cada livro, descrição acessível das ilustrações, link para pular diretamente ao conteúdo, indicação visual de foco, mensagens anunciadas por leitores de tela, ajuste responsivo e atualização do título da página na navegação.

## 5. Validação e evidências
**Auditoria ainda não realizada.** Para concluir a avaliação exigida, executar o projeto no Chrome, abrir DevTools > Lighthouse, selecionar Accessibility e gerar os relatórios. Também é necessário testar navegação apenas com teclado e, preferencialmente, com NVDA.

Preencher após testes reais:

| Verificação | Resultado | Evidência |
|---|---|---|
| Lighthouse — catálogo | Pendente | Inserir captura |
| Lighthouse — carrinho | Pendente | Inserir captura |
| Navegação por teclado | Pendente | Inserir captura ou descrição |
| Leitor de tela | Pendente | Inserir descrição |
| Contraste de cores | Pendente | Inserir medição |

## 6. Conclusão
A versão implementada introduz práticas de acessibilidade importantes para reduzir barreiras na navegação e na interação com a livraria. A conformidade completa com as WCAG depende de auditoria automatizada e avaliação manual, ainda pendentes.

## Referências
W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. https://www.w3.org/TR/WCAG22/.

Google. *Lighthouse*. https://developer.chrome.com/docs/lighthouse/overview/.
