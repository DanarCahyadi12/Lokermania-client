import { useNavigate } from "react-router-dom";
import "../components/style/style.css"
import NavigationBar from "../components/NavigationBar";
import index from "../assets/Hiring-amico.png"
import job from "../assets/Job hunt-pana.png"
// import index from "../assets/Hiring-amico.png";
// import job from "../assets/Job hunt-pana.png";
import Footer from "../components/MyFooter"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';



const PostjobPage = () => {
    const [lgShow, setLgShow] = useState(false);
    const navigate = useNavigate();



    return (
        <div>
            <div className="container-fluid m-0 p-0">
                <NavigationBar />
                <div className="container margin">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-6 justify-content-center align-items-center">
                            <h1 className="">Rekrut Karyawan Hebat Anda Berikutya</h1>
                            <button onClick={() => navigate ('/pasangloker')} className="btn rounded-pill tombol-index text-white">Pasang Loker</button>

                        </div>
                        <div className="col-6">
                            <img src={index} className='w-100' />
                        </div>
                    </div>
                </div>
                <div className="container margin">
                    <div className="row ">
                        <div className="col-lg-4 ">
                            <div className="card tombol-index">
                                <div className="card-header">
                                    <h1 className="text-warning">1</h1>
                                </div>
                                <div className="card-body">
                                    <div className="card-title h4 text-white fw-bold">Buat Akun Anda</div>
                                    <p className="card-text mb-4 mt-5 text-white fs-5">Yang Anda perlukan hanya alamat email untuk membuat akun dan mulai memasang lowongan Anda untuk mencari pekerja yang anda</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card tombol-index">
                                <div className="card-header">
                                    <h1 className="text-warning">2</h1>
                                </div>
                                <div className="card-body">
                                    <div className="card-title h4 text-white fw-bold">Pasang Lowongan Anda</div>
                                    <p className="card-text mb-4 mt-5 text-white fs-5">Kemudian tinggal tambahkan judul, deskripsi, dan lokasi ke pemasangan lowongan Anda, dan lowongan Anda sudah siap.</p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 ">
                            <div className="card tombol-index">
                                <div className="card-header">
                                    <h1 className="text-warning">3</h1>
                                </div>
                                <div className="card-body">
                                    <div className="card-title h4 text-white fw-bold">Posting Lowongan Anda</div>
                                    <p className="card-text mb-4 mt-5 text-white fs-5">Setelah Anda memasang lowongan, gunakan alat kami yang canggih untuk membantu Anda menemukan talenta idaman.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container-fluid  bg-color margin">
                    <div className="container">

                        <div className="row  justify-content-center align-items-center">
                            <div className="col-lg-6">
                                <h1 className="f-color">Hemat waktu dan tenaga dalam upaya perekrutan anda</h1>
                                <p className="fs-4 mt-5">Menemukan kandidat terbaik untuk suatu lowongan seharusnya tidak sulit. Melalui LokerMania membantu Anda untuk menemukan, menyaring, dan merekrut dengan lebih mudah dan cepat</p>
                            </div>
                            <div className="col-lg-6">
                                <img src={job} className='w-100' />
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default PostjobPage