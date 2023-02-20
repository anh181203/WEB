import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Admin.css'
const Admin = () => {
  const navigate= useNavigate()
  const [user,setUser] =useState(localStorage.getItem("user"))
  
  useEffect(()=>{
    if(user !== 'admin'){
      console.log("không phải admin ")
      toast.error("bạn không phải admin ",{autoClose :2000});
      navigate("/")
    }
    
},[user])
  
  return (
    
    <div className="back-gr">
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/admin">ADMIN</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="/admin">Quản lý Account</Nav.Link>
          <Nav.Link href="/emp">Quản lý sản phẩm</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  
  );
};

export default Admin;
