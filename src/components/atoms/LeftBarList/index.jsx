import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';


const LeftSidebarLink = ({ icon, text, to }) => {

  LeftSidebarLink.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };

  //Navigasi Icon dan Hover
  const [isHovered, setIsHovered] = useState(false);
  const handleLinkClick = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
  <Link to={to}>
    <a 
    onClick={handleLinkClick} 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={handleMouseLeave}
    className={`flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer 
    ${isHovered ? '' : ''}`}
    style={{ color: isHovered ? 'blue' : 'inherit' }}
    >
    {icon && (
          <span className={`text-xl ${isHovered ? 'text-blue-500' : ''}`}>
            {icon}
          </span>
        )}
        <h1 className={`text-[16px] font-medium ${isHovered ? 'text-blue-500' : ''}`}>
          {text}
        </h1>
    </a>
  </Link>
  );
};

export default LeftSidebarLink;
