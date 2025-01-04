import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white font-inter mb-6">
            Transform Your Space Into
            <span className="block">A Work of Art</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 font-sora mb-8">
            We create stunning interior designs that reflect your personality
            and elevate your lifestyle.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-full font-sora flex items-center space-x-2 hover:bg-gray-100 transition-colors"
          >
            <span>Explore Our Work</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
