import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  Link } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usenavigate=useNavigate();

//     useEffect(()=>{
// sessionStorage.clear();
//     },[]);

   const ProceedLogin=(e)=>{
    e.preventDefault();
    if(validate){
        // console.log('proceed');
        fetch("http://localhost:3009/user/"+username).then((res)=>{
            return res.json();
        }).then((resp)=>{
             console.log(resp);
             if (Object.keys(resp).length === 0) {
                toast.error('Please Enter valid username',{ autoClose: 2000 });
            } else {
                if (resp.password === password) {
                    toast.success('Success',{ autoClose: 2000 });
                    localStorage.setItem("user",username)
                    sessionStorage.setItem('username',username);
                    usenavigate('/')
                }else{
                    toast.error('Please Enter valid credentials',{ autoClose: 2000 });
                }
            }
        }).catch((err) => {
            toast.error('Login Failed due to :' + err.message,{ autoClose: 2000 });
        });
    }
   }
  
   
   const validate=()=>{
    let results=true;
    if(username === '' || username === null){
        results=false;
        toast.warning('vui lòng nhập Username',{ autoClose: 2000 });

    }
    if(password === '' || password === null){
        results=false;
        toast.warning('vui lòng nhập password',{ autoClose: 2000 });
        
    }
    return results;
   }
  return (
    <div className="row"  >
          <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                <form onSubmit={ProceedLogin}  className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value={username} onChange={e => setUsername(e.target.value)} className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"/>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button> |
                            <Link className="btn btn-success" to={'/register'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
    </div>
  )
}


export default Login
