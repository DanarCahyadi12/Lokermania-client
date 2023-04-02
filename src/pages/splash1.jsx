import saly from "../assets/splash 1.png"

const Splash = () => {
    return(
        <div>
            <div className="container-fluid vh-100 tombol-index text-center">
                <img src={saly}/>
                <h1 className="text-white">Mencari Kerja Bersama LokerMania</h1>
                <button className="btn btn-light color fw-bold mt-5" style={{ height: "52px", width:"250px" }}>Mulai Sekarang</button>
            </div>
        </div>
    )
}

export default Splash