import React from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, subtotal, tax, total, increment, decrement, remove, clear } = useCart();

  return (
    <section className="cart">
      {items.length === 0 && (
        <div className="desc">Your cart is empty.</div>
      )}
      {items.map(i => (
        <div className="cart-item" key={i.id}>
          <img src={i.image} alt={i.name} width={64} height={64} style={{ borderRadius: 8, objectFit: 'cover' }} />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="veg-dot" />
              <strong>{i.name}</strong>
            </div>
            <div className="desc">₹{i.price} each</div>
          </div>
          <div style={{ display: 'grid', gap: 6, justifyItems: 'end' }}>
            <div className="qty">
              <button onClick={() => decrement(i.id)}>-</button>
              <span>{i.qty}</span>
              <button onClick={() => increment(i.id)}>+</button>
            </div>
            <div>
              <strong>₹{i.price * i.qty}</strong>
            </div>
            <button className="btn secondary" onClick={() => remove(i.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-total">Subtotal: ₹{subtotal} | Tax (5%): ₹{tax} | Total: ₹{total}</div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        <button className="btn secondary" onClick={clear}>Clear</button>
        <button className="btn" onClick={() => alert('Checkout successful (demo)')}>Checkout</button>
      </div>
    </section>
  );
}


