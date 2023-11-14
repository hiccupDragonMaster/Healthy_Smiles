import axios from "axios";
import { API_BASE_URL } from '@/config/config';

export const getGender = async () => {
    return await axios.post( API_BASE_URL + 'getGender');
}

export const getAge = async () => {
    return await axios.post( API_BASE_URL + 'getAge');
}

export const getSize = async () => {
    return await axios.post( API_BASE_URL + 'getSize');
}

export const getBreed = async (id: number) => {
    return await axios.post( API_BASE_URL + 'getBreed', {id: id});
}