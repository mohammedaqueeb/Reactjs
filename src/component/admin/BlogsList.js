import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

export default function BlogsList() {

    const [blogs, setBlogs] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        ValidateLogin();
        Blogs();
    }, []);

    const ValidateLogin = () =>{
        let LoginStatus = localStorage.getItem("LoginStatus");

        if(LoginStatus != 'true'){
            navigate('/login')
        }
    }

    const Blogs = async () =>{
        const result = await axios.get("http://localhost:3003/blogs");
        setBlogs(result.data.reverse());
    }
    
    const deleteUser = async id => {
       await axios.delete(`http://localhost:3003/blogs/${id}`);
       Blogs();
    };

    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-12 mb-4 text-right">
            <Link to={`/logout`}>Logout</Link>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 mb-4">
                <h3>Blog List  <Link to="/admin/addBlog" className="btn btn-info float-right">ADD BLOG</Link></h3>
            </div>

            <div className="col-md-12">
                <table className="table table-bordered shadow">
                <thead>
                
                    <tr>
                    <th scope="col" className="width5">#</th>
                    <th scope="col" className="width20">Title</th>
                    <th scope="col" className="width30">Description</th>
                    <th scope="col" className="width10">Author</th>
                    <th scope="col" className="width10">Date</th>
                    <th scope="col" className="width15">Action</th>
                    </tr>
                </thead>
                <tbody>
                
                    {
                        blogs.map((blog, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{blog.title}</td>
                                <td>{blog.description}</td>
                                <td>{blog.author}</td>
                                <td>{blog.date}</td>
                                <td>
                                    <Link to={`/admin/updateBlog/${blog.id}`} className="btn btn-primary mr-2"><i className="fas fa-user-edit"></i></Link>
                                    <button className="btn btn-danger" type="button"  onClick={() => deleteUser(blog.id)} ><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}
