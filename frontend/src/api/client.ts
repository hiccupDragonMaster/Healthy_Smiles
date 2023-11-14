import axios from "axios";
import { API_BASE_URL } from '@/config/config';

import { AddClientType } from '@/types/Client';
import { AddPetType } from "@/types/Pet";

export const addClient = async (clientData: AddClientType | null, petData: AddPetType) => {
    return await axios.post( API_BASE_URL + 'addClient', {clientData: clientData, petData: petData});
}