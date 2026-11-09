export const products = [
  {id:1,name:'Dom Casmurro',author:'Machado de Assis',price:29.9,description:'Romance clássico brasileiro sobre memória, ciúme e relações humanas.',cover:'📘'},
  {id:2,name:'O Cortiço',author:'Aluísio Azevedo',price:34.9,description:'Romance naturalista que retrata a vida coletiva em um cortiço.',cover:'📗'},
  {id:3,name:'Memórias Póstumas de Brás Cubas',author:'Machado de Assis',price:39.9,description:'Narrativa irônica contada por um narrador que já morreu.',cover:'📙'},
  {id:4,name:'Iracema',author:'José de Alencar',price:24.9,description:'Romance indianista ambientado no território brasileiro.',cover:'📕'}
];
export const brl = amount => new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(amount);
