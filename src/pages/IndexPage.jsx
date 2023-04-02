import Index from "../components/MyIndex";
import NavigationBar from "../components/NavigationBar";
import image from "../assets/Job hunt-amico.png"
import { useNavigate } from "react-router-dom";

import index from "../assets/index.png"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Footer from "../components/MyFooter";
import UseFetch from "../utils/UseFetch";

import DisplayCard from "../components/Card";

const IndexPage = () => {
    const navigate = useNavigate();
    const [open, setopen] = useState(false);
    const [buka, setbuka] = useState(false);
    const [bukak, setbukak] = useState(false);
    const [bukakk, setbukakk] = useState(false);

    const datas = UseFetch("http://localhost:8000")

    return (
        <div>
            <NavigationBar />
            <div className="container-fluid mt-5 tombol-index vh-100">
                <div className="row pt-5 justify-content-center align-items-center">
                    <div className="col-lg-6 col-sm-12 justify-content-center ">
                        <h1 className="font text-white i-font">Temukan <span className="font-w">Pekerjaan </span>Yang <br></br> <span className="font-w ">Cocok</span> Dengan <br></br> Keinginanmu</h1>
                        <small className="fs-6 mt- justify-content-center text-white ">Dengan LokerMania kamu bisa menemukan <br></br> pekerjaan yang sesuai dengan keinginanmu!</small>
                        <br></br>
                        <button className="btn tombol-i rounded-pill text-white mt-5 fw-bold" onClick={() => navigate ('/search')}>Mulai Sekarang</button>
                    </div>
                    <div className="col-lg-5 col-sm-12 gambar">
                        <img src={image} className='w-100 gambar img-fluid' />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h1 className="fw-bold index">Temukan Lowongan Terbaru</h1>
                <div className="row mt-5">
                    <div className="col-7 d-flex justify-content-center gap-4">
                        {!datas.pending && <DisplayCard props={datas.datas}/>}

                    </div>
                </div>
                <div className="margin card">
                    <div className="container">

                        <h5 className="color mt-3">FREQUENTLY ASKED QUESTION</h5>
                        <div className="d-flex align-items-center justify-content-between ">
                            <h1>🤔• Pertanyaan yang Sering Diajukan</h1>
                            <Link className="nav-link color">Lihat semua</Link>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 my-1">
                                <div className="card">
                                    <Link className="nav-link fs-3 m-3" onClick={() => setopen(!open)}>Kenapa ya aku selalu ditolak banh? 😁</Link>
                                </div>
                                <Collapse in={open}>
                                    <div className="card">
                                        <div className="card-body">

                                            <div id="example-collapse-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, wh
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="col-12 my-1">
                                <div className="card">
                                    <Link className="nav-link fs-3 m-3" onClick={() => setbuka(!buka)}>Apakah rehan wangsaff adalah CEO dari LokerMania? 😅😅😅</Link>
                                </div>
                                <Collapse in={buka}>
                                    <div className="card">
                                        <div className="card-body">

                                            <div id="example-collapse-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, wh
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="col-12 my-1">
                                <div className="card">
                                    <Link className="nav-link fs-3 m-3" onClick={() => setbukak(!bukak)}>Kenapa Harus Memilih Loker Mania?</Link>
                                </div>
                                <Collapse in={bukak}>
                                    <div className="card">
                                        <div className="card-body">

                                            <div id="example-collapse-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, wh
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                            <div className="col-12 my-1 mb-5">
                                <div className="card">
                                    <Link className="nav-link fs-3 m-3" onClick={() => setbukakk(!bukakk)}>Afa iyah lulusan It bisa benerin Ac? 👆🏻😅</Link>
                                </div>
                                <Collapse in={bukakk}>
                                    <div className="card">
                                        <div className="card-body bg-dark-subtle">

                                            <div id="example-collapse-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                                dummy text ever since the 1500s, wh
                                            </div>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card tombol-index margin rounded-5">

                    <div className="row m-2 text-white justify-content-between align-items-center">
                        <div className="col-lg-6 col-sm-12 ">
                            <h1 className="mt-5">Masih bingung cari <br></br> kerja yang cocok? 🤔</h1>
                            <small className="fs-5 ">Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari kerja yang tepat dengan menjawab pertanyaan yang kami berikan.</small>
                            <Link to="/search" className="nav-link fs-2 mt-5 mb-4">Mulai Sekarang</Link>
                        </div>
                        <div className="col-lg-6 col-sm-12 ">
                            <img src={index} className='w-75 d-flex mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default IndexPage