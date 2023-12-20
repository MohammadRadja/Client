import PropTypes from 'prop-types';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};


Spinner.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
  };

export default Spinner;