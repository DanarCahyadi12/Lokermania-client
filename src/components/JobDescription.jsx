
import { useState } from 'react'
import OtherVacancy from './OtherVacancy';
import Qualification from './Qualification';
const JobDescription = ({props}) => {
    const [lgShow, setLgShow] = useState(false);
    const {detailVacancy} = props
    const {company} = props
    const {otherVacancy} = props
    console.log(" vacancy",detailVacancy)
    return (
        <div className='container-fluid px-5 vh-100 p-0 w-100'>
        <div className='row h-100 '>
            <div className='col-lg-8 d-flex justify-content-center align-items-center'>
                <div className='container border rounded-5'>
                    <div className='row p-5 gap-5'>
                        <div className='col-12 '>
                            <h3 className='text-center mb-5'>Deksripsi Lowongan</h3>
                            <p>{detailVacancy.description}</p>
                        </div>
                        <div className='col-6'>
                            <h5>Kualifikasi</h5>
                            <ul>
                                <Qualification props={detailVacancy}/>
                            </ul>
                        </div>
                    </div>
                    <div className='row text-center'>
                        <div className='col-3'>
                            <h4>Lulusan <br></br></h4>
                            <p className='fs-6'>{detailVacancy.graduates}</p>
                        </div>
                        <div className='col-3'>
                            <h4>Jurusan <br></br></h4>
                            <p className='fs-6'> {detailVacancy.majors}</p>
                        </div>
                        <div className='col-3'>
                            <h4>Fungsi Kerja <br></br> </h4>
                            <p className='fs-6'>{detailVacancy.job_function}</p>
                        </div>
                        <div className='col-3'>
                            <h4>Pengalaman <br></br> </h4>
                            <p className='fs-6'>{detailVacancy.experiences}</p>
                        </div>
                      
                    </div>
                </div>
            </div>
            <div className='col-4 px-5 border-start'>
                <div className='pt-5'>
                    <h4 className='pt-5 text-center mb-5'>Lowongan pekerjaan lain dari  {company.companyName}</h4>
                </div>
               <OtherVacancy props={otherVacancy}/>
               {otherVacancy.length ===  0 && <div style={{
                marginTop: "120px",
                textAlign : "center"
               }}>Tidak ada lowongan lagi dari <br></br> <strong>{company.companyName} </strong> :( </div>}
            </div>
        </div>
    </div>
    )
}
export default JobDescription