import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmitting(true);
    try {
      await axios.post('http://localhost:5005/api/users/register', formData);

      setSubmitSuccess(true);
      setFormData({
        name: '',
        username: '',
        email: '',
        password: ''
      });
      setFormErrors({});
    } catch (error) {
      alert('Something went wrong. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.username) {
      errors.username = 'Username is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  return (
    <div className="register-form">
      <h2>Create an Account</h2>
      {submitSuccess && <div className="alert alert-success" style={{ color: 'green'}}>Your account has been created!</div>}
      <form className="register" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
          {formErrors.name && <div className="error-message" style={{ color: 'red' }}>{formErrors.name}</div>}
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} />
          {formErrors.username && <div className="error-message" style={{ color: 'red' }}>{formErrors.username}</div>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          {formErrors.email && <div className="error-message" style={{ color: 'red' }}>{formErrors.email}</div>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
          {formErrors.password && <div className="error-message" style={{ color: 'red' }}>{formErrors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
