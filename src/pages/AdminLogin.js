import React, { useState } from 'react';

export default function AdminLogin({ onSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    if (username === 'admin' && password === '1234') {
      setError('');
      if (typeof onSuccess === 'function') onSuccess();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <section className="admin-login" style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2 className="section-title">Admin Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>

        {error && (
          <div style={{ color: 'crimson', marginBottom: '0.5rem', fontWeight: 500 }}>
            {error}
          </div>
        )}

        <button className="btn" type="submit">Login</button>
      </form>
    </section>
  );
}
