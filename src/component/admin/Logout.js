import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

export default function Logout() {

    let navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("LoginStatus");
        navigate('/login');
        return () => {
        }
    }, [])


    return (
        <div>
            
        </div>
    )
}
