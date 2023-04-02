import { useState,useEffect } from "react"
import axios from 'axios'
const UseFetch =  endpoint => {
    const [datas,setDatas] = useState([])
    const [pending,setPending] = useState(true)
    const [error,setError] = useState(false)

    useEffect(() => {
        axios.get(endpoint)
        .then(res => {
            if(res.status === 200) {
                setDatas(res.data)
                setPending(false)
            }
        })
        .catch(err => {
            if(err) setError(err.response)
        })
    },[])

    return {datas,pending,error}
}
export default UseFetch