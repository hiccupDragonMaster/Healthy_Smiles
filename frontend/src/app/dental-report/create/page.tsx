'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/dashboard/Layout';
import { Avatar, Badge, Button, Dropdown, Label, Select, TextInput } from 'flowbite-react';
import Image from 'next/image'
import { Datepicker } from 'flowbite-react';
import { HiSearch, HiPlus, HiUser, HiUserCircle } from 'react-icons/hi';
import { Checkbox } from 'flowbite-react';
import CustomPagination from '@/components/ui/CustomPagination';


// Define an interface for the client
interface Client {
    name: string;
    email: string;
}

const CreateDentalReport = () => {
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
        console.log("Continue clicked")
    }

    const handleBack = () => {
        console.log("Back clicked")
    }

    // Your page content
    const content = (
        <>
            <div className='flex justify-between items-center pl-8 pr-8 pt-8 pb-10'>
                <div className="flex justify-center w-full">
                    <div className="container max-w-[1300px] mx-auto flex flex-col md:flex-row">
                        {/* Left Column */}
                        <div className="md:w-8/12 lg:w-7/12 lg:pr-10">
                            <div className='report-head flex justify-between'>
                                <div className="report-pet-info">
                                    <h3 className='text-lg font-medium mb-1'>Archer <Badge className="inline-flex ml-1" size="sm" color="dog">Dog</Badge></h3>
                                    <p className='text-gray-500 text-sm font-regular'>Calico · Small </p>
                                </div>
                                <div className='report-pet-parent-info flex'>
                                    <Avatar className="mr-2 avatar-client-info" size={"lg"} placeholderInitials={"RR"} rounded color="purple" />
                                    <div className="inline-flex items-start flex-col justify-center">
                                        <h3 className="text-gray-900 text-lg font-medium">
                                            Rita Reuter
                                        </h3>
                                        <p className="text-gray-500 font-regurlar text-sm">
                                            rita@gmail.com · 7861234567
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-default mt-6">
                                <div className="default-form-block flex flex-wrap">
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full mb-5 px-3">
                                                <div className="mb-2 block">
                                                    <Label className='label-form' htmlFor="countries" value="Select staff" />
                                                </div>
                                                <Select id="countries" required>
                                                    <option>John Doe</option>
                                                    <option>Jame Hetfield</option>
                                                    <option>Bruce dickinson</option>
                                                    <option>Katy Perry</option>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                <div className="mb-2 block">
                                                    <Label className='label-form' value="Appointment Date" />
                                                </div>
                                                <Select id="countries" required>
                                                    <option>John Doe</option>
                                                    <option>Jame Hetfield</option>
                                                    <option>Bruce dickinson</option>
                                                    <option>Katy Perry</option>
                                                </Select>
                                            </div>
                                            <div className="w-full md:w-1/2 px-3">
                                                <div className="mb-2 block">
                                                    <Label className='label-form' value="Location" />
                                                </div>
                                                <Select id="countries" required>
                                                    <option>Miami</option>
                                                    <option>Plantation</option>
                                                    <option>Fort Lauderdale</option>
                                                    <option>Texas</option>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:w-4/12 lg:w-5/12 md:ml-4">
                            <div className="teeth-image-wrapper flex justify-center">
                                <Image src={'/images/dog-teeth.png'} alt="Dog teeth" width={300} height={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex p-5 border justify-between items-center fixed bottom-0 left-0 w-full bg-white screen-bottom-actions'>
                <Button 
                    href='/dental-report/client'
                    size={'lg'}
                    color="light"
                    className='button-action'
                    onClick={handleBack}>
                        Back
                </Button>

                <Button
                    size={'lg'}
                    className='bg-teal-400 button-action transition-all duration-300'
                    onClick={handleContinue}
                >Create report</Button>
            </div>
        </>

    );

    return (
        <>
            {isLoading && isLogged && (
                <Layout showSidebar={false} navbarType='simple' exitLink={'/dental-report'} bottomNav={true}>
                    {content}
                </Layout>
            )}
        </>
    );
};

export default CreateDentalReport;