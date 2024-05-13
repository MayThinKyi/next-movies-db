import apiClient from "./api-client";


const multiService={
    async getMultiData(url:string){
        try {
            const {data}=await apiClient.get<IMultiResponse>(url)
            return data;
        } catch (error) {
            console.log('error',error)
        }
    }
}

export default multiService;