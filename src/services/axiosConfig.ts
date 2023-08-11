import axios from 'axios';

export const axiosConfig = axios.create({
    baseURL: 'https://api.novaposhta.ua/v2.0/json/',
    headers: { 'Content-Type': 'application/json' }
});
