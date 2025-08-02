import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup form submitted:', form);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">
          Signup
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login" className="text-green-600">Login</Link>
      </p>
    </div>
  );
}
