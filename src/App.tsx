import { motion } from "motion/react"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Hero />
      <Footer />
    
    </motion.div>
  );
}

export default App
