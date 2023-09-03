import React from 'react';
import BlogCards from '../components/BlogCards';
import { getBlogs } from '@/utils/fetchBlog';

const Page = async () => {
    const data = await getBlogs();

    return (
        <>
            <BlogCards  data={data} />
        </>
    );
};

export default Page;

// export const getBlogs = async () => {
//     const URL = process.env.API_URL;
//     // const URL = "http://localhost:3000/api/blogs";
//     let data = await fetch(URL);
//     console.log("data", data)
//     data = await data.json();
//     return data;
// };
// export const getBlogs = async () => {
//     const URL = process.env.API_URL;
//     try {
//         let response = await fetch(URL);
//         if (response.status === 404) {
//             console.warn("Resource not found:", URL);
//             return null; // Return null or handle the error in a way that makes sense for your application.
//         }
//         if (!response.ok) {
//             throw new Error(`Fetch failed with status: ${response.status}`);
//         }
//         let data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//         throw error; // Rethrow the error to handle it higher up in your code.
//     }
// };



