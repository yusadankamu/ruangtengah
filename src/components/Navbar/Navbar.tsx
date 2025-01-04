import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavItems from "./NavItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="backdrop-blur-md bg-white/70 px-6 md:px-12 py-4 rounded-full mx-4 md:mx-12 shadow-lg">
        <div className="flex items-center justify-between">
          <motion.h1
            className="text-2xl font-bold font-inter"
            whileHover={{ scale: 1.05 }}
          >
            Ruang Tengah
          </motion.h1>

          <NavItems />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 mx-4 md:mx-12"
          >
            <NavItems isMobile onItemClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
