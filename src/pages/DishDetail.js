import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dishes from '../data/sampleData';
import { useCart } from '../context/CartContext';
import ModelPreview from '../components/ModelPreview';

export default function DishDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const dish = useMemo(() => dishes.find(d => d.id === id), [id]);

  if (!dish) {
    return (
      <div>
        <p>Dish not found.</p>
        <button className="btn secondary" onClick={() => navigate('/menu')}>Back to Menu</button>
      </div>
    );
  }

  return (
    <section className="detail">
      <div>
        <ModelPreview src={''} poster={dish.image} alt={dish.name} style={{ width: '100%', borderRadius: 12 }} />
      </div>
      <div>
        <div className="badge"><span className="veg-dot" /> Veg</div>
        <h2>{dish.name}</h2>
        <p className="meta">Category: {dish.category}</p>
        <p>{dish.description}</p>
        <p className="price">Price: ₹{dish.price}</p>
        <p className="meta">Ingredients: Tomato, Onion, Spices, Herbs (sample)</p>
        <p className="meta">Preparation time: 20–30 mins</p>
        <p className="meta">Availability: Available</p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn" onClick={() => { addItem({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, qty: 1 }); alert('Added to cart'); }}>Add to Cart</button>
          <button className="btn secondary" onClick={() => navigate('/menu')}>Back</button>
        </div>
      </div>
    </section>
  );
}


