import axios from "axios";

const BaseURL = "http://127.0.0.1:5000/api/v1/"

const token = () => { return localStorage.getItem("token") };

const AuthHttpClient = axios.create({
    baseURL: BaseURL,
    headers: { "Authorization": `Berrar ${token}` }

})

export default AuthHttpClient