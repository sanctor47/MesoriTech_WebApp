import axios from "axios";

const BaseURL = "http://3.75.214.66:5000/api/v1/"
// const BaseURL = "http://127.0.0.1:5000/api/v1/"

const HttpClient = axios.create({
    baseURL: BaseURL,
})

export default HttpClient