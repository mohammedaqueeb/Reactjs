import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";


export default function BlogDetail() {
    const [blog, setBlogs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        BlogDetails();
    }, []);

    const BlogDetails = async () =>{
        const result = await axios.get(`http://localhost:3003/blogs/${id}`);
        setBlogs(result.data);
    }

    return (
        <div>
                
            <header className="masthead" style={{'padding-top' : '7rem','padding-bottom' : '5rem'}}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-11">
                            <div className="site-heading">
                                <h1 style={{'font-size' : '55px'}}>Blog By {blog.author}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-md-11">
                    
                    {
                        <div className="post-preview mb-5">
                            <p className="post-meta">{blog.date}</p>
                             <h2 className="post-title">{blog.title}</h2>
                             <h3 className="post-subtitle">{blog.description}</h3>
                        </div>
                    }
                </div>
            </div>
        </div>
        </div>
    )
}
