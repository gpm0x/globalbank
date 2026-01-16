import React, { useState, useCallback } from 'react';
import { Input, Select, Button, Card } from '@components/ui';
import { motion } from 'framer-motion';
import contactData from '@data/contact.json';

/**
 * Contact form section with form fields - DUMMY FORM (non-functional)
 */
function ContactFormSection() {
  const { contact, form } = contactData;
  const [formData, setFormData] = useState({});

  const handleInputChange = useCallback((e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }, [formData]);

  return (
    <section className="pt-20 lg:pt-24 pb-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -m-8">
          {/* Text side */}
          <div className="w-full lg:w-1/2 p-8">
            <div className="md:max-w-md">
              <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
                {contact.subtitle}
              </span>
              <h1 className="font-heading mb-6 text-6xl md:text-7xl text-white tracking-tighter">
                {contact.title}
              </h1>
              <p className="text-white text-opacity-60">
                {contact.description}
              </p>
            </div>
          </div>
          {/* Form & Info side */}
          <div className="w-full lg:w-1/2 p-8 space-y-8">
            {/* Glassmorphic Form */}
            <motion.div
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-wrap -m-3">
                  {form.fields.map((field) => (
                    <motion.div
                      key={field.name}
                      className="w-full sm:w-1/2 p-3"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={handleInputChange}
                      />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <Select
                    name="location"
                    onChange={handleInputChange}
                    placeholder="Selecione a Localização"
                    options={form.locationOptions}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 transition-all"
                >
                  {form.submitText}
                </Button>
              </form>
            </motion.div>

            {/* Contact info & map */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-white">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone-alt"></i>
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-envelope"></i>
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{contact.address}</span>
                </div>
              </div>
              <div className="mt-4 aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-46.633309!3d-23.550520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c5c5c5c5c5%3A0x123456789abcdef!2sGlobal%20Bank!5e0!3m2!1sen!2sbr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactFormSection;