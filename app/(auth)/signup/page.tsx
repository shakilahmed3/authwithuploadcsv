'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Input } from "@nextui-org/react";
import Link from 'next/link';
import { useAppDispatch } from '@/redux/store/hooks';
import { useRouter } from 'next/navigation';
import { setUser } from '@/redux/features/user-slice';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    nid: string;
    dob: string;
    password: string;
}

export interface Errors {
    allFields?: string;
    firstName?: string;
    lastName?: string;
    dob?: string;
    nid?: string;
    mobile?: string;
    email?: string;
    password?: string;
}

const Signup: React.FC = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        nid: '',
        dob: '',
        password: '',
    });

    const [errors, setErrors] = useState<Errors>({});
    const [singupError, setSignupError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    function generateRandomString(length: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters.charAt(randomIndex);
        }

        return randomString;
    }


    // Function to set a cookie
    function setCookie(name: string, value: string, daysToExpire: number) {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + daysToExpire);

        var cookieString = name + "=" + encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString() + "; path=/";

        // Set the cookie
        document.cookie = cookieString;
    }


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: Errors = {};

        if (!formData.firstName) {
            newErrors.firstName = 'First Name is required';
        }
        if (!formData.lastName) {
            newErrors.lastName = 'Last Name is required';
        }
        if (!formData.dob) {
            newErrors.dob = 'Date of Birth is required';
        }


        // Validate National ID format
        const nidRegex = /^[0-9]{10}(?:[0-9]{3})?(?:[0-9]{4})?$/;
        if (!nidRegex.test(formData.nid)) {
            newErrors.nid = 'Invalid NID format';
        }

        // Validate Bangladeshi phone number format
        const phoneRegex = /^01[3-9][0-9]{8}$/;
        if (!phoneRegex.test(formData.mobile)) {
            newErrors.mobile = 'Invalid Bangladeshi phone number format';
        }

        // Validate email format (basic validation)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        // Validate password (basic validation)
        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        setErrors(newErrors);
        // If there are no errors, you can proceed with form submission
        if (Object.keys(newErrors).length === 0) {

            setLoading(true)
            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    setLoading(false)
                    setSignupError(false)
                    if (data.success === true) {
                        setCookie('authToken', generateRandomString(15), 30);
                        setCookie('role', data.user.role, 30);
                        router.push(`/${data.user.role}`)
                        dispatch(setUser(data.user))
                        localStorage.setItem('user', JSON.stringify(data.user))
                    }
                }).catch(err => {
                    console.log(err)
                    setSignupError(true)
                    setLoading(false)
                })
        }
    };

    return (
        <>
            <div className="h-[100%] min-h-[100vh]">
                <form onSubmit={handleSubmit}>
                    <div className="pr-10 ps-10 pt-[15vh] pb-[15vh] w-[100%] max-w-[600px] m-auto">
                        <h1 className='text-center mb-8 font-bold text-[30px]'>Sign Up</h1>
                        {errors.allFields && <p className="text-red-500">{errors.allFields}</p>}
                        <div className="pb-6">
                            <Input
                                placeholder="Enter First Name"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

                        </div>
                        <div className="pb-6">
                            <Input
                                placeholder="Enter Last Name"
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

                        </div>
                        <div className="pb-6">
                            <Input
                                placeholder="Enter email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <div className="pb-6">
                            <Input
                                placeholder="Enter Mobile"
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                            {errors.mobile && <p className="text-red-500">{errors.mobile}</p>}
                        </div>
                        <div className="pb-6">
                            <Input
                                placeholder="Enter NID Number"
                                type="text"
                                name="nid"
                                value={formData.nid}
                                onChange={handleChange}
                            />
                            {errors.nid && <p className="text-red-500">{errors.nid}</p>}
                        </div>
                        <div className="pb-6">
                            <Input
                                placeholder="Enter DOB"
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                            {errors.dob && <p className="text-red-500">{errors.dob}</p>}

                        </div>
                        <div className="pb-6">
                            <Input
                                placeholder="Enter Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                        <div className='flex justify-between align-middle'>
                            <Link className='mt-2' href={'/login'}>Already account?</Link>
                            <Button disabled={loading} className='font-bold w-[150px]' color="primary" variant='solid' type="submit">{loading?"Loading...":"Create Account"}</Button>
                        </div>

                        {singupError && <p className="text-red-500">Sign up failed</p>}


                    </div>
                </form>
            </div>
        </>
    );
};

export default Signup;

