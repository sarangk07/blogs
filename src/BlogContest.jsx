// BlogContext.js
import React, { createContext, useContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
