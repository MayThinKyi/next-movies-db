import apiClient from "./api-client";

// Movie service functions
 const movieService={
    //Movies 20 List Grid
    async getMovies(url:string){
        try {
            const {data}=await apiClient.get<IMovieResponse>(url)
            return data;
        } catch (error) {
            console.log('error',error)
        }
    },
    //Movie Details
    async getMovie(url:string){
        try {
            const {data}=await apiClient.get<IMovieDetails>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        }
    },
    //Movie Details Perosn (Director, actors)
    async getMoviePerson(url:string){
        try {
            const {data}=await apiClient.get<IMoviePersonResponse>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        }
    },
    async getMovieImages(url:string){
        try {
            const {data}=await apiClient.get<IMovieImageResponse>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        }
    },
    async getMovieWatchProviders(url:string){
        try {
            const {data}=await apiClient.get<IWatchProviderResponse>(url);
            return data;
        } catch (error) {
            console.log('error',error)
        } 
    },
    async getVideos(url:string){
        try {
         const {data}=await apiClient.get<IMovieVideoResponse>(url);  
         return data; 
        } catch (error) {
            console.log('error',error)
        }
    }
     
}

export default movieService;