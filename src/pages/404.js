import { useRouter } from 'next/router';
import React from 'react';

const NotFoundPage = () => {
    const router = useRouter();

    setTimeout(()=>{
        router.push("/")
    },5000)

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <h1 className='text-6xl'>404!! not found</h1>
        </div>
    );
};

export default NotFoundPage;