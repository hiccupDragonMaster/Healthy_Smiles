'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/dashboard/Layout';
import SelectClient from '@/components/dental-report/client/SelectClient';
import SelectedClient from '@/components/dental-report/client/SelectedCllient';
import NewClient from '@/components/dental-report/client/NewClient';
import AddPet from '@/components/pet/AddPet';
import { AddClientType, Client } from '@/types/Client';
import { Button } from 'flowbite-react';
import { AddPetType, ResponsePetType } from '@/types/Pet';

import { addClient } from '@/api/client';
import { searchClient } from '@/api/search';
import { addNewPet, selectedClientPet } from '@/api/pet';

const ClientDentalReport = () => {
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);
    const [createClient, setCreateClient] = useState(false);
    const [createPet, setCreatePet] = useState(false);
    const [clients, setClients] = useState<Client[]>([]);
    const [pets, setPets] = useState<ResponsePetType[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingClients, setisLoadingClients] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [clientData, setClientData] = useState<AddClientType>({
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    });

    const [petData, setPetData] = useState<AddPetType>({
        name: '',
        pet_type_id: 1,
        breed_id: 0,
        size_id: 0,
        age_id: 0,
        pet_gender: 0
    });
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('authToken');
        if (!user) {
            router.push('/');
        } else {
            setIsLogged(true);
        }
    }, [router]);

    useEffect(() => {
        setIsLoading(true);
    }, []);

    const handleContinue = () => {
        console.log("Continue clicked");
        router.push('/dental-report/create');
    }

    const handleCreateClient = () => {
        setCreateClient(!createClient);
    }

    const handleCreatePet = () => {
        setCreatePet(!createPet);
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            setClients([]);
            return;
        }
        // Simulate loading
        setisLoadingClients(true);

        // This is a simulated fetch with a timeout to mimic an async call.
        setTimeout(async () => {
            const searchResult = await searchClient(value);

            setClients(searchResult.data.result);
            setisLoadingClients(false);
        }, 1000); // 1 second delay to simulate loading
    };

    // Function to select a client
    const handleClientSelect = async (client: Client) => {
        console.log('Selected client:', client);
        // localStorage.setItem('selectedClientId', client.id);
        const selectedClientPetResult = await selectedClientPet(client.id);
        setPets(selectedClientPetResult.data.result);
        setSelectedClient(client);
    };

    // Function to clear the selected client
    const handleClearSelectedClient = () => {
        setSelectedClient(null);
    };

    const handleCancel = () => {
        setCreatePet(!createPet);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setClientData((prevData: AddClientType) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handlePetNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setPetData((prevData: AddPetType) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handlePetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {name, value} = event.target;
        setPetData((prevData: AddPetType) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handlePetTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setPetData((prevData: AddPetType) => ({
            ...prevData,
            [name]: value
        }));
    }

    const addNewClient = async () => {
        const result = await addClient(clientData, petData);
        if (result.data.result == 0) {
            console.log("already exist registered user");
        } else {
            console.log("Successful");
        }
    }

    const handleAddPetChange = async () => {
        const result = await addNewPet(petData, selectedClient?.id);
        setPets(prevItems => [...prevItems, result.data.result]);
        handleCancel();
    }

    //Component to show "search" clients
    const SelectClientContent = () => {
        return (
            <SelectClient
                clients={clients}
                searchTerm={searchTerm}
                isLoadingClients={isLoadingClients}
                handleSearchChange={handleSearchChange}
                handleContinue={handleContinue}
                handleClientSelect={handleClientSelect} // Add this line
                handleCreateClient={handleCreateClient}
            />
        )
    }

    //Component to show the selected client
    const SelectedClientContent = () => {
        return (
            <SelectedClient
                pets={pets}
                selectedClient={selectedClient}
                searchTerm={searchTerm}
                isLoadingClients={isLoadingClients}
                handleSearchChange={handleSearchChange}
                handleContinue={handleContinue}
                handleClearSelectedClient={handleClearSelectedClient} // Add this line
                handleCreatePet={handleCreatePet}
            />
        )
    }

    const CreateClientContent = () => {
        return (
            <NewClient 
                clientData = {clientData}
                petData = {petData}
                handleChange = {handleChange}
                handlePetNameChange = {handlePetNameChange}
                handlePetChange = {handlePetChange}
                handlePetTypeChange = {handlePetTypeChange}
            />
        )
    }

    const AddPetContent = () => {
        return (
            <AddPet
                petData = {petData}
                handleCancel={handleCancel}
                handlePetNameChange = {handlePetNameChange}
                handlePetChange = {handlePetChange}
                handlePetTypeChange = {handlePetTypeChange}
                handleAddPetChange = {handleAddPetChange}
            />
        )
    }

    //page content
    const content = (
        <div className='hide-scrollbar overflow-auto h-5/6'>
            <div className='flex justify-between items-center p-6'>
                <div className="flex justify-center w-full">
                    <div className="w-full md:w-6/12 lg:w-4/12 md:mx-auto mt-8 container-inner-centered">
                        {createClient ? CreateClientContent() : (selectedClient ? SelectedClientContent() : SelectClientContent())}
                        {/* {selectedClient ? SelectedClientContent() : SelectClientContent()} */}
                    </div>
                </div>
            </div>
            <div className={`${createClient ? 'justify-between' : 'justify-end'} flex p-5 border items-center fixed bottom-0 left-0 w-full bg-white`}>
                {createClient && 
                    <Button
                        size={'lg'}
                        color="light"
                        className='button-action'
                    >
                        Back
                    </Button>
                }
                {createClient 
                    ?
                    <Button
                        size={'lg'}
                        className='bg-teal-400 transition-all duration-300'
                        onClick={addNewClient}
                    >
                        Continue
                    </Button>
                    :
                    <Button
                        size={'lg'}
                        className='bg-teal-400 transition-all duration-300'
                        onClick={handleContinue}
                    >
                        Continue
                    </Button>
                }
                
            </div>
        </div>
    );

    return (
        <>
            {isLoading && isLogged && (
                <div>
                    <Layout showSidebar={false} navbarType='simple' exitLink={'/dental-report'} titleNav='New dental report'>
                        {content}
                    </Layout>
                    {createPet && AddPetContent()}
                </div>
            )}
            
        </>
    );
};

export default ClientDentalReport;