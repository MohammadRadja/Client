import { useEffect, useState } from 'react';
import Card from '../../../components/molecules/Card';
import { instance } from '../../../utils/instance';

const NewsList = () => {
  const [data, setData] = useState([]);
  const getNews = async () => {
    try {
      await instance.get('blog').then((res) => {
        setData(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <section className="grid grid-cols-3 gap-5 my-10">
      {data.map((item) => {
        return (
          <Card
            image={item.image}
            title={item.title}
            description={item.content}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </section>
  );
};

export default NewsList;
