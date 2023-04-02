
import gaji from '../assets/gaji.png'
import lokasi from '../assets/lokasi.png'
import DateFormat from '../utils/DateFormat'
const Company = ({props}) => {
    const {company} = props
    const {detailVacancy} = props

    return (
        <div className='container h-100 d-flex justify-content-center align-items-center w-100'>
        <div className='row gap-3 w-100'>
            <div className='col-lg-3'>
            <img src={require(`../photo-profile/${company.photoUrl}`)}  className="rounded-circle" style={{width: "200px",height: '200px'}}alt="Avatar" />

            </div>

            <div className='col-lg-6'>
                <h4> {company.companyName}</h4>
                <h1>{detailVacancy.title}</h1>
                <DateFormat date={detailVacancy.posted}/>
                <div className='col-12 d-flex gap-2 mt-2'>
                    <img src={gaji} style={{ width: "25px", height: "25px" }} />
                    <p>{detailVacancy.salary}</p>
                </div>
                <div className='col-12 d-flex gap-2'>
                    <img src={lokasi} style={{ width: "25px", height: "25px" }} />
                    <p>{company.provinsi}, {company.address}</p>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Company
