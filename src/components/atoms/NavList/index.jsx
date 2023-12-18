import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavList = ({ href, children }) => {
  return (
    <li>
      <Link
        to={href}
        className={
          'block py-2 px-3 text-black hover:text-blue-700 bg-blue-700 rounded md:bg-transparent  md:p-0 md:dark:text-blue-500'
        }
        aria-current="page"
      >
        {children}
      </Link>
    </li>
  );
};
NavList.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavList;
