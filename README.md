# Livraria Inclusiva — Atividade de Acessibilidade Web

## Objetivo
Implementar uma livraria em React com Redux e React Router e aplicar melhorias de acessibilidade alinhadas às WCAG 2.2, especialmente critérios de nível A e AA.

## Requisitos
Node.js 18+ e npm.

## Execução
```bash
npm install
npm run dev
```
Abra o endereço informado pelo Vite (normalmente http://localhost:5173).

## Funcionalidades
- Catálogo de livros, pesquisa por título/autor, adição ao carrinho.
- Carrinho com quantidade, subtotal, total, remoção e limpeza.
- Navegação entre páginas via React Router.
- Estado centralizado com Redux.

## Melhorias implementadas
| Recurso | Implementação | Critérios WCAG relacionados |
|---|---|---|
| Idioma da página | `lang="pt-BR"` | 3.1.1 |
| Estrutura semântica | `header`, `nav`, `main`, `section`, `footer`, títulos hierárquicos | 1.3.1 |
| Navegação por teclado | Links, campos e botões nativos; link para pular conteúdo | 2.1.1, 2.4.1 |
| Foco visível | Contorno de foco destacado e foco no conteúdo após troca de rota | 2.4.7 |
| Nomes acessíveis | Labels explícitos, `aria-label` em ações contextualizadas | 4.1.2 |
| Texto alternativo | Elementos de capa ilustrativos identificados com `role="img"` e `aria-label` | 1.1.1 |
| Feedback de ações | Região `role="status"` com `aria-live="polite"` | 4.1.3 |
| Contraste | Cores escuras sobre superfícies claras e botões com texto branco | 1.4.3 (a verificar em auditoria) |
| Adaptação | Grid responsivo e controles com altura mínima de 44px | 1.4.10, 2.5.8 |
| Movimento reduzido | Transições condicionadas à preferência do sistema | 2.3.3 (boa prática) |
| Título por página | Atualização de `document.title` na mudança de rota | 2.4.2 |

**Observação:** a presença de uma técnica não comprova conformidade integral com a WCAG. É necessário testar a aplicação.

## Auditoria Lighthouse (a realizar localmente)
1. Execute `npm install` e `npm run dev`.
2. Abra a aplicação no Chrome e pressione F12.
3. Acesse Lighthouse > Accessibility > Analyze page load.
4. Registre a pontuação e os problemas apontados para a rota `/`.
5. Repita na rota `/cart` com e sem itens.
6. Faça testes manuais com Tab, Shift+Tab, Enter e leitor de tela (NVDA, por exemplo).
7. Guarde capturas do relatório inicial e final; se necessário, crie uma versão base sem as melhorias para comparação legítima.

## Limitações
- Os livros e valores são fictícios para demonstração; não há checkout ou persistência após atualizar a página.
- Não foi executado Lighthouse neste ambiente. Não são fornecidas pontuações inventadas.
- As capturas do enunciado mostram apenas parte da Etapa 2; requisitos adicionais devem ser conferidos no AVA.
