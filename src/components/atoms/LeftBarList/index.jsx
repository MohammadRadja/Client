import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

const LeftSidebarLink = ({ icon, text, to }) => {
  LeftSidebarLink.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };

  // Navigasi Icon dan Hover
  const [isHovered, setIsHovered] = useState(false);
  const handleLinkClick = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={to} className={`flex items-center gap-3 w-[300px] py-4 pl-1 cursor-pointer 
      ${isHovered ? '' : ''}`}
      style={{ color: isHovered ? 'blue' : 'inherit' }}
      onClick={handleLinkClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {icon && (
        <span className={`text-xl ${isHovered ? 'text-primary' : ''}`}>
          {icon}
        </span>
      )}
      <h1 className={`text-[16px] font-medium ${isHovered ? 'text-primary' : ''}`}>
        {text}
      </h1>
    </Link>
  );
};

export default LeftSidebarLink;
