import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic, such as sending to a backend API
    console.log('Form data:', formData);
    alert('Thank you for your message! I will reply as soon as possible.');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-primary text-light py-16">
      <div className="max-w-[1000px] mx-auto p-4">
        <motion.div
          className="pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Contact Me</p>
          <p className="py-4">Please fill out the form below to contact me, or reach me directly through the following methods</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-tertiary text-2xl" />
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <p className="text-gray-400">1994574953@qq.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-tertiary text-2xl" />
              <div>
                <h4 className="text-xl font-semibold">Phone</h4>
                <p className="text-gray-400">+86 13916007114</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-tertiary text-2xl" />
              <div>
                <h4 className="text-xl font-semibold">Address</h4>
                <p className="text-gray-400">No. 2-301, Lane 680, Shuicheng Road, Changning District, Shanghai</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="p-3 bg-dark border border-gray-700 rounded-md focus:outline-none focus:border-tertiary text-light"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="p-3 bg-dark border border-gray-700 rounded-md focus:outline-none focus:border-tertiary text-light"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="6"
              className="p-3 bg-dark border border-gray-700 rounded-md focus:outline-none focus:border-tertiary text-light resize-none"
            ></textarea>
            <button
              type="submit"
              className="text-light bg-tertiary hover:bg-secondary duration-300 px-4 py-3 rounded-md font-medium"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;