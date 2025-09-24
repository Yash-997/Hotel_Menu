import React from 'react';
import dishes from '../data/sampleData';

export default function Admin() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert('Dish submitted (front-end only)');
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(window.location.origin + '/')}`;

  return (
    <section className="admin">
      <h2 className="section-title">Admin Panel</h2>
      <div className="admin-grid">
        <form className="form" onSubmit={onSubmit}>
          <h3>Add Dish</h3>
          <div className="form-row">
            <label>Name</label>
            <input required placeholder="Dish name" />
          </div>
          <div className="form-row">
            <label>Price (₹)</label>
            <input required type="number" min="0" placeholder="Price" />
          </div>
          <div className="form-row">
            <label>Category</label>
            <select defaultValue="Mains">
              <option>Starters</option>
              <option>Mains</option>
              <option>Desserts</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-row">
            <label>Description</label>
            <textarea rows={3} placeholder="Short description" />
          </div>
          <div className="form-row">
            <label>Image Upload</label>
            <input type="file" accept="image/*" disabled />
            <small className="meta">Upload disabled (demo). Use public/images instead.</small>
          </div>
          <button className="btn" type="submit">Add Dish</button>
        </form>

        <div>
          <h3>Sample Dishes</h3>
          <div className="dish-list">
            {dishes.slice(0, 6).map(d => (
              <div className="dish-row" key={d.id}>
                <img src={d.image} alt={d.name} width={64} height={64} style={{ borderRadius: 8, objectFit: 'cover' }} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span className="veg-dot" />
                    <strong>{d.name}</strong>
                  </div>
                  <div className="desc">{d.category} • ₹{d.price}</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn secondary" onClick={() => alert('Edit (demo)')}>Edit</button>
                  <button className="btn secondary" onClick={() => alert('Delete (demo)')}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div className="qr">
            <h3>Scan to visit Home</h3>
            <img src={qrUrl} alt="QR to Home" width={160} height={160} />
          </div>
        </div>
      </div>
    </section>
  );
}


