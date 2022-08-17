import React from "react";
import {loginEndpoint} from '../../spotify.js'
import './login.css'
function Login(){
    return(
        <div className="btn btn-info ">
        
            <a href={loginEndpoint} >Login</a>
        
        </div>
    )
}

export default Login;