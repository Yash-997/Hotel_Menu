import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import dishes from '../data/sampleData';
import { useCart } from '../context/CartContext';
const categories = ['All', 'Starters', 'Desserts', 'Beverages'];

export default function Menu() {
  const { addItem } = useCart();
  const [active, setActive] = useState('All');
  const categorized = useMemo(() => {
    const map = { Starters: [], Desserts: [], Beverages: [] };
    dishes.forEach(d => { if (map[d.category]) map[d.category].push(d); });
    return map;
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {categories.map(c => (
          <button key={c} className={`btn ${active === c ? '' : 'secondary'}`} onClick={() => setActive(c)}>{c}</button>
        ))}
      </div>

      {(active === 'All' ? ['Starters', 'Desserts', 'Beverages'] : [active]).map(cat => (
        <section key={cat}>
          <h2 className="section-title">{cat}</h2>
          <div className="grid">
            {categorized[cat].map((dish, idx) => (
              <article className="card" key={dish.id}>
                <img src={dish.image} alt={dish.name} />
                <div className="card-body">
                  <div className="row">
                    <h3 style={{ margin: 0 }}>{dish.name}</h3>
                    <span className="price">₹{dish.price}</span>
                  </div>
                  <div className="row" style={{ justifyContent: 'flex-start', gap: 8 }}>
                    <span className="veg-dot" aria-label="veg" />
                    <small className="desc">{dish.description}</small>
                  </div>
                  <div className="row">
                    <button className="btn" onClick={() => addItem({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, qty: 1 })}>Add</button>
                    <Link className="btn secondary" to={`/dish/${dish.id}`}>View</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}


