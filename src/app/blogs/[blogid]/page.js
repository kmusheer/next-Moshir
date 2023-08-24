import Image from 'next/image';
import React from 'react';
import BlogCard from '@/app/components/BlogCard';
import { getBlogs } from '@/utils/fetchBlog';


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

export const getBlog = async (id) => {
  const URL = `http://localhost:3000/api/blogs/${id}`;
  let data = await fetch(URL);
  data = await data.json();
  return data.result;
};
