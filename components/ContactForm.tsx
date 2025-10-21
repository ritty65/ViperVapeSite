import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }
    // Simulate form submission
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-viper-gray border border-viper-gold/20 rounded-lg p-8 shadow-2xl">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-viper-dark border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-viper-gold transition"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-viper-dark border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-viper-gold transition"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2 font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-viper-dark border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-viper-gold transition"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-viper-gold text-viper-dark font-bold text-lg py-3 px-12 rounded-full transition-all duration-300 transform hover:scale-105 glow-gold-hover"
          >
            Send Message
          </button>
        </div>
        {status && <p className="text-center mt-4 text-viper-cyan">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
