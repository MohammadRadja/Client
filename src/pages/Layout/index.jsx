import Navbar from '../../components/molecules/Navbar';
import Footer from '../../components/molecules/Footer';
import PropTypes from 'prop-types';
import { useIsAuthenticated } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';

const Layout = ({ children, privateRoute }) => {
  const isAuth = useIsAuthenticated();
  if (privateRoute && !isAuth()) {
    return <Navigate to={'/login'} replace />;
  }

  return (
    <>
      <Navbar />
      <div className="px-20">
        <div className="min-h-screen py-10">{children}</div>
        <Footer />
      </div>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  privateRoute: PropTypes.bool,
};

export default Layout;
