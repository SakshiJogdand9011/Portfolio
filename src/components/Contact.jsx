import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };

    emailjs
      .send(
        'service_p3oaep2', // Replace with your service ID
        'template_52mpob9', // Replace with your template ID
        templateParams,
        'g4WStQssXDjULGIDV' // Replace with your user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setIsSubmitting(false);
          setIsSent(true);
        },
        (err) => {
          console.log('FAILED...', err);
          setError('Failed to send the message. Please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-8 text-center text-indigo-500">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-center mb-10 text-gray-400">
          If you’d like to discuss a project, collaboration, or just say hello, fill out the form below, and I’ll get back to you!
        </p>
        <div className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          {isSent && (
            <p className="text-green-500 text-center mb-4">Your message has been sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-transparent rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-transparent rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full px-4 py-2 border border-transparent rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-lg text-sm font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
