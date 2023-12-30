'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Input } from "@nextui-org/react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/store/hooks';
import { setUser } from '@/redux/features/user-slice';

interface LoginForm {
    email: string;
    password: string;
}

interface LoginErrors {
    email?: string;
    password?: string;
}

const Login: React.FC = () => {

    const router = useRouter()
    const dispatch = useAppDispatch()

    const [formData, setFormData] = useState<LoginForm>({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

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

    const [errors, setErrors] = useState<LoginErrors>({});
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: LoginErrors = {};

        // Validate email format (basic validation)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'This field is requred';
        }

        // Validate password (basic validation)
        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        setErrors(newErrors);

        if (Object.values(errors).every((error) => !error)) {
            // Perform your login logic here
            setLoading(true)
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }).then(res => res.json())
                .then(data => {
                    if (data.success === true) {
                    setLoading(false)
                        setLoginError(false)
                        setCookie('authToken', generateRandomString(15), 30);
                        setCookie('role', data.user.role, 30);
                        router.push(`/${data.user.role}`)
                        dispatch(setUser(data.user))
                        localStorage.setItem('user', JSON.stringify(data.user))
                    }
                }).catch(err => {
                    console.log(err)
                    setLoading(false)
                    setLoginError(true)
                })
        }
    };

    return (
        <>
            <div className="h-[100%] min-h-[100vh]">
                <form onSubmit={handleSubmit}>
                    <div className="pr-10 ps-10 pt-[15vh] w-[100%] max-w-[600px] m-auto">
                        <h1 className='text-center mb-8 font-bold text-[30px]'>Login</h1>
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
                                placeholder="Enter Password"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p className="text-red-500">{errors.password}</p>}
                        </div>
                        <div className='flex justify-between align-middle'>
                            <Link className='mt-2' href={'/signup'}>Create Account</Link>
                            <Button className='font-bold w-[150px]' color="primary" variant='solid' type="submit" disabled={loading}>{loading?"Loading...":"Login"}</Button>
                        </div>
                        {loginError && <p className="text-red-500">Login Failed</p>}

                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
