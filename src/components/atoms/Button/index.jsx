import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ children, href }) => {
  return (
    <Link
      to={href}
      className="text-white block me-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {children}
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;
