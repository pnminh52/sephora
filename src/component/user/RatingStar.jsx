import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating); 
  const halfStar = rating % 1 !== 0; 

  return (
    <div className="flex items-center w-16">
      {Array.from({ length: fullStars }, (_, index) => (
        <FaStar key={index} className="text-black" style={{ strokeWidth: 0.1 }} />
      ))}
      {halfStar && <FaStarHalfAlt className="text-black" style={{ strokeWidth: 0.1 }} />}
      {Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
        <FaRegStar key={index + fullStars + (halfStar ? 1 : 0)} className="text-black" style={{ strokeWidth: 0.1 }} />
      ))}
    </div>
  );
};

export default RatingStars;
