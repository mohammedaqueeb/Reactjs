import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Blog from './component/blog/Blog';
import BlogsList from './component/admin/BlogsList';
import BlogAdd from './component/admin/BlogAdd';
import Notfound from './component/layout/Notfound';
import BlogUpdate from './component/admin/BlogUpdate';
import BlogDetail from './component/blog/BlogDetail';
import Login from './component/admin/Login';
import Logout from './component/admin/Logout';
import Elements from './component/practice/Elements';
import Formik from './component/practice/FormFormik';


function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
        
            <Route exact="true"  path="/" element={<Blog />} />
            <Route exact="true"  path="/blog/:id" element={<BlogDetail />} />
            <Route exact="true"  path="/login" element={<Login />} />
            <Route exact="true"  path="/logout" element={<Logout />} />
            <Route exact="true"  path="/admin" element={<BlogsList />} />
            <Route exact="true"  path="/admin/addBlog" element={<BlogAdd />} />
            <Route exact="true"  path="/admin/updateBlog/:id" element={<BlogUpdate />} />
            <Route exact="true"  path="/practice/elements" element={<Elements />} />
            <Route exact="true"  path="/practice/formik" element={<Formik />} />
            <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
