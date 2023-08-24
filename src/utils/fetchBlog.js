export const getBlogs = async () => {
    const URL = "http://localhost:3000/api/blogs";
    let data = await fetch(URL);
    data = await data.json();
    return data;
};