import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
      await axios.post('http://localhost:5005/api/contact-us/new', formData);

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
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

    if (!formData.email) {
      errors.email = 'Email is required';
    }

    if (!formData.subject) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitSuccess && <div className="alert alert-success" style={{ color: 'green' }}>Your message has been sent!</div>}
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
        />
        {formErrors.name && <span style={{ color: 'red' }}>{formErrors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />
        {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="form-control"
        />
        {formErrors.subject && <span style={{ color: 'red' }}>{formErrors.subject}</span>}
      </div>
      <div>
        <label htmlFor="message">Your message:</label>
        <br />
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-control"
          rows="8"
        ></textarea>
        {formErrors.message && <span style={{ color: 'red' }}>{formErrors.message}</span>}
      </div>
      <button type="submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
 

  );
};

export default Contact;
