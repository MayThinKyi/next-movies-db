import apiClient from "./api-client";

const tvService={
    async getTvs(url:string){
        try {
            const {data}=await apiClient.get<ITVResponse>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        }
    },
    async getTv(url:string){
        try {
            const {data}=await apiClient.get<ITvDetails>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        }
    },
    async getVideos(url:string){
        try {
            const {data}=await apiClient.get<ITvVideoResponse>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        }
    },
    async getTvPerson(url:string){
        try {
            const {data}=await apiClient.get<IMoviePersonResponse>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        }
    },
    async getTvImages(url:string){
        try {
            const {data}=await apiClient.get<IMovieImageResponse>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        }
    },
    async getTvWatchProviders(url:string){
        try {
            const {data}=await apiClient.get<ITvWatchProviderResponse>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        } 
    },
    async getEpisodes(url:string){
        try {
            const {data}=await apiClient.get<ITvVideoResponse>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        } 
    }
     
}

export default tvService;