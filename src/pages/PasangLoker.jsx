import NavigationBar from "../components/NavigationBar"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form'
import "../components/style/style.css"
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Navemployers from "../components/Navbar";
import { useEffect, useState } from "react";
import centang from '../assets/accept.png'
import axios from "axios";
import GetRefreshToken from "../utils/GetRefreshToken"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PasangLoker = () => {
    const [smShow, setSmShow] = useState(false);
    const [requireInput,SetRequireInput] = useState([{requirements : ""}])
    const [requirementsValue,SetRequirementsValue] = useState([''])

    const notify = (massage) => toast.success(massage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
   const HandleAddRequirements = ( ) => {
        if(requireInput.length < 10){
            SetRequireInput([...requireInput,{requirements : ""}])
            SetRequirementsValue([...requirementsValue,""])
            
        } 
   }
   const HandleChangeInput = (index,e) => {
    const inputValues = [...requireInput]
    const name = e.target.name
    inputValues[index][name] = e.target.value
    SetRequireInput(inputValues)

    const values = [...requirementsValue]
    values[index] =  e.target.value
    SetRequirementsValue(values)


    


   }

   useEffect(() => {
    const dataInputCopied = {...dataInput}
    dataInputCopied.requirements = requirementsValue
    SetDataInput(dataInputCopied)

   },[requireInput])
   const HandleDecrementRequirements = () => {
        if(requireInput.length > 1){
            let requireFields = [...requireInput]
            requireFields.splice(requireInput.length-1,1)
            SetRequireInput(requireFields)
            const requireValue = [...requirementsValue]
            requireValue.splice(requireInput.length-1,1)
            SetRequirementsValue(requireValue)
          

        }  
        
    }

     const [dataInput,SetDataInput] = useState({
        title : "",
        salary : "",
        descriptin : "",
        jobFunction : "",
        requirements : requirementsValue ,
        majors : "",
        
        
    })

    const HandleSubmit =async e => {
        e.preventDefault()
        try {
            const token = await GetRefreshToken()
            console.log('TOKEN ',token)
            const response = await axios.post('http://localhost:8000/add-vacancy', dataInput,{headers : {Authorization : `Bearer ${token}`}})
            if(response.status === 200) {
                notify(response.data.massage)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const DeleteRequireField = (index) => {
        if(requireInput.length > 0) {
            const values = [...requireInput]
            values.splice(index,1)
            SetRequireInput(values)
            const requireValue = [...requirementsValue]
            requireValue.splice(index,1)
            SetRequirementsValue(requireValue)

            const dataInputCopied = {...dataInput}
            dataInputCopied.requirements = requirementsValue
            SetDataInput(dataInputCopied)
        }
    }
    const HandleDataInput = e  => {
        SetDataInput({
            ...dataInput,[e.target.name] : e.target.value
        })

      

    }
    

    
 

    return (
        <div className="">
            <Navemployers />
            <div className="container margin ">
                <ToastContainer/>
                <div className="card tombol-index rounded-5 mb-5">
                    <div>
                        <h3 className="text-center text-white mt-3 fw-bold">Lengkapi Form Untuk Pasang Loker</h3>
                    </div>

                    <form className="row text-white m-5" onSubmit={HandleSubmit}>
                        <div className="col-6">
                            <div className='mb-3'>
                                <label for="exampleFormControlInput1" className='form-label'>Nama lowongan</label>
                                <input  onChange={HandleDataInput} wrapperClass='mb-4' id='formControlLg' className='form-control' placeholder='Nama lowongan' type='text' size="lg" name='title' required/>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className=''>
                                <label for="exampleFormControlInput1" className='form-label'>Gaji</label>
                                <input required onChange={HandleDataInput} wrapperClass='mb-4' id='formControlLg' className='form-control' placeholder='Rp.0' type='text' size="lg" name='salary' />
                            </div>
                        </div>
                        <div className="col-6">
                            <label for="qualification">Kualifikasi<small className="text-danger fw-bold fst-italic">Max-10</small></label> <br />
                            <div className="row ms-1 gap-2">
                                <div className="btn btn-light"  style={{width : " max-content"}} onClick={HandleAddRequirements}><small>Tambah Kualifikasi</small></div>
                                <div className="btn btn-danger" style={{width : " max-content"}} onClick={HandleDecrementRequirements}><small>Kurangi Kualifikasi</small></div>
                             </div>
                             <ol className="row mt-3" style={{maxHeight : "200px",minHeight : "150px",overflowY : "auto"}}>
                                {
                                    requireInput.map((val,i) => {
                                        return  (
                                            <li>
                                            <div className="row h-full justify-content-center align-items-end d-flex">
                                            <div className="col">
                                            <input type="text" name="requirements" className="border w-100 rounded px-3 py-2 mt-1" placeholder="Kualifikasi" value={val.requirements} onChange={(e) => HandleChangeInput(i,e)}></input>
                                            </div>
                                            <div className="col-3">
                                            {requireInput.length-1 > 0 && <div className="btn btn-danger w-100" onClick={() => DeleteRequireField(i)}><small>Hapus</small></div>}
                                            </div>
                                            </div>
                                            </li>
                                        )
                                    })
                                }
                             </ol>
                        </div>
                        <div className="col-6">
                            <div className='mb-3'>
                                <label for="exampleFormControlInput1" className='form-label'>Jurusan</label>
                                <input required onChange={HandleDataInput} wrapperClass='' id='formControlLg' className='form-control' placeholder='Jurusan' type='text' size="lg" name='majors' />
                            </div>
                            <div className='mb-3'>
                                <label for="exampleFormControlInput1" className='form-label'>Fungsi kerja</label>
                                <input required onChange={HandleDataInput} wrapperClass='' id='formControlLg' className='form-control' placeholder='Fungsi kerja' type='text' size="lg" name='jobFunction' />
                            </div>
                            <div className='mb-3'>
                                <label for="exampleFormControlInput1" className='form-label '>Pengalaman</label>
                                <input required onChange={HandleDataInput} wrapperClass='' id='formControlLg' className='form-control' placeholder='Pengalaman kerja' type='text' size="lg" name='experiences' />
                            </div>
                        </div>
                       
                        <div className="col-6">
                            <div className='mb-3'>
                                <label for="exampleFormControlInput1" className='form-label '>Lulusan</label>
                                <input required onChange={HandleDataInput} wrapperClass='' id='formControlLg' className='form-control' placeholder='Lulusan' type='text' size="lg" name='graduates' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className='input-group-lg mb-3'>
                                    <label for="exampleFormControlInput1" className='form-label'>Deskripsi lowongan</label>
                                    <textarea className="form-control" cols={30} rows={10} name="description"  onChange={HandleDataInput} required></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn tombol-m text-white" type={"submit"}>Submit</button>
                                    <Link className="btn tombol-m text-white mx-5" to={"/dashboard"}>Kembali</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
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

        </div>

    )
}

export default PasangLoker