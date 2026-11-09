import { createStore } from 'redux';
const initialState = { cart: [] };
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = action.payload;
      const existing = state.cart.find(item => item.id === product.id);
      return { ...state, cart: existing
        ? state.cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...state.cart, { ...product, quantity: 1 }] };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
    case 'CLEAR_CART': return { ...state, cart: [] };
    default: return state;
  }
}
export const store = createStore(cartReducer);
