import React, { useState } from 'react';

export default function AdminPage() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    const payload = { name: name.trim(), price: Number(price) };
    console.log('New dish added (demo only):', payload);
    alert(`Dish added (demo): ${payload.name} - ₹${payload.price}`);
    setName('');
    setPrice('');
  };

  return (
    <section className="admin" style={{ maxWidth: 480, margin: '2rem auto' }}>
      <h2 className="section-title">Admin Page</h2>
      <form className="form" onSubmit={handleAdd}>
        <div className="form-row">
          <label htmlFor="dish-name">Dish Name</label>
          <input
            id="dish-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter dish name"
            required
          />
        </div>
        <div className="form-row">
          <label htmlFor="dish-price">Price (₹)</label>
          <input
            id="dish-price"
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            required
          />
        </div>
        <button className="btn" type="submit">Add Dish</button>
      </form>
    </section>
  );
}
