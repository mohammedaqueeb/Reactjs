import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        Blogs();
    }, []);

    const Blogs = async () =>{
        const result = await axios.get("http://localhost:3003/blogs");
        setBlogs(result.data.reverse());
    }
    
    return (
        <div>
            <header className="masthead" >
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>Blogs</h1>
                                <span className="subheading">A blogs app in react</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    
                    {
                        blogs.map((blog, index) => (
                            
                            <div key={index}>
                                <div className="post-preview">
                                <Link to={`blog/${blog.id}`} >
                                    <h2 className="post-title">{blog.title}</h2>
                                    <h3 className="post-subtitle">{blog.description.substring(0,100)}...</h3>
                                </Link>
                                
                                <p className="post-meta">
                                    by
                                    <span>{blog.author}</span>
                                    on {blog.date}
                                </p>
                                </div>
                                <div><hr className="my-4" /></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </div>
    )
}


export default Blog;