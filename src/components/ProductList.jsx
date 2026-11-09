import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { products, brl } from '../products';
export default function ProductList(){
  const dispatch = useDispatch();
  const [message,setMessage] = useState('');
  const [search,setSearch] = useState('');
  const filtered = products.filter(p => `${p.name} ${p.author}`.toLocaleLowerCase('pt-BR').includes(search.toLocaleLowerCase('pt-BR')));
  function add(product){dispatch({type:'ADD_TO_CART',payload:product});setMessage(`${product.name} adicionado ao carrinho.`);}
  return <section aria-labelledby="catalog-title">
    <h1 id="catalog-title">Catálogo de livros</h1>
    <p>Conheça nossos títulos e escolha suas próximas leituras.</p>
    <div className="search"><label htmlFor="book-search">Pesquisar por título ou autor</label><input id="book-search" type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Digite o nome do livro ou autor" /></div>
    <p role="status" aria-live="polite" className="sr-only">{message}</p>
    <p aria-live="polite">{filtered.length} {filtered.length===1?'livro encontrado':'livros encontrados'}</p>
    {filtered.length===0 ? <p>Nenhum livro corresponde à pesquisa.</p> : <ul className="product-grid">{filtered.map(product=><li key={product.id} className="product-card">
      <div className="book-art" role="img" aria-label={`Ilustração decorativa da capa do livro ${product.name}`}>{product.cover}</div>
      <h2>{product.name}</h2><p>Autor: {product.author}</p><p>{product.description}</p><p className="price">{brl(product.price)}</p>
      <button onClick={()=>add(product)} aria-label={`Adicionar ${product.name} ao carrinho`}>Adicionar ao carrinho</button>
    </li>)}</ul>}
  </section>;
}
