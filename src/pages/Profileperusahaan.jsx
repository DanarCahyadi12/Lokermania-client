import detail from '../assets/detailjob.png'
import gaji from '../assets/gaji.png'
import lokasi from '../assets/lokasi.png'
import vektor from '../assets/detailjob.png'
import NavigationBar from '../components/NavigationBar'
import Navemployers from '../components/Navbar'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import call from "../assets/calling.png"
import location from "../assets/location.png"
import mail from "../assets/mail.png"
import GetRefreshToken from '../utils/GetRefreshToken'
import axios from 'axios'
import GetUser from '../utils/GetUser'
import province from '../province'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Province = ({ props }) => {
    if (props) {
        return props.map((val, i) => {
            if (i !== 0) return (<option value={val.nama} key={i} >{val.nama}</option>)
        })
    }
}


const ProfilePerusahaan = () => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [vacancy,setVacancy] = useState(null)
    const [user,setUser] = useState(null)
    const [error,setError] = useState("")
    const [detailVacancy,SetDetailVacancy] = useState(null)
    const [requireInput,SetRequireInput] = useState([])
    const [requirementsValue,SetRequirementsValue] = useState(null)
    const [dataEditVacancy,SetDataEditVacancy] = useState(
        {   id :"",
            title : "",
            salary : "",
            description :"",
            graduates :"",
            jobFunction : "",
            requirements : "" ,
            experiences : '',
            majors : "",
        }
    )
    const HandleUpdateVacancy = async e => {
        e.preventDefault()
        try {
            const token = await GetRefreshToken()
            const response = await axios.post(`http://localhost:8000/profile/update-vacancy/${dataEditVacancy.id}`,dataEditVacancy,{headers : {Authorization : `Bearer ${token}`}})
            if(response.status === 200) {
                notify(response.data.massage)
                setSmShow(false)
                GetCompanyVacancy()
            }

        } catch (error) {
            console.log(error)
            setError(error.response.massage)
            
        }
    }

    const OnChangeHandle = e => {
        SetDataEditVacancy({
            ...dataEditVacancy ,[e.target.name] : e.target.value
        })
        
    }

    const SetRequirementsObject = (requirements ) => {
        let updatedRequirements = []
        for(let i of requirements){
            updatedRequirements.push({requirements : i})
        }
        SetRequireInput(updatedRequirements)
        SetRequirementsValue(requirements)
        
    }

    const HandleAddRequirements = ( ) => {
        if(requireInput.length < 10){
            SetRequireInput([...requireInput,{requirements : ""}])
            SetRequirementsValue([...requirementsValue,""])
           
            
        } 
    }

    useEffect(() => {
        const dataEdit = {...dataEditVacancy}
        dataEdit.requirements = requirementsValue
        SetDataEditVacancy(dataEdit)

    },[requireInput])

   const DeleteRequireField = (index) => {
    if(requireInput.length > 0) {
        const values = [...requireInput]
        values.splice(index,1)
        SetRequireInput(values)
        const requireValue = [...requirementsValue]
        requireValue.splice(index,1)
        SetRequirementsValue(requireValue)

    }
}
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
   const HandleChangeInput = (index,e) => {
    const inputValues = [...requireInput]
    const name = e.target.name
    inputValues[index][name] = e.target.value
    SetRequireInput(inputValues)

    const values = [...requirementsValue]
    values[index] =  e.target.value
    SetRequirementsValue(values)
   }

    useEffect(()=> {
        const res = GetUser()
        res.then(res => setUser(res.user))
    },[])
    const endpoint = 'http://localhost:8000/company-vacancy'
    const GetCompanyVacancy = async () => {
        const token = await GetRefreshToken()
        const responses = await axios.get(endpoint,{headers : {Authorization : `Bearer ${token}`}})
        try {
            if(responses.status === 200) setVacancy(responses.data.vacancy)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        GetCompanyVacancy()
    },[])

    const DisplayVacancy = ({props}) => {
        return props.map((val,i) => {
            return (
            <div className="row mt-2" key={i}>
                <div className='col-6'>
                    <p>{val.title}</p>
                </div>
                <div className="col-2 ">
                    <button className='btn tombol-index text-white' style={{ width: "75px" }} onClick={() => {
                    setSmShow(true) 
                    SetRequirementsObject(val.requirements)
                    SetDetailVacancy(val)
                    const datas = {...dataEditVacancy}
                    datas.id = val.idjob_list 
                    datas.title = val.title
                    datas.salary = val.salary
                    datas.description = val.description
                    datas.jobFunction = val.job_function
                    datas.graduates = val.graduates
                    datas.majors = val.majors
                    datas.requirements = val.requirements
                    datas.experiences = val.experiences
                    SetDataEditVacancy(datas)
                }} >Edit</button>
                </div>
                <div className="col-2 px-4">
                    <button className='btn btn-danger' onClick={() => {
                        DeleteVacancy(val.idjob_list)
                    }}>Hapus</button>
                </div>
            </div>
            )
        })
    } 

    const [errorMassage,SetErrorMassage] = useState("")
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
    const EditForm = ({props}) => {
        const [user,SetUser] = useState(props)
        const [img,SetImg] = useState(null)

        const [requireInput,SetRequireInput] = useState([{requirements : ""}])
        const [requirementsValue,SetRequirementsValue] = useState([''])

        const HandleInput = e => {
            SetUser({...user ,[e.target.name] : e.target.value})
        } 
        const HandleSubmit = async e =>{
            e.preventDefault()
            const endpoint = 'http://localhost:8000/profile'
            const formData = new FormData()
            formData.append('company_name',user.company_name)
            formData.append('phone',user.phone)
            formData.append('address',user.address)
            formData.append('provinsi',user.provinsi)
            formData.append('description',user.description)
            formData.append('img',img)
            try {
                const refreshToken = await GetRefreshToken()
                const response =  await axios.post(endpoint,formData,{headers : {Authorization :`Bearer ${refreshToken}`}})
                if(response){
                    if(response.status === 200) {
                        const res = GetUser()
                        res.then((resp) => {
                            setUser(resp.user)
                            SetUser(resp.user)
                            setLgShow(false)
                            SetErrorMassage("")
                            notify(response.data.massage)
                        })
                        .catch(err => console.log(err))
                    }
                }
                
            } catch (error) {
                SetErrorMassage(error?.response?.data?.massage)                
            } 
        } 
       
        return (
        <form onSubmit={HandleSubmit}>        
          <div className="container">
        <p className='text-center text-danger'>{errorMassage}</p>
            <div className="row ">
              <div className="col-6 mb-3">
                <label className="form-label">Nama Perusahaan</label>
                <input onChange={HandleInput} type="text" className="form-control" value={user.company_name} name="company_name"/>
              </div>
              <div className="col-6 mb-3">
                <label for="" className="form-label">
                  No Telepon
                </label>
                <input onChange={HandleInput} type="text" id="" className="form-control" value={user.phone} name="phone"/>
              </div>
            </div>
            <div className="row ">
              <div className="col-6 mb-3">
                <label for="" className="form-label">
                  alamat
                </label>
                <input onChange={HandleInput} type="text" id="" className="form-control" value={user.address} name="address"/>
              </div>
              <div className="col-6  ">
                <label for="" className="form-label">
                  Provinsi
                </label>
                <select
                  class="form-select form-select mb-4 "
                  aria-label=".form-select-lg example"
                  onChange={HandleInput}
                  value={user.provinsi}
                  name="provinsi"
                >
                  <Province props={province}/>
                </select>
    
                <div className="col-12 ">
                  <label for="formFile" className="form-label">
                    Ganti Foto Profile
                  </label>
                  <input onChange={(e) => SetImg(e.target.files[0])} className="form-control" type="file" id="formFile" name='img'/>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-6 mb-3">
                <label for="" className="form-label">
                  Deskripsi
                </label>
                <textarea onChange={HandleInput} className="form-control" cols={30} rows={5} value={user.description} name="description"></textarea>
              </div>
            </div>
            <button className='btn rounded-pill tombol-index text-white fw-bold mx-3'>Simpan Perubahan</button>
          </div>
          </form>
        );
    }
    const DeleteProfile = async () => {
        try {
            const token = await GetRefreshToken()
            const response = await axios.delete('http://localhost:8000/profile',{headers : {Authorization : `Bearer ${token}`}})
        
            if(response.status === 200){
                notify(response.data.massage)
                const res = GetUser()
                res.then(res => setUser(res.user))

            }
        } catch (error) {
            setError(error.response.data.massage)
        }
    }
    const HandleDeleteProfile = () => {
        DeleteProfile()
    }

    const DeleteVacancy = async(id) => {
        try {
            const token = await GetRefreshToken()
            const response=  await axios.delete(`http://localhost:8000/profile/delete-vacancy/${id}`,{headers : {Authorization : `Bearer ${token}`}})
            if(response.status  === 200){
                notify(response.data.massage)
                GetCompanyVacancy()
            } 
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className=''>
            <Navemployers />
            <div className="container-fluid p-0 position-relative vh-100">
            <ToastContainer/>
                <img src={vektor} className="w-100 position-absolute bottom-0 start-0 " />
                <div className='container h-100 d-flex justify-content-center align-items-center w-100'>
                    <div className='row gap-3 w-100  '>
                        <div className='col-lg-4'>
                            <div className='mx-auto d-flex justify-content-center' >
                            <img
        src={user && require(`../photo-profile/${user.photo_path}`)}
        className="rounded-circle"
        width={"200px"}
        height={"200px"}
      />
                            </div>
                            <div className="row d-flex text-center mt-4">

                                <div className="col-6">
                                    <button onClick={() => setLgShow(true)} className='btn rounded-pill fw-bold text-white tombol-index'>Edit Profile</button>
                                </div>
                                <div className="col-6">
                                    <button className='btn rounded-pill fw-bold text-white btn-danger' onClick={HandleDeleteProfile}>Hapus Profile</button>
                                </div>
                            </div>
                            <p className='mt-5 text-center text-danger'>{error}</p>
                        </div>

                        <div className='col-lg-6'>
                            <h4> {user?.company_name}</h4>
                            <div className="col-12 d-flex gap-2 mt-5">
                                <img src={location} alt="" srcset="" style={{ width: "25px", height: "25px" }} />
                                <p>{user?.provinsi} , {user?.address}</p>
                            </div>
                            <div className="col-12 d-flex gap-2">
                                <img src={call} alt="" srcset="" style={{ width: "25px", height: "25px" }} />
                                <p>{user?.phone}</p>
                            </div>
                            <div className="col-12 d-flex gap-2">
                                <img src={mail} alt="" srcset="" style={{ width: "25px", height: "25px" }} />
                                <p>{user?.email}</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className='container-fluid px-5 vh-100 p-0 w-100'>
                    <div className='row h-100 '>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <div className='container border rounded-5'>
                                <div className='row p-5 '>
                                    <div className='col-12 '>
                                        <h4 className=' mb-5'>Daftar Lowongan</h4>
                                    </div>
                                  
                                 {vacancy &&  <DisplayVacancy props={vacancy}/> }
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <div className='container border rounded-5' style={{ height: "414px" }}>
                                <div className='row p-5 '>
                                    <div className='col-12 '>
                                        <h4 className='text-center mb-5'>Deksripsi Perusahaan</h4>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12 text-center">
                                            <p style={{ fontSize: "16px" }}>{user?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal edit profile */}
                <Modal
                    size="xl"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditForm props={user}/>
                    </Modal.Body>
                </Modal>



                {/* modal edit profile */}
                <Modal
                    size="xl"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="" onSubmit={HandleUpdateVacancy}>
                            <div className="container">
                                <div className="row ">
                                    <div className="col-6 mb-3">
                                        <label className="form-label">Nama Pekerjaan</label>
                                        <input required type="text" className="form-control" value={dataEditVacancy?.title} name="title" onChange={OnChangeHandle}/>
                                    </div>
                                    <div className="col-6 mb-3">
                                        <label for="" className="form-label">Gaji</label>
                                        <input required type="text" id="" className="form-control" value={dataEditVacancy?.salary} name="salary" onChange={OnChangeHandle}/>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-6 mb-3">
                                    <label for="qualification">Kualifikasi<small className="text-danger fw-bold fst-italic">Max-10</small></label> <br />
                            <div className="row ms-1 gap-2">
                                <div className="btn btn-light"  style={{width : " max-content"}} onClick={HandleAddRequirements}><small>Tambah Kualifikasi</small></div>
                                <div className="btn btn-danger" style={{width : " max-content"}} onClick={HandleDecrementRequirements}><small>Kurangi Kualifikasi</small></div>
                             </div>
                             <ol className="row mt-3" style={{maxHeight : "200px",minHeight : "150px",overflowY : "auto"}}>
                                {
                                  detailVacancy &&  requireInput.map((val,i) => {
                                        return  (
                                            <li>
                                            <div className="row h-full justify-content-center align-items-end d-flex">
                                            <div className="col">
                                            <input required type="text" name="requirements" className="border w-100 rounded px-3 py-2 mt-1" placeholder="Kualifikasi" value={val.requirements} onChange={(e) => HandleChangeInput(i,e)}></input>
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
                                    <div className="col-6 mb-3">
                                        <label for="" className="form-label">Lulusan</label>
                                        <input required type="text" id="" className="form-control" aria-describedby="passwordHelpBlock"  value={dataEditVacancy?.graduates} name="graduates" onChange={OnChangeHandle}/>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-6  ">
                                        <label for="" className="form-label">Jurusan</label>
                                        <input required type="text" id="" className="form-control" aria-describedby="passwordHelpBlock"  value={dataEditVacancy?.majors} name="majors" onChange={OnChangeHandle}/>

                                        <div className="row">
                                            <div className="col-12 ">
                                                <label for="" className="form-label">Pengalaman</label>
                                                <input required type="text" id="" className="form-control" aria-describedby="passwordHelpBlock" value={dataEditVacancy?.experiences} name="experiences" onChange={OnChangeHandle}/>

                                            </div>
                                            <div className='mb-3'>
                                <label for="exampleFormControlInput1" className='form-label'>Fungsi kerja</label>
                                <input required value={dataEditVacancy?.jobFunction} wrapperClass='' id='formControlLg' className='form-control' placeholder='Fungsi kerja' type='text' size="lg" name='jobFunction' onChange={OnChangeHandle}/>
                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">Deskripsi</label>
                                        <textarea  required name="description" className='form-control' id="" cols="30" rows="10" value={dataEditVacancy?.description} onChange={OnChangeHandle}></textarea>
                                    </div>
                                </div>
                            </div>
                        <button className='btn rounded-pill tombol-index text-white  mx-3 mt-3' type='submit'>Simpan Perubahan</button>
                        </form>

                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default ProfilePerusahaan

