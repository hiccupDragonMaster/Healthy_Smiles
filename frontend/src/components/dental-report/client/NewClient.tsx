import { Button, Label, TextInput, Select, Radio } from "flowbite-react";
import { HiSearch, HiPlus, HiUserCircle } from 'react-icons/hi';
import { Client } from '@/types/Client';



export default function NewClient() {

    return (
        <>
            <h3 className='text-xl font-medium mb-1'>New client</h3>
            <p className='text-gray-500 font-normal'>Enter the client's personal information.</p>
            <div className='mt-5 grid gap-x-4 grid-cols-2'>
                <div>
                    <Label className='label-form' htmlFor="first_name" value="First Name" />
                    <TextInput id="first_name" className="mt-2" type="text" required/>
                </div>
                <div>
                    <Label className='label-form' htmlFor="last_name" value="Second Name" />
                    <TextInput id="last_name" className="mt-2" type="text" required/>
                </div>
            </div>
            <div className='mt-3'>
                <Label className='label-form' htmlFor="email" value="Email" />
                <TextInput id="email" type="email" className="mt-2" required/>
            </div>
            <div className='mt-3'>
                <Label className='label-form' htmlFor="phone_number" value="Phone number" />
                <div className="grid grid-cols-4 gap-x-4">
                    <div className="col-span-1">
                        <Select id="countries" className="select-option font-addPet mt-2" required>
                            <option value="US">US</option>
                            <option value="CA">CA</option>
                            <option value="FR">FR</option>
                            <option value="DE">DE</option>
                        </Select>
                    </div>
                    <div className="col-span-3">
                        <TextInput id="phone_number" className="mt-2" type="tel" required/>
                    </div>
                </div>
            </div>
            <div className="border-t my-10" />
            <h3 className='text-xl font-medium mb-1'>Add pet</h3>
            <p className='text-gray-500 font-normal'>Enter the pet imformation.</p>
            <p className='mt-6 mb-4 text-500 font-normal'>Pet type</p>
            
            <div className="flex gap-x-4">
                <div>
                    <Radio id="dog" className="mr-2 text-black" name="pet" value="dog" defaultChecked />
                    <Label htmlFor="dog">Dog</Label>
                </div>
                <div>
                    <Radio id="cat" className="mr-2 text-black" name="pet" value="cat" />
                    <Label htmlFor="cat">Cat</Label>
                </div>
            </div>
            
            <div className='mt-3'>
                <Label className='label-form' htmlFor="pet_name" value="Pet name" />
                <TextInput id="pet_name" className="mt-2" type="text" required/>
            </div>
            <div className='mt-3 grid gap-4 grid-cols-2'>
                <div>
                    <Label className='label-form' htmlFor="genre" value="Genre" />
                    <Select id="genre" className="mt-2" required>
                        <option className="select-option font-addPet" value="US">Select an option</option>
                    </Select>
                </div>
                <div>
                    <Label className='label-form' htmlFor="size" value="Size" />
                    <Select id="size" className="mt-2" required>
                        <option className="select-option font-addPet" value="US">Select an option</option>
                    </Select>
                </div>
                <div>
                    <Label className='label-form' htmlFor="breed" value="Breed" />
                    <Select id="breed" className="mt-2" required>
                        <option className="select-option font-addPet" value="US">Select an option</option>
                    </Select>
                </div>
                <div>
                    <Label className='label-form' htmlFor="age" value="Age" />
                    <Select id="age" className="mt-2" required>
                        <option className="select-option font-addPet" value="US">Select an option</option>
                    </Select>
                </div>
            </div>
        </>
    )
}