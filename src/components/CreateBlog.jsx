import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
// import { Link } from "react-router-dom";
import { useBlogContext } from "../BlogContest";
import { useNavigate, Link } from 'react-router-dom';

export default function CreateBlog() {
  const { addBlog } = useBlogContext();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();


  const handleSubmit = () => {

    const newBlog = {title:title,
      body:body,
      id:Date.now(),
    };
    
    addBlog(newBlog);
    navigate("/blogs");
  
  };

//   const storedData = localStorage.getItem("token")

//   localStorage.setItem("toke",JSON.stringify(setTitle,setBody) )

  return (
    <div className="createMainDiv">
      <div className="headingDiv">
        <h1 className="headingCreate">bloG.EZ</h1>
        {/* <h2>Blogs</h2> */}
        <Link to="/blogs" className="blogsLink">Blogs</Link>
      </div><br /><br />

      <div className="contendDiv">
      <textarea className="textAreaHeading"
        id="w3review"
        name="w3review"
        placeholder="Heading"
        rows="1"
        cols="50"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <br />
      <textarea className="textAreaContent"
        id="w3review"
        name="w3review"
        rows="4"
        placeholder="Write something"
        cols="50"
        onChange={(e) => setBody(e.target.value)}
      />
      </div>

      <br></br>
      <div style={{ textAlign: "center" }}>
        {/* <Link to={"/Bloglist"}> */}
          <MDBBtn className="me-1" color="secondary" onClick={handleSubmit}>
            Submit
          </MDBBtn>
        {/* </Link> */}
      </div>
    </div>
  );
}
