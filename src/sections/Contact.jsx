import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaViber, FaMapMarkerAlt } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import contactBg from '../assets/contact-bg.png';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    enquiryType: 'General Inquiry',
    message: '',
    honeypot: '' // Spam protection
  });

  const [errors, setErrors] = React.useState({});
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [sending, setSending] = React.useState(false);

  // Validation
  const validate = () => {
    let tempErrors = {};

    // Name: Only letters and space
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      tempErrors.name = "Name should only contain letters and spaces";
    }

    // Email: Standard valid email
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    // Phone: Exact 10 digits
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      tempErrors.phone = "Phone number must be between 10 to 15 digits";
    }

    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  // Form submit handler using Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🛡️ Honeypot Check (Spam protection)
    if (formData.honeypot) {
      console.log("Spam detected!");
      return;
    }

    if (!validate()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setSending(true);
    const loadingToast = toast.loading("Sending your message...");

    try {
      // Prepare data for Web3Forms
      // Get your free access key at: https://web3forms.com/
      const web3Data = {
        access_key: "dfa0bd7e-afa0-400c-86c1-1cb2597f1896", // 🔑 Updated with your key
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        enquiry_type: formData.enquiryType,
        message: formData.message,
        subject: `[${formData.enquiryType}] New Contact from ${formData.name}`,
        from_name: "Portfolio Website",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(web3Data),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent! I'll get back to you soon.", { id: loadingToast });
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', address: '', enquiryType: 'General Inquiry', message: '', honeypot: '' });
        setTimeout(() => setShowSuccess(false), 8000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }

    } catch (error) {
      console.error("Submission Error:", error);
      toast.error(`Error: ${error.message}`, { id: loadingToast });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-container contact-section">
      <div className="container contact-container">
        {/* Contact Info */}
        <div className="contact-text">
          <motion.h2 
            className="section-title" 
            style={{ textAlign: 'left' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2 }}
          >
            I'm currently available for freelance work or internship opportunities.
            If you have a project that needs some creative touch, or just want to say hi, my inbox is always open.
          </motion.p>

          <div className="contact-info">
            {[
              { href: "mailto:aakashbc24@gmail.com", icon: <FaEnvelope />, title: "Email", text: "aakashbc24@gmail.com" },
              { href: "tel:+9779864148519", icon: <FaPhoneAlt />, title: "Phone", text: "9864148519" },
              { href: "viber://chat?number=%2B9779864148519", icon: <FaViber />, title: "Viber", text: "9864148519" },
              { href: "https://www.google.com/maps/search/?api=1&query=Kathmandu,+Nepal", icon: <FaMapMarkerAlt />, title: "Location", text: "Kathmandu, Nepal" }
            ].map((item, index) => (
              <motion.a 
                key={index}
                href={item.href} 
                className="info-item" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="icon-box">{item.icon}</div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.form 
          className="contact-form" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          <Toaster position="top-right" reverseOrder={false} />
          <h3 className="form-title">Let's get connected</h3>

          {/* 🛡️ Honeypot field (hidden from users) */}
          <div className="hp-field" style={{ display: 'none' }}>
            <input
              type="text"
              name="honeypot"
              tabIndex="-1"
              autocomplete="off"
              value={formData.honeypot}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name <span className="required">*</span></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error-input' : ''}
                required
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error-input' : ''}
                required
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number <span className="required">*</span></label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="98XXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error-input' : ''}
                required
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="enquiryType">Enquiry Type</label>
              <select
                name="enquiryType"
                id="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Project Proposal">Project Proposal</option>
                <option value="Freelance Work">Freelance Work</option>
                <option value="Job Opportunity">Job Opportunity</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message <span className="required">*</span></label>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error-input' : ''}
              required
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>

          {showSuccess && (
            <div className="success-message" style={{ marginTop: '1.5rem', marginBottom: '0' }}>
              Thank you! Your message has been sent successfully. <br />
              <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>I usually respond within 2 hours to 1 day.</span>
            </div>
          )}
        </motion.form>
      </div>

      {/* Styles */}
      <style>{`
        .contact-section { background-image: url(${contactBg}); background-size: cover; background-position: center; background-attachment: fixed; position: relative; }
        .contact-section::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(5,5,5,0.85); z-index: 0; }
        .contact-container { position: relative; z-index: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        .contact-text p { color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem; }
        .contact-info { display: grid; gap: 2rem; }
        .info-item { display: flex; align-items: center; gap: 1rem; padding: 0.8rem 1.2rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--border-radius-sm); transition: all 0.3s ease; }
        .info-item:hover { background: rgba(255,255,255,0.05); border-color: var(--accent-primary); transform: translateY(-3px); }
        .icon-box { font-size: 1.4rem; color: var(--accent-primary); display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background: rgba(255,255,255,0.05); border-radius: 50%; transition: all 0.3s ease; flex-shrink: 0; }
        .info-item:hover .icon-box { background: var(--accent-primary); color: white; box-shadow: 0 0 20px var(--accent-glow); transform: scale(1.1); }
        .contact-form { background: var(--bg-card); padding: 2.5rem; border-radius: var(--border-radius-lg); border: 1px solid rgba(255,255,255,0.05); }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; margin-bottom: 0.5rem; color: var(--text-secondary); font-size: 0.9rem; }
        .form-group input, .form-group textarea, .form-group select { width: 100%; padding: 0.8rem; background: var(--bg-primary); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--border-radius-sm); color: var(--text-primary); font-family: var(--font-sans); transition: 0.2s; }
        .form-group select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 0.8rem center; background-size: 1em; padding-right: 2.5rem; }
        .form-group input:focus, .form-group textarea:focus, .form-group select:focus { outline: none; border-color: var(--accent-primary); box-shadow: 0 0 0 2px var(--accent-glow); }
        .form-title { font-family: 'Dancing Script', cursive; font-size: 2.5rem; text-align: center; margin-bottom: 2rem; background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary)); -webkit-background-clip: text; color: transparent; text-shadow: 2px 2px 10px rgba(109, 40, 217, 0.3); }
        .form-group input.error-input, .form-group textarea.error-input { border-color: var(--error); }
        .error-text { color: var(--error); font-size: 0.8rem; margin-top: 0.3rem; display: block; }
        .required { color: var(--error); }
        .success-message { background: rgba(34,197,94,0.1); color: var(--success); padding: 1rem; border-radius: var(--border-radius-sm); border: 1px solid var(--success); margin-bottom: 2rem; text-align: center; font-weight: 600; line-height: 1.4; }
        @media (max-width: 1024px) {
          .contact-container {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .contact-text {
            text-align: center;
          }

          .section-title {
            text-align: center !important;
          }

          .info-item {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .contact-form {
            padding: 1.5rem;
          }

          .form-title {
            font-size: 2rem;
          }

          .info-item {
            flex-direction: column;
            text-align: center;
            padding: 1rem;
          }

          .icon-box {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
