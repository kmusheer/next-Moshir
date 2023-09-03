import Image from 'next/image';
import React from 'react';
import BlogCard from '@/app/components/BlogCard';
import { getBlog, getBlogs } from '@/utils/fetchBlog';


const Page = async ({ params }) => {
  const singleData = await getBlog(params.blogid);
  // console.log('params', params.blogid)
  const data = await getBlogs();

  const shuffledData = [...data].sort(() => 0.5 - Math.random());
  // Select a limited number of random blog posts (e.g., 3)
  const randomBlogs = shuffledData.slice(0, 3);

  return (
    <>
      <BlogCard randomBlogs={randomBlogs} singleData={singleData} />
    </>
  );
};

export default Page;

// export const getBlog = async (id) => {
//   const BLOG_API_URL = process.env.BLOG_API_URL;
//   const URL = `${BLOG_API_URL}/${id}`;
//   try {
//     let data = await fetch(URL);
//     if (!data.ok) {
//       throw new Error(`Fetch failed with status: ${data.status}`);
//     }
//     data = await data.json();
//     return data.result;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };
