import { useEffect, useState } from 'react';
import Layout from '../Layout';
import Content from './child/Content';
import { useParams } from 'react-router-dom';
import { instance } from '../../utils/instance';

const BlogDetail = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getDetailNews = async () => {
      try {
        await instance.get('blog/' + params.id).then((res) => {
          setData(res.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getDetailNews();
  }, [params]);
  return (
    <Layout>
      <img
        src={data.image}
        className="w-full h-72 object-cover"
        alt="jumbotron-image"
      />
      <Content data={data} />
    </Layout>
  );
};

export default BlogDetail;
