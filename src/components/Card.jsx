import building from "../assets/building.png"
import location from "../assets/location.png"
import saving from "../assets/saving.png"
import Title from "../utils/Title";
import DateFormat from "../utils/DateFormat";
import { Link } from "react-router-dom";
const DisplayCard = ({props}) => {
   
    return props.data.map((val,i) => {
        return (
        <div className="card" style={{ width: '120rem' }} key={i}>
            <div className="container mt-3 mx-3 ">
            <img src={require(`../photo-profile/${val.photo_path}`)}  className="rounded-circle" style={{width: "90px",height: "90px"}}alt="Avatar" />
                <div className="card-title mt-4">
                    {val.title.length > 17 && <Title title={val.title}/>}
                    {val.title.length <= 17 && <h5>{val.title}</h5>}
                </div>
            </div>
            <div className="d-flex flex-column gap-2 mx-4 pt-3">
                <div className="d-flex gap-2 ">
                    <img className="img width" src={building}></img> {val.company_name}
                </div>
                <div className="d-flex gap-2">
                    <img className="img width" src={location}></img> {val.provinsi}
                </div>
                <div className="d-flex gap-2">
                    <img className="img width" src={saving}></img> {val.salary}

                </div>
                <div className="d-flex align-items-center justify-content-between gap-3 mt-3 mb-3">
                    <Link className="btn text-white rounded-pill tombol-index" to={`/detailjob/${val.idjob_list}`}>Detail</Link>
                 <DateFormat date={val.posted}/>
                </div>
            </div>
        </div>
        )
    })
}

export default DisplayCard