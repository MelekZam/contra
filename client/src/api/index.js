import axios from 'axios';

const url = 'http://localhost:5000';

export const signup = async (user) => await axios.post(`${url}/signup`, user);

export const signin = async (user) => {
    try {
        return await axios.post(`${url}/signin`, user);
    } catch (error) {
        return error.response.data
    }
}
