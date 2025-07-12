import React, { useState } from 'react';
import { User, Mail } from 'lucide-react';
import { LuMessageSquareShare } from "react-icons/lu";
import { FaRegCommentDots } from 'react-icons/fa';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <User className="w-5 h-5" />
          </div>
          <input
            type="text"
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.name && (
             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
           )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <Mail className="w-5 h-5" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 text-gray-400">
            <FaRegCommentDots className="w-5 h-5" />
          </div>
          <textarea
            id="message"
            
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            rows={4}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
      >
        Send Message
        <LuMessageSquareShare className="w-5 h-5" />
      </button>

      {/* Status Message */}
      {status === 'success' && (
        <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
      )}
    </form>
  );
}
