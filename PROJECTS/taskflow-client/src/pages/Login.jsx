import React,  { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        // Here you would typically handle the login logic, e.g., API call
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="p-4">
                <input
                name='username'
                value={form.username}
                onChange={handleChange}
                placeholder='Username'
                />

                <input 
                name='password'
                type='password'
                value={form.password}
                onChange={handleChange}
                placeholder='Password'
                />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">SignUp</Link>
            </p>
        </div>
    );
}