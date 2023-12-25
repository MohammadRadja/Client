// import Company from './child/Company';
import Feature from './child/Feature';
import Footer from './child/Footer';
import Header from './child/Header';
import Jumbotron from './child/Jumbotron';
import Why from './child/Why';

const LandingPage = () => {
  return (
      <div className='w-full'>
      <Header />
      <Jumbotron />
      {/* <Company /> */}
      <Feature />
      <Why />
      <Footer />
      </div>
  );
};

export default LandingPage;
