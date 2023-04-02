import { Button, Form, Input, Nav, Container, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
const NavigationBar = () => {
    const IsLoginNavbar = () => {
        const [isLogin,setIsLogin] = useState(false)
        axios.get("http://localhost:8000/get-token")
        .then((response) => {
            if(response.status === 200) setIsLogin(true)
        })
        .catch((err) => {
            console.log(err)
            setIsLogin(false)
        })
        return isLogin ? ( <Link to='/dashboard' className="nav-link color border-start border-secondary">Perusahaan</Link>) : (<Link to='/login' className="nav-link color border-start border-secondary">Login</Link>)
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-10">
                    <Navbar bg="white" expand="lg" className="fixed-top shadow" style={{ padding:"10px 80px" }}>
                        <Navbar.Brand href="/" className="color fw-bold">Loker Mania</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav px-0">
                            <Nav className="ms-auto kanan gap-2 mx-0 ">
                                <Link to='/add-vacancy' className="nav-link color">Pasang Loker</Link>
                                <Link to='/search' className="nav-link color">Temukan Pekerjaan</Link>
                                <Link to='/about' className="nav-link color">Tentang Kami</Link>
                                <IsLoginNavbar/>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>

    )
}

export default NavigationBar