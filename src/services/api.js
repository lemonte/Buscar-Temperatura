import axios from "axios";
const api = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5",
    //exp://192.168.137.1:19000
    //192.168.137.1  
})
export default api;