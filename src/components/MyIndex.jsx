import { useNavigate } from "react-router-dom";
import "./style/style.css"
import NavigationBar from './NavigationBar';
import index from '../assets/Hiring-amico.png'
import job from '../assets/Job hunt-pana.png'
import saly from '../assets/Saly-15.png'


const Index = () => {
    
    return (
        <div className="container-fluid bg-primary vh-100 text-center ">
            <div className="container position-relative ">
                <div>
                <img src={saly}  className='position-absolute'/>
                    
                </div>
                <h1 className="">Mencari Kerja Bersama LokerMania</h1>
                <button className="btn tombol-index">Mulai Sekarang</button>
            </div>

        </div>
    )
}

export default Index