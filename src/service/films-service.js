import store from "@/store";
import axios from "axios";


export async function  getFilms() {
    const films = await axios.get('http://localhost:3000');
 store.dispatch('filmList', films.data);
    
}

