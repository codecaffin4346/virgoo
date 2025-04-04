
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

const TestimonialCard = ({ quote, name, title, imageSrc }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <div className="mb-4">
        <svg width="32" height="32" viewBox="0 0 32 32" className="text-primary/30 fill-current">
          <path d="M10.7,12.5c-2.3,0-4.1,1.8-4.1,4.1c0,2.3,1.8,4.1,4.1,4.1c2.3,0,4.1-1.8,4.1-4.1C14.9,14.3,13,12.5,10.7,12.5z M10.7,19c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4C13.1,17.9,12.1,19,10.7,19z M21.3,12.5c-2.3,0-4.1,1.8-4.1,4.1c0,2.3,1.8,4.1,4.1,4.1c2.3,0,4.1-1.8,4.1-4.1C25.5,14.3,23.6,12.5,21.3,12.5z M21.3,19c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4c1.3,0,2.4,1.1,2.4,2.4C23.7,17.9,22.7,19,21.3,19z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img
          src={imageSrc}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-gray-600 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
