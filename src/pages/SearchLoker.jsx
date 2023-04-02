import NavigationBar from "../components/NavigationBar"
import search from "../assets/search.png"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {  useNavigate } from "react-router-dom";
import Footer from "../components/MyFooter";
import province from "../province";
import {useEffect, useState} from 'react'
import searchInput from "../assets/search-interface-symbol.png"
import axios from "axios";
import DisplayCard  from "../components/Card"
const SearchLoker = () => {
    const navigate = useNavigate
    const [loker,setLoker] = useState(null)
    const [provinsi,setProvinsi] =  useState('Seluruh provinsi')

    const Province = ({props}) => {
        return props.map((val,i) => {
            return (
                <option value={val.nama} key={i} >{val.nama}</option>
            )
        })
    }

    const [vacancyResult,setVacancyResult] = useState(null)
    const [allVacancy,setAllVacancy] = useState(null)
    const endpoint ="http://localhost:8000/search"
    useEffect(() => {
        axios.get(endpoint)
        .then(res => {
                setAllVacancy(res.data)
        })
        .catch(err => console.log(err))
    },[])
    
    const HandleInput = e => {
        if(e.target.value){
            setLoker( e.target.value)
        }
        else{
            setLoker(null)
            setVacancyResult(null)
        } 
    }   
    
    
    const HandleSearch =() => {
            const endpoint = `http://localhost:8000/search/${loker}/${provinsi}`
            axios.get(endpoint)
            .then(res => {
                setVacancyResult(res.data)
            })
            .catch(err => {
                
            })
    }

    return (
        <div>
            <div>
                <NavigationBar />
            </div>
            <div className="container-fluid margin vh-100">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 text-center pt-5  mt-5 ">
                        <h1 className="font fw-bold f-color">Temukan Pekerjaan<br></br> Impian Anda</h1>
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={search} className='w-75 img-fluid' />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <InputGroup className="mb-3 tinggi d-flex mx-auto">
                            <Form.Control aria-label="Search input with dropdown button" type="search" placeholder="Cari lowongan pekerjaan......" className="w-50 rounded-pill" onChange={HandleInput} />
                            <Form.Select aria-label="Default select example" className="rounded-pill mx-2 "  onChange={(e) => setProvinsi(e.target.value)} value={provinsi}> 
                                <Province props={province} />
                            </Form.Select>
                                <img src={searchInput}  style={{width : "30px",height : '30px',marginTop: '12px'}} onClick={loker && HandleSearch}></img>
                        </InputGroup>
                    </div>
                </div>
            </div>

            <div className="container-fluid ">
                <div className="container mt-5 ">
                    <div className="row">
                    {vacancyResult  && <DisplayCard props={vacancyResult}/>}
                    {!vacancyResult && allVacancy && <DisplayCard props={allVacancy}/>}
                    {vacancyResult?.data?.length === 0 && <div className="text-center fs-5 mt-5">Lowongan yang anda cari tidak ditemukan :(</div>}
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )   
}

export default SearchLoker