import axios from "axios"
import { useState } from "react"


const useFetch = (urlBase) => {

    const [infoApi, setInfoApi] = useState()

//................................................READ

const getApi =(path)=>{
    const url = `${urlBase}${path}/`
    axios.get(url)
    .then(res => setInfoApi(res.data))
    .catch(err =>console.log(err))
} 
//............................................. CREATE
const createNewRegister = (path, data)=>{
   const url = `${urlBase}${path}/`
   axios.post(url, data)
   .then(res => {
        console.log(res.data)
        setInfoApi([...infoApi, res.data])    
    })
   .catch(err=> console.log(err))
}
//..............................................DELETE
const deleteRegisterByApi = (path, id)=>{
    const url = `${urlBase}${path}/${id}/`
    axios.delete(url)
    .then(res =>{
        console.log(res.data)
        const infoApiFiltered = infoApi.filter( element => element.id !== id )
       setInfoApi(infoApiFiltered)
    })  
    .catch(err =>console.log(err))
}
//..............................................UPDATE
const updateRegister = (path, id, data)=>{
    const url = `${urlBase}${path}/${id}/`
    axios.put(url, data)
    .then(res => {
        console.log(res.data)
        const infoApiUpdate = infoApi.map(element => {

// si id es igual a element.id retornamos el data, si no retornamos y los otros elementos lo dejamos igual

            if(id === element.id){
                return data
            }else{
                return element
            }
        })
        setInfoApi(infoApiUpdate)
    })
    .catch(err =>console.log(err))
}

return [infoApi, getApi, createNewRegister, deleteRegisterByApi, updateRegister  ]
 
}

export default useFetch