import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://react-organizer-app.herokuapp.com/api/"
})