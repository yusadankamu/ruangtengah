import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-sora text-sm mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-sora text-sm mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-sora text-sm mb-1">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black/5 resize-none"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-black text-white font-sora py-3 rounded-lg flex items-center justify-center gap-2"
      >
        Send Message
        <Send className="h-4 w-4" />
      </motion.button>
    </form>
  );
};

export default ContactForm;
