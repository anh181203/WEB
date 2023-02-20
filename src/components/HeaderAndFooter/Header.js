import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Row, Col } from "react-bootstrap";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Header.css";
// import Login from "../admin/Login";
// import Footer from "./Footer";
import { BsSearch } from "react-icons/bs";
import { BsCart2 } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

const Header = () => {
  const usenavigate = useNavigate();
  const [customerlist, listupdate] = useState(null);
  const [displayusername, displayusernameupdate] = useState("");
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login");
    }
  }, []);
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="navbar-logo">
          <Navbar>
            <a href="/">
              <img
                src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/logo-mona-2.png"
                alt="logo"
                className="logo"
              />
            </a>
          </Navbar>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me"
              aria-label="Search"
            />
            <Button className="btn-header-search" variant="outline-success">
              <BsSearch />
            </Button>
          </Form>
          <Navbar id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                {" "}
                <Link className="diva" to="/cart">
                  <BsCart2 />
                </Link>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <Link className="diva" to="/login">
                  <FiLogIn />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  Trang chủ
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/GT">
                  Giới thiệu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Đồng hồ nam
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Đồng hồ nữ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Liên hệ
                </a>
              </li>
              {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* <Outlet /> */}
    </header>
  );
};

export default Header;
