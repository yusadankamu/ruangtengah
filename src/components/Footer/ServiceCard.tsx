import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl"
    >
      <Icon className="h-8 w-8 mb-4 text-black" />
      <h3 className="text-xl font-inter font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 font-sora">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;