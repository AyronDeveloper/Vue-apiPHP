import axios from "axios"
import { ref } from "vue"

const apiUrl=ref("http://localhost/proyectos/SistemasWeb/ComidaAzar/apiPHP/")
const data=ref(null)

export const useGetData=(get=null)=>{
    if(get==null){
        const fetch=async()=>{
            const response= await axios.get(apiUrl.value)
            data.value=response.data
        }
        fetch()
    }else{
        const id=`?id=${get}`
        const fetch=async()=>{
            const response= await axios.get(apiUrl.value+id)
            data.value=response.data
        }
        fetch()
    }
    

    return{
        data
    }
}