import { useEffect, useState } from "react"
import NavigationBar from "../components/NavigationBar"
import {Link, Navigate} from "react-router-dom"
import axios from "axios"
import DateFormat from "../utils/DateFormat"
import Navemployers from "../components/Navbar"
import { Modal } from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
    const [lgShow, setLgShow] = useState(false);
    const [datas,setDatas] = useState(null)
    const [detailData,setDetailData] = useState(null)

    const notify = () => toast.success("Pelamar berhasil dihapus", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const Notification = (email) => toast.success(`${email} berhasil dicopy. Silahkan tunggu`, {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    const getApplicants = async (accessToken) => {
        const endpoint = `http://localhost:8000/dashboard`
        try {
            const responses = await axios.get(endpoint,{
                headers : {
                    Authorization : `Bearer ${accessToken}`
                }
            })
            if(responses.status === 200) setDatas(responses.data)

        } catch (error) {
            console.log(error)
        }
      }
    const getAccessToken = async () => {
        try{
            const responses = await axios.get("http://localhost:8000/get-token")
            if(responses.status === 200 ){
                getApplicants(responses.data.accesToken)
            }
        }catch(err){
            console.log(err)
        }
    
    }

    useEffect(() => {
        getAccessToken()
    },[])

    const DeleteApplicants = async (id) => {
        const endpoint= `http://localhost:8000/dashboard/${id}`
        try {
            const responseToken = await axios.get("http://localhost:8000/get-token")
            
            if(responseToken.status === 200) {
                const response =  await axios.delete(endpoint,{
                    headers : {
                        Authorization :`Bearer ${ responseToken.data.accesToken}`
                    }
                })
                console.log(response)
                if(response.status === 200) {
                    setDetailData(null)
                    notify()
                    getAccessToken()
                }
            }
        } catch (error) {
            console.log(error)
        }

        
    }
    const DisplayData= ({props}) =>{
        return props.map ((val,i) => {
            return (
                <tr key={i}>
                <th scope="row">{i+1}</th>
                <td >  <Link onClick={() => {
                    setDetailData(val)
                    setLgShow(true)
                }}>{val.full_name}</Link></td>
                <td>{val.position_applied}</td>
                 <td><a href={require(`../cv/${val.cv_path}`) }>{val.cv_name}</a></td>
                <td><DateFormat date={val.date}/></td>
                <td><button onClick={() => DeleteApplicants(val.idapplicants) } className="btn tombol-index text-white" >Hapus</button></td>
             </tr>
            )
        })
       
    }

    const CopyEmail = async() => {
        try {
            await navigator.clipboard.writeText(detailData.email)
            Notification(detailData.email)
            setTimeout(() => {
                window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=new"
            },1500)
        } catch (error) {
            console.log(error)
        }
    }

    const HandleDeleteApplicants = () => {
        DeleteApplicants(detailData.idapplicants)
        setLgShow(false)
    }
    return (
        <div>
            <Navemployers/>
            <ToastContainer/>
            
            <div className="container" style={{ marginTop:"150px" }}>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Lowongan Yang Dilamar</th>
                            <th scope="col">CV</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                       {datas  && <DisplayData props={datas.data}/>}
                
                    </tbody>
                </table>
                       {datas?.data.length === 0 && <h4 style={{
                        marginTop : "200px"
                       }} className={"text-center"}>"Belum ada pelamar :("</h4>}
            </div>
            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                    <form action="">
                        <div className="container">
                            <div className="row ">
                                <div className="col-6 mb-3">
                                    <label className="form-label">Nama </label>
                                    <input  type="text" className="form-control" value={detailData?.full_name}/>
                                </div>
                                <div className="col-6 mb-3">
                                    <label for="" className="form-label">Umur</label>
                                    <input  type="text" id="" className="form-control"  value={detailData?.age}/>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-6 mb-3">
                                    <label for="" className="form-label">Email</label>
                                    <input  type="email" id="" className="form-control" value={detailData?.email} />
                                </div>
                                <div className="col-6 mb-3">
                                <label for="" className="form-label">Jenis Kelamin</label>
                                    <input  type="text" id="" className="form-control" value={detailData?.gender}/>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-6 mb-3">
                                    <label for="" className="form-label">alamat</label>
                                    <input  type="text" id="" className="form-control" value={detailData?.address} />
                                </div>
                                <div className="col-6  ">
                                    <label for="formFile" className="form-label">CV</label>
                                    {detailData && <a href={require(`../cv/${detailData.cv_path}`)} style={{display : "block"}}>{detailData.cv_name}</a>}
                                    
                                </div>
                                <div className="col-6 mb-3">
                                    <label for="" className="form-label">No Telepon</label>
                                    <input  type="text" id="" className="form-control"  value={detailData?.phone} />
                                </div>
                            </div>

                        </div>
                    </form>
                    <Link onClick={CopyEmail} className='btn rounded-pill tombol-index text-white fw-bold mx-3' >Kirim pesan email</Link>
                    <button  className='btn rounded-pill btn-danger text-white fw-bold mx-3' onClick={HandleDeleteApplicants}>Hapus Pelamar</button>
                    
                </Modal.Body>
            </Modal>

        </div>

        
    )
}

export default Dashboard