import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Elements() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        GetData();
    }, []);

    const GetData = async () =>{
        const result = await axios.get("http://localhost:3003/blogs");
        setBlogs(result.data.reverse());
    }
    

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Blogs</label>
                            <select name="blogs" id="blogs" className="form-control">
                                {
                                    blogs.map((blog, index) => (
                                        <option key={index} value={blog.id}>{blog.title}</option>
                                    ))
                                }
                               
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
