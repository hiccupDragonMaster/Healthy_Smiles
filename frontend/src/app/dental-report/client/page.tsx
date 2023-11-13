'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/dashboard/Layout';
import SelectClient from '@/components/dental-report/client/SelectClient';
import SelectedClient from '@/components/dental-report/client/SelectedCllient';
import NewClient from '@/components/dental-report/client/NewClient';
import AddPet from '@/components/pet/AddPet';
import { Client } from '@/types/Client';
import { Button } from 'flowbite-react';

const ClientDentalReport = () => {
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);
    const [createClient, setCreateClient] = useState(false);
    const [createPet, setCreatePet] = useState(false);
    const [clients, setClients] = useState<Client[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingClients, setisLoadingClients] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
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
        setTimeout(() => {
            const simulatedClients: Client[] = [
                { id: 1, first_name: 'Alice', last_name: 'Morlan', email: 'alice@example.com', phone: '756-7888-987' },
                { id: 2, first_name: 'Bob', last_name: 'Smith', email: 'bob@example.com' }
            ];

            setClients(simulatedClients);
            setisLoadingClients(false);
        }, 1000); // 1 second delay to simulate loading
    };

    // Function to select a client
    const handleClientSelect = (client: Client) => {
        console.log('Selected client:', client);
        setSelectedClient(client);
    };

    // Function to clear the selected client
    const handleClearSelectedClient = () => {
        setSelectedClient(null);
    };

    const handleCancel = () => {
        setCreatePet(!createPet);
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
            <NewClient />
        )
    }

    const AddPetContent = () => {
        return (
            <AddPet 
                handleCancel={handleCancel}
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
                <Button
                    size={'lg'}
                    className='bg-teal-400 transition-all duration-300'
                    onClick={handleContinue}
                >
                    Continue
                </Button>
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