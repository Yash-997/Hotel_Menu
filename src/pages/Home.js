import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import dishes from '../data/sampleData';

export default function Home() {
  const navigate = useNavigate();
  const featured = useMemo(() => {
    const ids = ['paneer-kabab', 'tiramisu', 'mango-lassi'];
    return ids.map(id => dishes.find(d => d.id === id)).filter(Boolean);
  }, []);

  return (
    <main>
      <header className="banner home-hero" role="banner" aria-label="Hero">
        <div>
          <h1>Paradise Veg Restaurant</h1>
          <p className="tagline">Pure Vegetarian Delights</p>
          <p>Fresh, flavorful vegetarian cuisine made with seasonal ingredients and a whole lot of care.</p>
          <div className="actions home-cta" aria-label="Primary actions">
            <button className="btn" onClick={() => navigate('/menu')}>View Full Menu</button>
          </div>
        </div>
      </header>

      <section aria-label="Key information" style={{ marginTop: 20 }} className="home-info">
        <div className="grid">
          <article className="card" aria-label="Opening Hours">
            <div className="card-body">
              <h3 style={{ margin: 0 }}>Opening Hours</h3>
              <p className="desc">Mon–Sun: 11:00 AM – 11:00 PM</p>
            </div>
          </article>
          <article className="card" aria-label="Location">
            <div className="card-body">
              <h3 style={{ margin: 0 }}>Location</h3>
              <p className="desc">Shirol, Kolhapur</p>
            </div>
          </article>
          <article className="card" aria-label="Contact">
            <div className="card-body">
              <h3 style={{ margin: 0 }}>Contact</h3>
              <p className="desc">+91-9293949596 • admin@paradiseveg.com</p>
            </div>
          </article>
          <article className="card" aria-label="Cuisine">
            <div className="card-body">
              <h3 style={{ margin: 0 }}>Cuisine</h3>
              <p className="desc">100% Pure Veg • North & South Indian specialties</p>
            </div>
          </article>
        </div>
      </section>

      <section aria-label="Featured dishes" style={{ marginTop: 24 }}>
        <h2 className="section-title">Featured Favourites</h2>
        <div className="grid">
          {featured.map(item => (
            <article className="card" key={item.id} aria-label={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="card-body">
                <div className="row">
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <span className="price">₹{item.price}</span>
                </div>
                <div className="row" style={{ justifyContent: 'flex-start', gap: 8 }}>
                  <span className="veg-dot" aria-hidden />
                  <small className="desc">{item.description}</small>
                </div>
                <div className="row">
                  <span />
                  <Link className="btn secondary" to={/dish/ + item.id}>View</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-label="About" style={{ marginTop: 24 }}>
        <article className="card">
          <div className="card-body">
            <h3 style={{ margin: 0 }}>About Paradise Veg</h3>
            <p className="desc">We are a friendly, family-run restaurant serving time-honored recipes in a cozy space. Our chefs prepare dishes fresh to order using locally sourced vegetables, dairy, and spices. Come by for comforting classics and regional specialties made with care.</p>
          </div>
        </article>
      </section>
    </main>
  );
}


