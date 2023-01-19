import axios from "axios";

//URL da Api https://api.themoviedb.org/3/movie/now_playing?api_key=5041182d4efc5683067f5cc54631a157
//Base da URL  https://api.themoviedb.org/3

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;