'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/dashboard/Layout';
import { Avatar, Badge, Button, Dropdown, Label, Select, TextInput, Checkbox, Radio } from 'flowbite-react';
import Image from 'next/image'
import { Datepicker } from 'flowbite-react';
import { HiSearch, HiPlus, HiUser, HiUserCircle } from 'react-icons/hi';
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
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="countries" value="Procedure record" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Checkbox id="hand_scale" className="mr-2"/>
                                                        <Label htmlFor="hand_scale" value="Hand scale" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="polished" className="mr-2"/>
                                                        <Label htmlFor="polished" value="Polished" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="oral_rinse" className="mr-2"/>
                                                        <Label htmlFor="oral_rinse" value="Oral rinse" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="routine" className="mr-2"/>
                                                        <Label htmlFor="routine" value="Routine" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="extended" className="mr-2"/>
                                                        <Label htmlFor="extended" value="Extended" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex gap-x-12'>
                                    <div>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="countries" value="Calculus" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Radio id="first" className="mr-2 text-black" name="calculus" value={1} />
                                                        <Label htmlFor="first">1</Label>
                                                    </div>
                                                    <div>
                                                        <Radio id="second" className="mr-2 text-black" name="calculus" value={2} />
                                                        <Label htmlFor="second">2</Label>
                                                    </div>
                                                    <div>
                                                        <Radio id="third" className="mr-2 text-black" name="calculus" value={3} />
                                                        <Label htmlFor="third">3</Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="countries" value="Plaque" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Radio id="one" className="mr-2 text-black" name="plaque" value={1} />
                                                        <Label htmlFor="one">1</Label>
                                                    </div>
                                                    <div>
                                                        <Radio id="two" className="mr-2 text-black" name="plaque" value={2} />
                                                        <Label htmlFor="two">2</Label>
                                                    </div>
                                                    <div>
                                                        <Radio id="three" className="mr-2 text-black" name="plaque" value={3} />
                                                        <Label htmlFor="three">3</Label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3 flex items-center justify-between">
                                                <div className="block">
                                                    <p className='label-form'> Tooth abnormalities </p>
                                                </div>
                                                <Dropdown label="Add conditions" style={{background: "#16BDCA"}}>
                                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                                    <Dropdown.Item>Settings</Dropdown.Item>
                                                    <Dropdown.Item>Earnings</Dropdown.Item>
                                                    <Dropdown.Item>Sign out</Dropdown.Item>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3 flex items-center justify-between">
                                                <div className="block">
                                                    <p className='label-form'> Periodontal findings </p>
                                                </div>
                                                <Dropdown label="Add conditions" style={{background: "#16BDCA"}}>
                                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                                    <Dropdown.Item>Settings</Dropdown.Item>
                                                    <Dropdown.Item>Earnings</Dropdown.Item>
                                                    <Dropdown.Item>Sign out</Dropdown.Item>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="homw_care" value="Home care" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Checkbox id="brushing" className="mr-2"/>
                                                        <Label htmlFor="brushing" value="Brushing" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="rinsing" className="mr-2"/>
                                                        <Label htmlFor="rinsing" value="Rinsing" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="dry_food" className="mr-2"/>
                                                        <Label htmlFor="dry_food" value="Dry food" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="soft_food" className="mr-2"/>
                                                        <Label htmlFor="soft_food" value="Soft food" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="countries" value="Recommendations" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Checkbox id="vet_evaluation" className="mr-2"/>
                                                        <Label htmlFor="vet_evaluation" value="Vet evaluation" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="anesthetic_dental" className="mr-2"/>
                                                        <Label htmlFor="anesthetic_dental" value="Anesthetic dental" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="photos" value="Before & after photos" />
                                                </div>
                                                <div className='grid grid-cols-2 gap-x-4 text-center'>
                                                    <div className='flex flex-col justify-center items-center flex-shrink-0 border-dashed border-2 rounded-lg py-14'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                                            <path d="M21.3199 4.6841L21.3203 4.68455L27.9837 11.5185C28.196 11.7455 28.3155 12.0512 28.3128 12.3709C28.3101 12.692 28.1844 12.9966 27.9667 13.2199C27.7494 13.4428 27.458 13.5669 27.1562 13.5696C26.8556 13.5723 26.5636 13.4544 26.343 13.2373L22.5246 9.32126L21.6666 8.44131V9.67032V24.3467C21.6666 24.6714 21.5407 24.9804 21.3205 25.2063C21.1007 25.4317 20.8053 25.556 20.5 25.556C20.1947 25.556 19.8993 25.4317 19.6795 25.2063C19.4592 24.9804 19.3333 24.6714 19.3333 24.3467V9.67032V8.44131L18.4753 9.32126L14.6537 13.2408L14.6534 13.241C14.4336 13.4668 14.138 13.5914 13.8325 13.5916C13.5269 13.5918 13.2312 13.4677 13.0111 13.2422C12.7905 13.0163 12.6643 12.7072 12.6641 12.3822C12.6638 12.0573 12.7895 11.7481 13.0096 11.5219C13.0097 11.5218 13.0098 11.5217 13.0099 11.5216L19.6763 4.68455L19.6767 4.6841C19.7857 4.57205 19.9145 4.48385 20.0553 4.42391C20.1961 4.36398 20.3466 4.33331 20.4983 4.33331C20.65 4.33331 20.8005 4.36399 20.9413 4.42391C21.0821 4.48385 21.2109 4.57205 21.3199 4.6841ZM26 24.3467V23.992H33.8333C34.5806 23.992 35.3 24.2963 35.8323 24.8423C36.3651 25.3888 36.6666 26.1326 36.6666 26.9107V33.748C36.6666 34.5261 36.3651 35.2698 35.8323 35.8163C35.3 36.3623 34.5806 36.6666 33.8333 36.6666H7.16665C6.41934 36.6666 5.7 36.3623 5.16762 35.8163C4.63481 35.2698 4.33331 34.5261 4.33331 33.748V26.9107C4.33331 26.1326 4.63481 25.3888 5.16762 24.8423C5.7 24.2963 6.41934 23.992 7.16665 23.992H15V24.3467C15 25.8353 15.5765 27.2654 16.6065 28.3218C17.6369 29.3786 19.0372 29.9747 20.5 29.9747C21.9628 29.9747 23.3631 29.3786 24.3935 28.3218C25.4235 27.2654 26 25.8353 26 24.3467ZM27.9951 33.7283C28.4887 34.0666 29.0704 34.248 29.6666 34.248C30.4664 34.248 31.2308 33.922 31.7924 33.3461C32.3536 32.7705 32.6666 31.9926 32.6666 31.184C32.6666 30.5808 32.4923 29.9901 32.1643 29.4866C31.8361 28.9829 31.3684 28.5884 30.8189 28.355C30.2691 28.1214 29.6634 28.0601 29.079 28.1793C28.4946 28.2986 27.9596 28.5925 27.5409 29.0219C27.1223 29.4512 26.8386 29.9966 26.7238 30.5886C26.609 31.1805 26.6679 31.7941 26.8933 32.3524C27.1189 32.9108 27.5016 33.3901 27.9951 33.7283Z" fill="#9CA3AF" stroke="#9CA3AF"/>
                                                        </svg>
                                                        <div className='my-3'>
                                                            <p className='not-italic text-base font-semibold text-gray-500'> Before photo </p>
                                                            <p className='not-italic font-normal text-sm text-gray-500'> Press to upload or drag and drop </p>
                                                        </div>
                                                        <div>
                                                            <p className='not-italic font-normal text-xs text-gray-500'> JPG or PNG (Max. 800x400px) </p>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col justify-center items-center flex-shrink-0 border-dashed border-2 rounded-lg py-14'>
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                                                <path d="M21.3199 4.6841L21.3203 4.68455L27.9837 11.5185C28.196 11.7455 28.3155 12.0512 28.3128 12.3709C28.3101 12.692 28.1844 12.9966 27.9667 13.2199C27.7494 13.4428 27.458 13.5669 27.1562 13.5696C26.8556 13.5723 26.5636 13.4544 26.343 13.2373L22.5246 9.32126L21.6666 8.44131V9.67032V24.3467C21.6666 24.6714 21.5407 24.9804 21.3205 25.2063C21.1007 25.4317 20.8053 25.556 20.5 25.556C20.1947 25.556 19.8993 25.4317 19.6795 25.2063C19.4592 24.9804 19.3333 24.6714 19.3333 24.3467V9.67032V8.44131L18.4753 9.32126L14.6537 13.2408L14.6534 13.241C14.4336 13.4668 14.138 13.5914 13.8325 13.5916C13.5269 13.5918 13.2312 13.4677 13.0111 13.2422C12.7905 13.0163 12.6643 12.7072 12.6641 12.3822C12.6638 12.0573 12.7895 11.7481 13.0096 11.5219C13.0097 11.5218 13.0098 11.5217 13.0099 11.5216L19.6763 4.68455L19.6767 4.6841C19.7857 4.57205 19.9145 4.48385 20.0553 4.42391C20.1961 4.36398 20.3466 4.33331 20.4983 4.33331C20.65 4.33331 20.8005 4.36399 20.9413 4.42391C21.0821 4.48385 21.2109 4.57205 21.3199 4.6841ZM26 24.3467V23.992H33.8333C34.5806 23.992 35.3 24.2963 35.8323 24.8423C36.3651 25.3888 36.6666 26.1326 36.6666 26.9107V33.748C36.6666 34.5261 36.3651 35.2698 35.8323 35.8163C35.3 36.3623 34.5806 36.6666 33.8333 36.6666H7.16665C6.41934 36.6666 5.7 36.3623 5.16762 35.8163C4.63481 35.2698 4.33331 34.5261 4.33331 33.748V26.9107C4.33331 26.1326 4.63481 25.3888 5.16762 24.8423C5.7 24.2963 6.41934 23.992 7.16665 23.992H15V24.3467C15 25.8353 15.5765 27.2654 16.6065 28.3218C17.6369 29.3786 19.0372 29.9747 20.5 29.9747C21.9628 29.9747 23.3631 29.3786 24.3935 28.3218C25.4235 27.2654 26 25.8353 26 24.3467ZM27.9951 33.7283C28.4887 34.0666 29.0704 34.248 29.6666 34.248C30.4664 34.248 31.2308 33.922 31.7924 33.3461C32.3536 32.7705 32.6666 31.9926 32.6666 31.184C32.6666 30.5808 32.4923 29.9901 32.1643 29.4866C31.8361 28.9829 31.3684 28.5884 30.8189 28.355C30.2691 28.1214 29.6634 28.0601 29.079 28.1793C28.4946 28.2986 27.9596 28.5925 27.5409 29.0219C27.1223 29.4512 26.8386 29.9966 26.7238 30.5886C26.609 31.1805 26.6679 31.7941 26.8933 32.3524C27.1189 32.9108 27.5016 33.3901 27.9951 33.7283Z" fill="#9CA3AF" stroke="#9CA3AF"/>
                                                            </svg>
                                                        </div>
                                                        <div className='my-3'>
                                                            <p className='not-italic text-base font-semibold text-gray-500'> After photo </p>
                                                            <p className='not-italic font-normal text-sm text-gray-500'> Press to upload or drag and drop </p>
                                                        </div>
                                                        <div>
                                                            <p className='not-italic font-normal text-xs text-gray-500'> JPG or PNG (Max. 800x400px) </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="photos" value="Additional notes" />
                                                </div>
                                                <textarea className='w-full rounded-lg border-2 border-solid border-gray-300 h-44' placeholder='Write text here...'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-custom-default mt-6">
                                <div className='default-form-block flex flex-wrap'>
                                    <div className='w-full'>
                                        <div className='flex flex-wrap -mx-3'>
                                            <div className="w-full px-3">
                                                <div className="mb-4 block">
                                                    <Label className='label-form' htmlFor="homw_care" value="Next dental date" />
                                                </div>
                                                <div className='flex gap-x-3.5'>
                                                    <div>
                                                        <Checkbox id="first_period" className="mr-2"/>
                                                        <Label htmlFor="first_period" value="3 months" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="second_period" className="mr-2"/>
                                                        <Label htmlFor="second_period" value="4 months" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="third_period" className="mr-2"/>
                                                        <Label htmlFor="third_period" value="6 months" />
                                                    </div>
                                                    <div>
                                                        <Checkbox id="fourth_period" className="mr-2"/>
                                                        <Label htmlFor="fourth_period" value="1 year" />
                                                    </div>
                                                </div>
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