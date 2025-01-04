import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  href,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md transition-shadow hover:shadow-lg"
    >
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-inter font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 font-sora mb-4 line-clamp-2">
          {description}
        </p>
        <a
          href={href}
          className="inline-flex items-center font-sora text-black hover:gap-2 transition-all"
        >
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
