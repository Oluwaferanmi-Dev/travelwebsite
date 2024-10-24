"use client";

import { FC, FormEvent, useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const ContactUs: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [statusTimeout, setStatusTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      if (statusTimeout) clearTimeout(statusTimeout);
      const timeout = setTimeout(() => setStatus(''), 3000);
      setStatusTimeout(timeout);
    } else {
      setStatus('Failed to send message.');

      if (statusTimeout) clearTimeout(statusTimeout);
      const timeout = setTimeout(() => setStatus(''), 3000);
      setStatusTimeout(timeout);
    }
  };

  useEffect(() => {
    return () => {
      if (statusTimeout) clearTimeout(statusTimeout);
    };
  }, [statusTimeout]);

  return (
    <>
      <Header />
      <main className="py-16 px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-teal-500 focus:border-teal-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-teal-500 focus:border-teal-500"
              rows={6}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition border-2 border-teal-600 hover:border-teal-700"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-sm font-semibold">{status}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
