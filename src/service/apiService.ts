import axios from 'axios';
// Se crea instancia http con valores default
 const httpInstance = axios.create( {
    baseURL: 'http://localhost:3000/api/'
});

export default httpInstance