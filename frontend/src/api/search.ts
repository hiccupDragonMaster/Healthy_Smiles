import axios from "axios";
import { API_BASE_URL } from '@/config/config';

export const searchClient = async (searchTerm: string, authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'searchClient', {searchTerm: searchTerm, authToken: authToken});
}