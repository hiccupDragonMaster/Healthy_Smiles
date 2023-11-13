import { Avatar, Badge, Button, Select, TextInput } from "flowbite-react";
import { HiSearch, HiPlus, HiUserCircle } from 'react-icons/hi';
import { Label, Radio } from 'flowbite-react';
import { Client } from '@/types/Client';
import { getInitials } from '@/app/utils/Helpers';


interface Props {
    handleCancel: () => void;
}

export default function AddPet(props: Props) {

    return (
        <>
            <div className='absolute bg-black bg-opacity-30 top-0 left-0 w-full h-full'></div>
            <div className="fixed top-0 right-0 bg-gray-50 h-full p-5 w-84">
                <div className='flex justify-between items-center'>
                    <p className='font-normal text-gray-900 text-lg font-addPet font-semibold'> Add pet </p>
                    <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" onClick={props.handleCancel}>
                        <path d="M13.4263 12.5123L18.7193 7.21929C18.8148 7.12704 18.891 7.0167 18.9434 6.89469C18.9958 6.77269 19.0234 6.64147 19.0245 6.50869C19.0257 6.37591 19.0004 6.24423 18.9501 6.12133C18.8998 5.99844 18.8256 5.88679 18.7317 5.79289C18.6378 5.699 18.5261 5.62475 18.4032 5.57447C18.2803 5.52419 18.1487 5.49888 18.0159 5.50004C17.8831 5.50119 17.7519 5.52878 17.6299 5.58119C17.5079 5.6336 17.3975 5.70978 17.3053 5.80529L12.0123 11.0983L6.71929 5.80529C6.53069 5.62313 6.27808 5.52234 6.01589 5.52461C5.75369 5.52689 5.50288 5.63206 5.31747 5.81747C5.13206 6.00288 5.02689 6.25369 5.02461 6.51589C5.02234 6.77808 5.12313 7.03069 5.30529 7.21929L10.5983 12.5123L5.30529 17.8053C5.20978 17.8975 5.1336 18.0079 5.08119 18.1299C5.02878 18.2519 5.00119 18.3831 5.00004 18.5159C4.99888 18.6487 5.02419 18.7803 5.07447 18.9032C5.12475 19.0261 5.199 19.1378 5.29289 19.2317C5.38679 19.3256 5.49844 19.3998 5.62133 19.4501C5.74423 19.5004 5.87591 19.5257 6.00869 19.5245C6.14147 19.5234 6.27269 19.4958 6.39469 19.4434C6.5167 19.391 6.62704 19.3148 6.71929 19.2193L12.0123 13.9263L17.3053 19.2193C17.4939 19.4014 17.7465 19.5022 18.0087 19.5C18.2709 19.4977 18.5217 19.3925 18.7071 19.2071C18.8925 19.0217 18.9977 18.7709 19 18.5087C19.0022 18.2465 18.9014 17.9939 18.7193 17.8053L13.4263 12.5123Z" fill="#111928"/>
                    </svg>
                </div>
                <p className='text-gray-900 font-normal mt-5 mb-4 font-addPet font-medium'>Pet type</p>
                <div className="flex gap-x-5">
                    <div>
                        <Radio id="dog" className="mr-2 text-black" name="pet" value="dog" defaultChecked />
                        <Label htmlFor="dog">Dog</Label>
                    </div>
                    <div>
                        <Radio id="cat" className="mr-2 text-black" name="pet" value="cat" />
                        <Label htmlFor="cat">Cat</Label>
                    </div>
                </div>
                <div className='mt-5'>
                    <Label className='label-form' htmlFor="pet_name" value="Pet name" />
                    <TextInput id="pet_name" className="mt-2" type="text" required/>
                </div>
                <div className="mt-3">
                    <Label className='label-form' htmlFor="genre" value="Genre" />
                    <Select id="genre" className="mt-2" required>
                        <option value="US">Select an option</option>
                    </Select>
                </div>
                <div className="mt-3">
                    <Label className='label-form' htmlFor="size" value="Size" />
                    <Select id="size" className="mt-2" required>
                        <option value="US">Select an option</option>
                    </Select>
                </div>
                <div className="mt-3">
                    <Label className='label-form' htmlFor="breed" value="Breed" />
                    <Select id="breed" className="mt-2" required>
                        <option value="US">Select an option</option>
                    </Select>
                </div>
                <div className="mt-3">
                    <Label className='label-form' htmlFor="age" value="Age" />
                    <Select id="age" className="mt-2" required>
                        <option value="US">Select an option</option>
                    </Select>
                </div>
                <Button className="bg-teal-400 transition-all duration-300 fixed bottom-5 w-addPetButton">
                    Add pet
                </Button>
            </div>
        </>
    )
}