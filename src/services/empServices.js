import axiosInstance from "../components/AxiosInstance/Instance"

let empServices={
    regiUser : async(payload)=>{
        try{
            let data= await axiosInstance.post('/register', payload);
            return data
        }
        catch(error){
            console.log(error)
        }
    },
    loginUser : async(payload)=>{
        try{
            let data= await axiosInstance.post('/login', payload);
            return data
        }
        catch(error){
            console.log(error)
        }
    }
}
export default empServices