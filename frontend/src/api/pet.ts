import axios from "axios";
import { API_BASE_URL } from '@/config/config';

import { AddPetType } from '@/types/Pet';

export const addNewPet = async (petData: AddPetType, id: number | undefined, authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'addNewPet', {petData: petData, id: id, authToken: authToken});
}

export const selectedClientPet = async (client_id: number, authToken: string | null) => {
    return await axios.post( API_BASE_URL + 'selectedClientPet', { client_id: client_id, authToken: authToken } );
}