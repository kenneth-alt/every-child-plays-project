import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/users', {
      username,
      email,
      password,
    })
    .then(response => {
      console.log(response.data);
      setUsername('');
      setEmail('');
      setPassword('');
    })
    .catch(error => console.error(error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} required />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
