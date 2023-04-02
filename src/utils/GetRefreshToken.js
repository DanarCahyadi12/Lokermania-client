import axios from "axios"

const GetRefreshToken = async () => {
    const endpoint = `http://localhost:8000/get-token`
    const response =await axios.get(endpoint)
    if(response && response.status === 200) {
        return  response.data.accesToken
    }else if(response){
        return  response
    } 

  
}

export default GetRefreshToken