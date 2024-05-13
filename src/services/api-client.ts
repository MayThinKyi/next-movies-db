import axios from "axios";

const apiClient=axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_ACCESS_TOKEN}`
       },
})

export default apiClient;