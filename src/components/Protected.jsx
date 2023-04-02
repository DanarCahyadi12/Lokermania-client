import axios from "axios";
import { Outlet,Navigate } from "react-router-dom";
import { useState} from "react"

const Protected = () => {
    const [isAuth,setIsAuth] = useState(null)
        axios.get("http://localhost:8000/get-token")
        .then(response => {
            if(response.status === 200) setIsAuth(true)
        })
        .catch((err) => {
            if(err) setIsAuth(false)
        })
    if(isAuth !==  null) {
        return isAuth ? (<Outlet/>) : (<Navigate to={"/login"}/>)
    }

}

export default Protected