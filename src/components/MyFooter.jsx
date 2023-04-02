import footer from '../assets/vektor-footer.png'
import '../components/style/style.css'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import whatsapp from '../assets/whatsapp.png'
import call from '../assets/call.png'
import pesan from '../assets/pesan.png'
import lokasi from '../assets/lokasi.png'
import kominfo from '../assets/kominfo.png'
import kementrian from '../assets/kementrian.png'

const Footer = () => {
    return (
        <div className='container-fluid tombol-index p-0 m-0 position-relative '>
            <footer className='vektor-footer   margin'>
                <h1></h1>
                <img src={footer} className='position-absolute top-0 end-0' style={{ width:"900px" }} />
                <div className='row d-flex justify-content-between align-items-center h-100 mx-5'>
                    <div className='col-4 d-block text-white '>

                        <h3>LokerMania</h3>
                        <p className='fs-6'>LokerMania adalah website yang membantu kamu untuk memilih atau merekomendasikan pekerjaan yang kamu inginkan</p>
                        <div className='row gap-2 '>
                            <div className='col-1 mb-3'>
                                <img src={facebook} style={{ width:"30px", height:"30px" }} />
                            </div>
                            <div className='col-1 mb-3'>
                                <img src={twitter} style={{ width:"30px", height:"30px" }} />
                            </div>
                            <div className='col-1 mb-3'>
                                <img src={instagram} style={{ width:"30px", height:"30px" }} />
                            </div>
                            <div className='col-1 mb-3'>
                                <img src={whatsapp} style={{ width:"30px", height:"30px" }} />
                            </div>
                        </div>
                    </div>
                    <div className='col-3 position-relative mb-5 offset-2'>
                        <h5>Pages</h5>
                        <p>Info Loker</p>
                        <p>Pasang Loker</p>
                        <p>Tentang Kami</p>
                    </div>
                    <div className='col-3 px-0 position-relative mb-5'>
                        <h5 className='' style={{ marginLeft:"10px" }}>Contact</h5>
                        <div className='row'>
                            <div className='col-12 d-flex gap-2'>
                                <img src={call} className='' style={{ width: "25px", height: "25px" }} />
                                <p>081 234 567 69  </p>

                            </div>
                            <div className='col-12 d-flex gap-2'>
                                <img src={pesan} className='' style={{ width: "25px", height: "25px" }} />
                                <p>lokermania@gmail.com </p>

                            </div>
                            <div className='col-12 d-flex gap-2'>
                                <img src={lokasi} className='' style={{ width: "25px", height: "25px" }} />
                                <p>Denpasar Utara </p>

                            </div>
                        </div>
                    </div>

                    
                </div>
            </footer>


        </div>
    )
}

export default Footer