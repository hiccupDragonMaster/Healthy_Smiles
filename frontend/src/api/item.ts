import axios from "axios";
import { API_BASE_URL } from '@/config/config';

export const getGender = async (authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'getGender', {authToken: authToken});
}

export const getAge = async (authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'getAge', {authToken: authToken});
}

export const getSize = async (authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'getSize', {authToken: authToken});
}

export const getBreed = async (id: number, authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'getBreed', {id: id, authToken: authToken});
}