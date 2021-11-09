import React, { useState , useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';


export default function BlogAdd() {


    let navigate = useNavigate();

    useEffect(() => {
        ValidateLogin();
        return () => {
            //ValidateLogin();
        }
    }, [])
    
    const ValidateLogin = () =>{
        let LoginStatus = localStorage.getItem("LoginStatus");

        if(LoginStatus != 'true'){
            navigate('/login')
        }
    }

    const [blogs, setblogs] = useState({
        slug: "",
        title: "",
        description: "",
        author: "",  
        date: ""
    });

    const { title, description, author, date } = blogs;
    const onInputChange = e => {
        setblogs({ ...blogs, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        let str = blogs.title;
        let RemoveChar = str.replace(/[^A-Z0-9]+/ig, " ").trim();
        blogs.slug = RemoveChar.substring(0,20).replace(/[^A-Z0-9]+/ig, "-");

        await axios.post("http://localhost:3003/blogs", blogs);
        
        navigate('/admin')
    };

    return (
        <div>
        <div className="container">
            <div className="row mt-2 mb-4 text-right">
            <Link to={`/logout`}>Logout</Link>
            </div>
        </div>
        <form className="container mt-5" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <label>Blog Title</label>
                <input type="text" className="form-control" name="title" value={title} onChange={e => onInputChange(e)} placeholder="title" />
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" name="description" placeholder="description" value={description} onChange={e => onInputChange(e)} ></textarea>
            </div>

            <div className="form-group">
                <label>Author</label>
                <input type="text" className="form-control" name="author" placeholder="author" value={author} onChange={e => onInputChange(e)} />
            </div>

            <div className="form-group">
                <label>Date</label>
                <input type="date" className="form-control" name="date" placeholder="date" value={date} onChange={e => onInputChange(e)} />
            </div>

            
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/admin" className="btn btn-danger ml-5">Cancel</Link>
        </form>
        </div>
    )
}
