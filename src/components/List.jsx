import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit'; 
import { useBlogContext } from '../BlogContest';
import { Link, useNavigate } from 'react-router-dom';

export default function BlogList() {
  const { blogs } = useBlogContext();
  const navigate = useNavigate()
  // const storedData = JSON.parse(localStorage.getItem("blogData"));

  return (
    <div  className="createMainDiv">
      <div className="headingDiv"><h1 className="headingCreate">Blog List</h1></div>
      
      <button className='backBtn'><Link to="/createblog" className='backBtn'>Back</Link></button><br />
      
      
      <div className='container'> 
        <div className="card-list" style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {blogs.map((blog, index) => (
            <MDBCard key={index}>
              <MDBCardBody className="textAreaContent">
                <MDBCardTitle style={{ color: 'black', fontFamily: 'fantasy', textAlign: 'center', backgroundColor:'whitesmoke' }}>{blog.title}</MDBCardTitle>
                <MDBCardText style={{ color: 'black',}}>{blog.body}</MDBCardText>
                <MDBBtn onClick={() =>{navigate(`/blogs/${index}`)} }>View</MDBBtn>
                
              </MDBCardBody>
            </MDBCard>
          ))}
        </div>
      </div>


    </div>
  );
}


// const viewBlog = (data) => {
//   // if (data) {
//   //   console.log("Title:", data.title);
//   //   console.log("Body:", data.body);
//   // } else {
//   //   console.log("No stored data found.");
//   // }
// };
