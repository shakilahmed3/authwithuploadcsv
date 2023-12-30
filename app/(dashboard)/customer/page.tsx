'use client'
import Excellsheet from '@/components/excellsheet/excellsheet'
import { useAppSelector } from '@/redux/store/hooks'
import React from 'react'

const Customer = () => {
    const user = useAppSelector(state => state.user)

    return (
        <div className="pt-[80px]">
            <div className="mb-5 font-bold">Customer Dashboard</div>
            <h1 className="mb-2 font-bolder">Welcome! {`${user.user?.firstName} ${user.user?.lastName}`}</h1>
            <h3>Thank you so much for review my work! Here is a simple work.</h3>
            <Excellsheet />
        </div>
    )
}

export default Customer