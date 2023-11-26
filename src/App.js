import BlogBody from './pages/BlogPage/BlogBody.js';
import './pages/BlogPage/blogbody.css'
import './App.css';
import HomePage from './pages/HomePage/HomePage.js';
// import Footer from './common/Footer.js';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/blog' element={<BlogBody/>}/>
      
    </Routes>
    </div>

     
      
    
  );
}

export default App;
