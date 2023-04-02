import gLogin from '../assets/otp.png'
import { MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link, Navigate } from 'react-router-dom';
import {useState} from "react"
import axios from 'axios';

const LoginPage = () => {
    const endpoint = "http://localhost:8000/login"
    const [success,setSuccess] = useState(false)
    const [dataInput,setDataInput] = useState({
        email : "",
        password : "",
   

    })
    const [errMassage,setErrMassage] = useState("")
    const HandleInput = e => {
        setDataInput({
            ...dataInput,[e.target.name] : e.target.value
        })
    }

    const HandleSubmit = async e => {
        e.preventDefault()
        try{
           const responses = await axios.post(endpoint,dataInput)
           if(responses.status === 200) setSuccess(true)
        }catch(err) {
            setErrMassage(err.response.data.massage)
        }
    }
    return(
            <div className="container-fluid vh-100">
                <div className="row d-flex  h-100">
                    <div className="col-6 text-center d-block tombol-index vh-100 ">
                        <img src={gLogin} className='w-75 mt-5 position-relative my-auto ' />
                    </div>
                    <div className='col-6 justify-content-center align-items-center mt-5 '>
                        <h1 className='text-center mt-5 '>Masuk sebagai perusahaan</h1>
                        <div className='card mt-5 mx-auto'>
                            <Form className='m-5' onSubmit={HandleSubmit}>
                                <p className='text-danger text-center'>{errMassage}</p>
                                <label for="exampleFormControlInput1" className='form-label'>Email </label>
                                <MDBInput required onChange={HandleInput} wrapperClass='mb-4' id='formControlLg' className='form-control' type='email' size="lg" name='email' />
                                <label for="exampleFormControlInput1" className='form-label'>Password</label>
                                <MDBInput required onChange={HandleInput} wrapperClass='mb-4' id='formControlLg' className='form-control' type='password' size="lg" name='password' />
    
                                <div className="d-flex  mb-4">
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                    <a href="!#" className='text-decoration-none mx-3 ms-auto'>lupa password?</a>
                                </div>
    
                                <div className='text-center text-md-start mt-4 pt-2'>
                                    <Button variant=""className='w-25 tombol-index text-white rounded-pill' type='submit'>Masuk</Button>{' '}
                                    <p className="small fw-bold mt-2 pt-1 mb-2">Belum punya akun?<Link to='/register' className='text-danger'>Register</Link></p>
                                </div>
                               {success && <Navigate to={"/dashboard"}/>} 
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LoginPage