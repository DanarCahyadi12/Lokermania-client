import axios from "axios"

const GetUserAPI = async() => {
        const endpoint = 'http://localhost:8000/get-user'
        const token= await GetToken()
        const response=  await axios.get(endpoint,{headers : {Authorization : `Bearer ${token.data.accesToken }`}})
        return await new Promise((solve,reject) => {
            if(response.status === 200) solve(response.data)
            else reject(response)
        })
}

const GetToken = async() => {
        const endpoint = "http://localhost:8000/get-token"
        return await axios.get(endpoint)
        
}

const GetUser = async () => {
    return await GetUserAPI()
}
export default GetUser