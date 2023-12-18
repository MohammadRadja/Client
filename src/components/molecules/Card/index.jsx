import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ image, title, date, description, id }) => {
  return (
    <div className="shadow">
      <img src={image} alt="news-image" className="w-full h-56 object-cover" />
      <div className="flex flex-col gap-3 m-5">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-slate-500 line-clamp-3">{description}</p>
      </div>
      <div className="flex justify-between m-5">
        <p className="text-slate-500">{date}</p>
        <Link to={`/blog/${id}`} className="text-black font-bold">
          Read more
        </Link>
      </div>
    </div>
  );
};
Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};

export default Card;
