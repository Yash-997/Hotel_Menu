import React, { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const { item } = action;
      const existing = state.items[item.id];
      const nextQty = existing ? existing.qty + (item.qty || 1) : (item.qty || 1);
      const nextItems = {
        ...state.items,
        [item.id]: { ...item, qty: nextQty }
      };
      return { ...state, items: nextItems };
    }
    case 'INC': {
      const id = action.id;
      const existing = state.items[id];
      if (!existing) return state;
      return { ...state, items: { ...state.items, [id]: { ...existing, qty: existing.qty + 1 } } };
    }
    case 'DEC': {
      const id = action.id;
      const existing = state.items[id];
      if (!existing) return state;
      const nextQty = existing.qty - 1;
      if (nextQty < 1) {
        const next = { ...state.items };
        delete next[id];
        return { ...state, items: next };
      }
      return { ...state, items: { ...state.items, [id]: { ...existing, qty: nextQty } } };
    }
    case 'REMOVE': {
      const id = action.id;
      const next = { ...state.items };
      delete next[id];
      return { ...state, items: next };
    }
    case 'CLEAR':
      return { items: {} };
    default:
      return state;
  }
}

function computeTotals(itemsMap) {
  const items = Object.values(itemsMap);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = +(subtotal * 0.05).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);
  return { items, subtotal, tax, total };
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: {} });

  const value = useMemo(() => {
    const { items, subtotal, tax, total } = computeTotals(state.items);
    return {
      items,
      subtotal,
      tax,
      total,
      addItem: (item) => dispatch({ type: 'ADD', item }),
      increment: (id) => dispatch({ type: 'INC', id }),
      decrement: (id) => dispatch({ type: 'DEC', id }),
      remove: (id) => dispatch({ type: 'REMOVE', id }),
      clear: () => dispatch({ type: 'CLEAR' })
    };
  }, [state.items]);

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}


