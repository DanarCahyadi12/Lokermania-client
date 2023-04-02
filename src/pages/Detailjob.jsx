
import vektor from '../assets/detailjob.png'
import NavigationBar from '../components/NavigationBar'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import centang from '../assets/accept.png'
import { useParams } from 'react-router-dom'
import Company from "../components/DetailJob"
import JobDescription from '../components/JobDescription'
import UseFetch from '../utils/UseFetch'
import axios from 'axios';
const Detailjob = () => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const {id} = useParams()

    const endpoint = `http://localhost:8000/vacancy/${id}`
    const datas = UseFetch(endpoint)
    const [err,setErr] = useState(null)

    const [cvUser,setCV] = useState(null)
    const [inputData,setInputData] = useState({
        fullName : "",
        email : "",
        age : "",
        address: "",
        phone : "",
        gender : ""

    })
    const HandleInput = e => {
        setInputData({
            ...inputData,[e.target.name] : e.target.value
        })
    }

    const HandleSubmit = e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("fullName",inputData.fullName)
        formData.append("email",inputData.email)
        formData.append("age",inputData.age)
        formData.append("address",inputData.address)
        formData.append("phone",inputData.phone)
        formData.append("gender",inputData.gender)
        formData.append("cv",cvUser)
        axios.post(endpoint,formData,{
            headers: {
                "Content-Type": "multipart/form-data",
              }
        })
        .then(res => {
            if(res.status === 200) {
                setLgShow(false)
                setSmShow(true)
            }
        })
        .catch(err => {
            setErr(err.response.data.massage)
            console.log(err)
        })
        
    }

    const HandleSelectFile =e => {
        setCV(e.target.files[0])
    }

    return (
        <div>
            <NavigationBar />
            {/* header */}
            <div className='container-fluid p-0  position-relative vh-100'>
                <img src={vektor} className="w-100 position-absolute bottom-0 start-0 " />
                   {!datas.pending && <Company props={datas.datas.data}/>}
                {/* content */}
                   {!datas.pending && <JobDescription props={datas.datas.data}/>}
                   <div >
                     <button onClick={() => setLgShow(true)} className='mt-n1 m-5 btn tombol-index rounded-pill text-white fw-bold'>Lamar Sekarang</button>
                   </div>
               
            </div>

            {/* modal edit profile */}
            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Lengkapi form data diri
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form  encType={"multipart/form-data"} onSubmit={HandleSubmit} >
                        <p className='text-center text-danger'>{err}</p>
                        <div className="container">
                            <div className="row ">
                                <div className="col-6 mb-3">
                                    <label className="form-label">Nama lengkap</label>
                                    <input type="text" className="form-control" name={'fullName'} required onChange={HandleInput} value={inputData.fullName}/>
                                </div>
                                <div className="col-6 mb-3">
                                    <label for="" className="form-label">No Telepon</label>
                                    <input type="number" id="" className="form-control" min={0} name={'phone'} required onChange={HandleInput} value={inputData.phone}/>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-6 mb-3">
                                    <label for="" className="form-label">Email</label>
                                    <input type="email" id="" className="form-control" name={'email'} required onChange={HandleInput} value={inputData.email}/>
                                </div>
                                <div className="col-6 mb-3">
                                    <label for="" className="form-label">Jenis Kelamin</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value={"Laki-laki"} required onChange={HandleInput}  />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Laki-laki
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value={"Perempuan"} required onChange={HandleInput} />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Perempuan
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-6 mb-3">
                                    <label for="" className="form-label">Umur</label>
                                    <input type="number" id="" className="form-control" min={0}  name='age' required onChange={HandleInput} value={inputData.age}/>
                                </div>
                                <div className="col-6  ">
                                    <label for="formFile" className="form-label">CV</label>
                                    <input className="form-control" type="file" id="formFile" name='cv' required onChange={HandleSelectFile}/>
                                </div>
                                <div className="col-6 mb-3">
                                    <label for="" className="form-label">Alamat</label>
                                    <input type="text" id="" className="form-control" name='address' required onChange={HandleInput} value={inputData.address} ></input>
                                </div>
                            </div>

                        </div>
                    <button  className='btn rounded-pill tombol-index text-white fw-bold mx-3' type='submit'>Submit</button>
                    </form>
                </Modal.Body>
            </Modal>

            {/* modal 2 */}
            <Modal
                size="md"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-center align-items-center flex-column gap-2'>
                    <img src={centang} alt="" srcset="" className='w-25' />
                    <h4>Form berhasil dikirim</h4>
                    <p class="mb-3">Silahkan tunggu balasan email dari perusahaan yang dilamar</p>
                </Modal.Body>
            </Modal>


        </div>
    )
}

export default Detailjob