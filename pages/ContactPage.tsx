import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <section className="py-20 bg-viper-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-teko font-bold text-white mb-4 uppercase">Get In Touch</h1>
          <p className="text-gray-400 mb-10">
            Have questions about our products, an order, or just want to say hi? Drop us a line below.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
