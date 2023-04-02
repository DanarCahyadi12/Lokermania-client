import splash2 from '../assets/splash2.png'
import asset1 from '../assets/searchlogo.png'
import asset2 from '../assets/carikerja.png'
import { Link } from 'react-router-dom'



const Splash2 = () => {
    return (
        <div>
            <div className=" container-fluid vh-100 bg-img">
                <div className='container vh-100 d-flex flex-column justify-content-center align-items-center'>
                    <h1 className='text-center align-items-center mb-5 text-white'>  Apa yang anda  sedang cari?</h1>
                    <div className='row text-center gap-5 '>
                        <div className='col-5'>
                            <Link to={'/'} className='text-decoration-none text-dark'>
                            <div className='card' style={{ height:"269px", width:"381px" }}>
                                <div className='card-img-top mt-5'>
                                    <img src={asset1} />
                                    <div className='card-body'>
                                        <p className='card-text fs-5'>Saya mau cari pekerjaan</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className='col-5'>
                            <Link to={'/company'}className='text-decoration-none text-dark'>
                            <div className='card' style={{ height:"269px", width:"381px" }}>
                                <div className='card-img-top mt-5'>
                                    <img src={asset2} />
                                    <div className='card-body'>
                                        <p className='card-text fs-5'>Saya mau mencari pekerja</p>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash2