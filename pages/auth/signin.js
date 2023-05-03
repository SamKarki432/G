import React from 'react';
import Header from "@/components/Header";
import {getProviders, signIn} from "next-auth/react";

export default function signin({providers}) {
    return (
        <>
            <Header/>
            <div className="mt-40">
                {Object.values(providers).map(provider=>(
                    <div key={provider.name} className="flex flex-col items-center">

                        <img className='w-52 object-cover'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" 
                        alt="Google Logo"/>

                        <p className="text-sm italic my-10">Not an official google website.Created for learning purposes.</p>

                        <button className="bg-blue-600 px-6 py-2 rounded-md  text-white hover:brightness-105 hover:shadow-md" 
                        onClick={()=>signIn(provider.id,{callbackUrl: "/" })}>
                            Sign-in with {provider.name}
                        </button>
                        
                    </div>
                ))}
            </div>
        </>
    )
}

export async function getServerSideProps(){
    const providers = await getProviders()

    return {
        props:{ providers }
    }
}