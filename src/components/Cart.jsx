import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { brl } from '../products';
export default function Cart(){
 const cart=useSelector(state=>state.cart), dispatch=useDispatch();
 const total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0);
 const count=cart.reduce((sum,item)=>sum+item.quantity,0);
 return <section aria-labelledby="cart-title"><h1 id="cart-title">Meu carrinho</h1>
 {cart.length===0?<p>Seu carrinho está vazio. Acesse o catálogo para adicionar livros.</p>:<>
 <p>{count} {count===1?'exemplar':'exemplares'} no carrinho.</p>
 <ul className="cart-list">{cart.map(item=><li key={item.id} className="cart-item"><div><h2>{item.name}</h2><p>Quantidade: {item.quantity}</p><p>Subtotal: {brl(item.price*item.quantity)}</p></div><button className="secondary" aria-label={`Remover ${item.name} do carrinho`} onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:item})}>Remover</button></li>)}</ul>
 <p className="total">Total: {brl(total)}</p><button className="secondary" onClick={()=>dispatch({type:'CLEAR_CART'})}>Esvaziar carrinho</button>
 </>}
 </section>;
}
