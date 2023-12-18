import Layout from '../Layout';
import Jumbotron from './child/Jumbotron';
import NewsList from './child/NewsList';

const Home = () => {
  return (
    <Layout>
      <Jumbotron />
      <NewsList />
    </Layout>
  );
};

export default Home;
