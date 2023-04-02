import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Input, Nav, Container, Navbar, NavDropdown } from "react-bootstrap"
import { Link,Navigate } from 'react-router-dom';
import logo from '../assets/user.png'
import GetUser from "../utils/GetUser";



const Navemployers =  () => {
    const [success,setSuccess] = useState(false)
    const [profile,setProfile] = useState("")
    const Logout = async () => {
        const endpoint = "http://localhost:8000/logout"
        try {
            const responseToken = await axios.get("http://localhost:8000/get-token")
            if(responseToken.status === 200) {
                const responses = await axios.get(endpoint,{headers : {Authorization :`Bearer ${ responseToken.data.accesToken}`}})
                if(responses.status === 200){
                    setSuccess(true)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
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
        return isLogin ? ( <Link className="nav-link color border-start border-secondary text-white" onClick={Logout}>Logout</Link>) : (<Link to='/login' className="nav-link color border-start border-secondary text-white">Login</Link>)
    }

    const user = GetUser()
    user.then(res => setProfile(res.user.photo_path)).catch(err => console.log(err))

    return (
        <Navbar bg="" expand="lg" className="fixed-top shadow tombol-index " style={{ padding:"10px 80px" }}>
            <Container fluid className="">  
                <div className="d-flex flex-column p-0">
                    <Navbar.Brand href="/" className=" fw-bold text-white" style={{ fontSize:"24px" }}>Loker Mania</Navbar.Brand>
                    <Navbar.Brand href="/" className="text-white fw-bold " style={{ fontSize:"15px" }}><small>for employers</small></Navbar.Brand>

                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto kanan gap-2 justify-content-center align-items-center">
                        <Link to='/dashboard' className="nav-link text-white">Dashboard</Link>
                        <Link to='/add-vacancy' className="nav-link text-white">Pasang Loker</Link>
                        <Link to='/about' className="nav-link text-white">Tentang Kami</Link>
                        <IsLoginNavbar/>
                        {success && <Navigate to={"/login"} />}
                        <Link to='/profileperusahaan' className="nav-link text-white border-start border-secondary">  <img
        src={profile && require(`../photo-profile/${profile}`)}
        className="rounded-circle"
        width={"50px"}
        height={"50px"}
      /></Link>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navemployers