
import { Routes, Route } from 'react-router-dom';
import { BlogProvider } from './BlogContest';
import './App.css';
import CreateBlog from './components/CreateBlog';
import List from './components/List';
import Details from './components/Details';


function App() {
  return (
    <div className="App-header">
     <BlogProvider>
      <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/blogs" element={<List />} />
        <Route path="/blogs/:id" element={<Details />} />
        
      </Routes>
    </BlogProvider>
      
    </div>
  );
}

export default App;
