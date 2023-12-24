// import { useEffect, useState } from 'react';
// import Card from '../../components/molecules/Card';
// import { instance } from '../../utils/instance';
// import Layout from '../Layout';

// const Blog = () => {
//   const [data, setData] = useState([]);
//   const getNews = async () => {
//     try {
//       await instance.get('blog').then((res) => {
//         setData(res.data.data);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getNews();
//   }, []);
//   return (
//     <Layout>
//       <div className="grid grid-cols-3 gap-5">
//         {data.map((item) => {
//           return (
//             <Card
//               image={item.image}
//               title={item.title}
//               description={item.content}
//               key={item.id}
//               id={item.id}
//             />
//           );
//         })}
//       </div>
//     </Layout>
//   );
// };

// export default Blog;
