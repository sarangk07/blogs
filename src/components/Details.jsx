
import React from 'react';
import { useParams } from 'react-router-dom';
import { useBlogContext } from '../BlogContest';

function BlogDetails() {
  const { blogs } = useBlogContext();
  const { id } = useParams();
  console.log(blogs);
  const blog = blogs.filter((blog,index) => index ===parseInt(id));
  console.log(blog);


  if (blog.length>0) {
    {console.log(blog);}
    return (
      <div className="createMainDiv">
        <h1 className="Dtitle">{blog[0].title}</h1>
        <p className="Dcontent">{blog[0].body}</p>
      </div>
    );


   
  }else{
    {console.log(blog);}
    return <div className="createMainDiv">
    <h1 className="pagenotFund">Page not found!</h1>
    
    </div>;
  }

  
}

export default BlogDetails;
