import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import userEvent from "@testing-library/user-event";


export default function Login() {

    let navigate = useNavigate();
    useEffect(() => {
        ValidateLogin();
        return () => {
            //ValidateLogin();
        }
    }, [])
    
    const ValidateLogin = () =>{
        let LoginStatus = localStorage.getItem("LoginStatus");

        if(LoginStatus == 'true'){
            navigate('/admin')
        }
    }

    const [Login, setLogin] = useState({
        Username: "",
        Password: ""
    });

    const [Error, setError] = useState("");

    const adminUser = {
        Username: "admin",
        Password: "123456"
    }

    const { Username, Password } = Login;
    const onInputChange = e => {
        setLogin({ ...Login, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        if(Username == adminUser.Username && Password == adminUser.Password){
            localStorage.setItem("LoginStatus", "true");
            navigate('/admin')
        }else{
            setError("Invalid Username & Password")
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="offset-md-3 col-md-5">
                <form className="login-form" onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        {Error != '' ? <div className='alert alert-danger'>{Error}</div> : ''}
                    </div>
                    
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" name="Username" value={Username} onChange={e => onInputChange(e)} placeholder="Username" required={true} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" name="Password" placeholder="Password" value={Password} onChange={e => onInputChange(e)} required={true} />
                    </div>

                    
                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                </form>
                </div>
            </div>
        </div>
    )
}
