import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    // State to track form inputs and validation
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // State to track validation errors
    const [errors, setErrors] = useState({
        name: '',
        email: '',
    });

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // This is where logic would go to send data to API or external service (e.g. email) which is not currently implemented
        console.log(formData);
    };

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear validation error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    // Function to validate email format
    const validateEmail = (email) => {
        // Regular expression for a simple email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Function to handle input blur (validation)
    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        if (value.trim() === '' && name !== 'message') {
            setErrors({
                ...errors,
                [name]: 'This field is required',
            });
        } else if (name === 'email' && !validateEmail(value)) {
            setErrors({
                ...errors,
                email: 'Invalid email address',
            });
        }
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>Email: email@placeholder.com</p>
            <p>Phone: (123) 456-7890</p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                    <p className="error">{errors.name}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                    />
                    <p className="error">{errors.email}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
