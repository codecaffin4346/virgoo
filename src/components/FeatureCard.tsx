
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  iconColor?: string;
  bgColor?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link,
  iconColor = "text-primary",
  bgColor = "bg-white"
}: FeatureCardProps) => {
  return (
    <Link to={link} className="block group">
      <div className={`feature-card ${bgColor} rounded-xl p-6 shadow-md border border-gray-100 h-full`}>
        <div className={`${iconColor} bg-opacity-10 p-3 rounded-full inline-flex items-center justify-center mb-4`}>
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
