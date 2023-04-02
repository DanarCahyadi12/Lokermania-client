import { Link } from "react-router-dom"

const OtherVacancy = ({props}) => {
    return props.map((val,i) => {
        return (
        <div className=' d-flex justify-content-between'key={i}>
            <p className='mt-3'>{val.title}</p>
            <a className='mt-3 btn tombol-index rounded-pill text-white fw-bold' href={`/detailjob/${val.idVacancy}`}>Detail</a>
        </div>
            )
            
    })
}

export default OtherVacancy