import React from "react";
import { motion } from "framer-motion";
import {
  Paintbrush,
  Sofa,
  Layout,
  Lightbulb,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import ProjectCard from "../Footer/ProjectCard";
import ServiceCard from "../Footer/ServiceCard"; 
import ContactForm from "./ContactForm";

const projects = [
  {
    title: "Modern Minimalist Villa",
    description:
      "A stunning transformation of a traditional villa into a modern minimalist haven.",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    href: "#",
  },
  {
    title: "Urban Apartment",
    description:
      "Contemporary design meets functionality in this urban living space.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    href: "#",
  },
  {
    title: "Luxury Office Space",
    description:
      "Premium office design that promotes productivity and well-being.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    href: "#",
  },
];

const services = [
  {
    title: "Interior Design",
    description:
      "Full-service interior design for residential and commercial spaces.",
    icon: Paintbrush,
  },
  {
    title: "Furniture Selection",
    description: "Curated furniture selection to match your style and needs.",
    icon: Sofa,
  },
  {
    title: "Space Planning",
    description: "Optimal space utilization and layout planning.",
    icon: Layout,
  },
  {
    title: "Concept Development",
    description: "Creative concept development tailored to your vision.",
    icon: Lightbulb,
  },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Projects Section */}
        <section className="mb-24" aria-labelledby="projects-title">
          <div className="text-center mb-12">
            <h2
              id="projects-title"
              className="text-3xl font-inter font-bold mb-4"
            >
              Featured Projects
            </h2>
            <p className="text-gray-600 font-sora max-w-2xl mx-auto">
              Explore our latest interior design projects, where creativity
              meets functionality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#all-projects"
              className="inline-block bg-black text-white font-sora px-8 py-4 rounded-full"
            >
              View All Projects
            </motion.a>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-24" aria-labelledby="services-title">
          <div className="text-center mb-12">
            <h2
              id="services-title"
              className="text-3xl font-inter font-bold mb-4"
            >
              Our Services
            </h2>
            <p className="text-gray-600 font-sora max-w-2xl mx-auto">
              Comprehensive interior design services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        {/* About & Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* About Section */}
          <section aria-labelledby="about-title">
            <h2 id="about-title" className="text-3xl font-inter font-bold mb-6">
              About Ruang Tengah
            </h2>
            <p className="text-gray-600 font-sora mb-6">
              We are a passionate team of interior designers dedicated to
              creating beautiful, functional spaces that inspire and enhance
              your daily life.
            </p>
            <blockquote className="border-l-4 border-black pl-6 mb-8">
              <p className="text-lg font-sora italic">
                "Our mission is to transform spaces into extraordinary
                experiences, where design meets functionality and beauty finds
                its purpose."
              </p>
            </blockquote>
            <ul className="space-y-4 font-sora text-gray-600">
              <li>✓ Over 100+ Projects Completed</li>
              <li>✓ Award-winning Design Team</li>
              <li>✓ Sustainable Design Practices</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section aria-labelledby="contact-title">
            <h2
              id="contact-title"
              className="text-3xl font-inter font-bold mb-6"
            >
              Get in Touch
            </h2>
            <div className="mb-8">
              <p className="font-sora mb-4">
                <strong>Address:</strong>
                <br />
                123 Design Street, Creative District
                <br />
                Jakarta, Indonesia 12345
              </p>
              <p className="font-sora mb-4">
                <strong>Hours:</strong>
                <br />
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
              </p>
              <div className="mb-6">
                <a
                  href="tel:+1234567890"
                  className="font-sora block hover:text-black transition-colors"
                >
                  Phone: (123) 456-7890
                </a>
                <a
                  href="mailto:hello@ruangtengah.com"
                  className="font-sora block hover:text-black transition-colors"
                >
                  Email: hello@ruangtengah.com
                </a>
              </div>
            </div>
            <ContactForm />
          </section>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sora text-gray-600">
              © {new Date().getFullYear()} Ruang Tengah. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
