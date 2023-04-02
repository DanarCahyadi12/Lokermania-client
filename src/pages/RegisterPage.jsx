import gLogin from '../assets/otp.png'
import { MDBInput } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link, useNavigate, Navigate } from 'react-router-dom';
import province from "../province"
import { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterPage = () => {
    const navigate = useNavigate()
    const [errMassage, setErrMassage] = useState("")
    const [navigates, setNavigates] = useState(null)
    const notify = () => toast.success("Akun berhasil dibuat. Silahkan login", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const Province = ({ props }) => {
        if (props) {
            return props.map((val, i) => {
                if (i !== 0) return (<option value={val.nama} key={i} >{val.nama}</option>)
            })
        }
    }

    const endpoint = "http://localhost:8000/register"
    const [dataInput, setDataInput] = useState({
        name: "",
        email: "",
        address: "",
        provinsi: "Aceh",
        password: "",
        verify: "",
        phone: ""

    })
    const HandleInput = e => {
        setDataInput({
            ...dataInput, [e.target.name]: e.target.value
        })
    }

    const HandleSubmit = async (e) => {
        e.preventDefault()
        try {
            const responses = await axios.post(endpoint, dataInput)
            if (responses.status === 200) {
                notify()
                setTimeout(() => {
                    setDataInput({
                        name: "",
                        email: "",
                        address: "",
                        provinsi: "Aceh",
                        password: "",
                        verify: "",
                        phone: ""
                    })
                }, 200)
                setTimeout(() => {
                    setNavigates(true)
                }, 5000)
                setErrMassage("")
            }
        } catch (err) {
            setErrMassage(err.response.data.massage)
        }

    }
    // console.log(dataInput)
    return (
        <div className="container-fluid vh-100 ">

            <div className="row d-flex  h-100">
                <div className="col-6 text-center d-block tombol-index vh-100 ">
                    <img src={gLogin} className='w-75 mt-5 position-relative my-auto ' />
                    <h1 className='text-white fw-bold '></h1>
                </div>
                <div className='col-6 mt-5  justify-content-center align-items-center '>
                    <h1 className='text-center mt-5  mb-5 pb-3' >Buat akun perusahaan anda</h1>
                    <div className='mx-auto card'>

                        <Form className='m-5' onSubmit={HandleSubmit}>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover={false}
                                theme="light"
                            />
                            <div className='row'>
                                <div className='col-6'>
                                    <label for="exampleFormControlInput1" className='form-label'>Nama perusahaan</label>
                                    <MDBInput value={dataInput.name} required onChange={HandleInput} wrapperClass='mb-4' id='formControlLg' className='form-control' placeholder='' type='text' size="lg" name='name' />
                                </div>
                                <div className='col-6'>
                                    <label for="exampleFormControlInput1" className='form-label'>Password</label>
                                    <MDBInput value={dataInput.password} required onChange={HandleInput} wrapperClass='mb-4' id='formControlLg' className='form-control' type='password' size="lg" name='password' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label for="exampleFormControlInput1" className='form-label'>Alamat perusahaan</label>
                                    <MDBInput value={dataInput.address} required onChange={HandleInput} wrapperClass='mb-4' id='formControlLg' className='form-control' type='text' size="lg" name='address' />
                                </div>
                                <div className='col-6'>
                                    <label for="exampleFormControlInput1" className='form-label'>Konfirmasi password</label>
                                    <MDBInput value={dataInput.verify} required onChange={HandleInput} wrapperClass='mb-4' id='formControlLg' className='form-control' type='password' size="lg" name='verify' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 '>
                                    <label for="exampleFormControlInput1" className='form-label'>Alamat email</label>
                                    <MDBInput value={dataInput.email} required onChange={HandleInput} wrapperClass='mb-4' id='formControlLg' className='form-control' type='email' size="lg" name='email' />

                                </div>
                                <div className='col-6'>
                                    <label for="exampleFormControlInput1" className='form-label'>No telpon perusahaan</label>
                                    <MDBInput value={dataInput.phone} required onChange={HandleInput} wrapperClass='mb-4' id='formControlLg' className='form-control' type='text' min={0} size="lg" name='phone' />
                                </div>
                                <div className='col-6'>
                                    <label for="exampleFormControlInput1" className='form-label'>Provinsi</label>
                                    <Form.Select aria-label="Default select example" className="rounded " name='provinsi' onChange={HandleInput} value={dataInput.provinsi}>
                                        
                                        <Province props={province} />
                                    </Form.Select>
                                </div>

                            </div>

                            <div className='text-center text-md-start mt-4 pt-2'>
                                <p className='text-danger'>{errMassage}</p>
                                <Button variant="" className='w-25 tombol-index text-white rounded-pill' type='submit' >Daftar</Button>
                                <p className="small fw-bold mt-2 pt-1 mb-2">Sudah punya akun?<Link to='/login' className='text-danger'>Login</Link></p>
                            </div>
                        </Form>
                        {navigates && <Navigate to={"/login"} />}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RegisterPage