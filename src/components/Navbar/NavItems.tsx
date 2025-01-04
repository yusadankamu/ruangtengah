import { motion } from "framer-motion";

interface NavItemsProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

const navItems = ["Home", "Projects", "Services", "About", "Contact"];

const NavItems: React.FC<NavItemsProps> = ({ isMobile, onItemClick }) => {
  if (isMobile) {
    return (
      <div className="flex flex-col py-4 px-6 bg-white/90 backdrop-blur-md rounded-2xl">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-sora text-gray-600 hover:text-black py-3 px-4 transition-colors rounded-lg hover:bg-gray-50"
            onClick={onItemClick}
          >
            {item}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="font-sora text-gray-600 hover:text-black transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.a>
      ))}
    </div>
  );
};

export default NavItems;
