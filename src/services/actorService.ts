import apiClient from "./api-client";

const actorService={
    async getPerson<T>(url:string){
        try {
            const {data}=await apiClient.get<T>(url)
            return data;
        } catch (error) {
            console.log('error',error)
        }
    }
    
}

export default actorService;