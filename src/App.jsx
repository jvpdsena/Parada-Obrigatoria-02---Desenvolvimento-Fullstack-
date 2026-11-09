import React from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
function PageContent(){
 const location=useLocation(), mainRef=useRef(null);
 useEffect(()=>{document.title=(location.pathname==='/cart'?'Carrinho':'Catálogo')+' | Livraria Inclusiva';mainRef.current?.focus();},[location.pathname]);
 return <main id="conteudo" ref={mainRef} tabIndex="-1"><Routes><Route path="/" element={<ProductList/>}/><Route path="/cart" element={<Cart/>}/><Route path="*" element={<section><h1>Página não encontrada</h1><p>Verifique o endereço ou <Link to="/">volte ao catálogo</Link>.</p></section>}/></Routes></main>;
}
export default function App(){
 const count=useSelector(state=>state.cart.reduce((n,item)=>n+item.quantity,0));
 return <><a className="skip-link" href="#conteudo">Pular para o conteúdo principal</a>
 <header className="site-header"><div className="header-inner"><Link className="brand" to="/" aria-label="Livraria Inclusiva, ir para o catálogo">Livraria Inclusiva</Link><nav aria-label="Navegação principal"><NavLink to="/" end>Catálogo</NavLink><NavLink to="/cart">Carrinho ({count})</NavLink></nav></div></header>
 <PageContent/><footer><p>Livraria Inclusiva — projeto acadêmico de acessibilidade web.</p></footer></>;
}
