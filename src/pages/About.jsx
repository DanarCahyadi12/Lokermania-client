import NavigationBar from "../components/NavigationBar"
import about from '../assets/about-vektor.png'
import Image from '../assets/about.png'
import Card1 from '../assets/card1.png'
import Card2 from '../assets/card2.png'
import Card3 from '../assets/card3.png'
import Footer from "../components/MyFooter"

const About = () => {
    return (
        <div className="">
            <NavigationBar />
            <div className="container-fluid w-100  position-relative vh-100 px-0 ">
                <img src={about} className=" m-0 p-0 left-0 w-100 position-absolute bottom-0" />
                <div className="container-fluid position-relative mx-0">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-4">
                            <h1 className="color text-center font">LokerMania</h1>
                            <p className="text-center mt-3">LokerMania adalah situs lowongan kerja Nomor 1 di Indonesia. LokerMania berkomitmen untuk mengutamakan para pencari kerja, memberi mereka akses gratis untuk mencari lowongan, dan mencari informasi tentang perusahaan</p>
                        </div>
                        <div className="col-6 ">
                            <img src={Image} className='mt-5 pt-5 ' style={{ width:"700px", height:"600px" }} />

                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-5 mx-auto ">
                            <div className="card marrgin tombol-index text-white rounded-5" style={{ width: "500px", height: "224px" }}>
                                <div className="card-body">
                                    <h5 className="card-title text-center fs-3">VISI</h5>
                                    <p className="card-text text-center fs-5 pt-3">Menciptakan peluang ekonomi bagi talenta Indonesia</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 mx-auto">
                            <div className="card marrgin tombol-index text-white rounded-5" style={{ width: "500px", height: "224px" }}>
                                <div className="card-body">
                                    <h5 className="card-title text-center fs-3">MISI</h5>
                                    <p className="card-text text-center fs-5 pt-3">Menyediakan wadah yang aman dan bermanfaat bagi talenta Indonesia untuk menjadi lebih produktif dan sukses</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="container w-100 ">
                        <h3 className="text-center margin mb-5">Mengapa Mencari Kerja Bersama LokerMania</h3>
                        <div className="row justify-content-center">
                            <div className="col-4">
                                <div className="card rounded-5">
                                    <div className="img-card-top text-center">
                                        <img src={Card1} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title, text-center">Terpercaya oleh 3 juta pengguna</h5>
                                        <p className="catd-text text-center">Digunakan oleh 3 juta pengguna dan lebih dari 70 ribu perusahaan</p>
                                    </div>

                                </div>

                            </div>
                            <div className="col-4">
                                <div className="card rounded-5">
                                    <div className="img-card-top text-center">
                                        <img src={Card2} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title, text-center">Terdaftar</h5>
                                        <p className="catd-text text-center">Diawasi dan Terdaftar oleh Kominfo <p className="text-white">Diawasi dan Terdaftar oleh Kominfo</p></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card rounded-5">
                                    <div className="img-card-top text-center">
                                        <img src={Card3} />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title, text-center">Transparan</h5>
                                        <p className="catd-text text-center">Terhubung dengan HRD atau pemilik usaha langsung melalui WhatsApp</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-color justify-content-center align-items-center margin " style={{ height: "400px" }}>
                    <div className=" container text-center justify-content-center align-items-center pt-5">
                        <h2 className="mb-5  ">Perhatian!</h2>
                        <p className="fs-5">Banyak kasus penipuan lowongan kerja di luar Lokermania.<br></br>
                            Waspadalah terhadap perusahaan yang mewajibkan Anda untuk membayar dalam proses rekrutmen.
                        </p>
                        <p className="fs-5">Lokermania berkomitmen untuk menjadi platform cari kerja yang aman, cepat, dan dekat.<br></br>
                            Semua lowongan kerja dan perusahaan yang ada di platform KitaLulus telah melalui proses verifikasi keamanan.
                        </p>
                        <p className="fs-5">Apabila Anda memiliki masukan atau tanggapan, segera hubungi Lokermania pada lokermania@gmail.com </p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default About