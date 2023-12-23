import Navbar from '../../components/molecules/Navbar/navbar';
import Footer from '../../components/molecules/Footer';
import PropTypes from 'prop-types';
import { useIsAuthenticated } from 'react-auth-kit';
import { Navigate } from 'react-router-dom';
import LeftSidebar from '../../components/molecules/LeftBar';
import RightSidebar from '../../components/molecules/RightBar';


const Layout = ({ children, privateRoute }) => {
  // const isAuth = useIsAuthenticated();
  // if (privateRoute && !isAuth()) {
  //   return <Navigate to={'/login'} replace />;
  // }

  return (
    <>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      {children}
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  privateRoute: PropTypes.bool,
};

export default Layout;
