import Jumbotron from './child/Jumbotron';
import NewsList from './child/NewsList';

const LandingPage = () => {
  return (
      <div className='w-full'>
      <Jumbotron />
      <NewsList />
      </div>
  );
};

export default LandingPage;
