import axios from "axios";

export default axios.create({
    baseURL: 'https://38103.fullstack.clarusway.com',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});
