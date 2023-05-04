import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import {XIcon, MicrophoneIcon,SearchIcon} from "@heroicons/react/solid"
import User from "./User";

export default function SearchHeader(){
    const router = useRouter();
    const searchInputRef = useRef(null);

    function gsearch(event){
        event.preventDefault();
        const term = searchInputRef.current.value;
        if(!term.trim()) return;
        router.push(`/search?term=${term.trim()}`);
    }
    
    return(
        <>
            <header className="sticky top-0 bg-white">
                <div className="flex p-5 items-center w-full">           
                    <Image
                        onClick={()=>router.push("/")}
                        className="cursor-pointer"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
                        width="120"
                        height="40"
                        objectFit="contain"
                        alt="google logo"
                    />

                    <form className="flex border border-gray-200 rounded-full px-6 py-3 ml-10 mr-5 max-w-3xl flex-grow items-center shadow-lg">
                        <input type="text" defaultValue={router.query.term}
                        ref={searchInputRef} className="w-full focus:outline-none"/>

                        <XIcon onClick={()=>searchInputRef.current.value = ""} className="h-7 text-gray-500 cursor-pointer mr-4"/>
                        <MicrophoneIcon className="h-6 text-blue-500 hidden sm:inline-flex pl-4 border-l-2 mr-2 cursor-pointer"/>
                        <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"/>

                        <button onClick={gsearch} type="submit" className="hidden">btn</button>
                    </form>

                    <User className="ml-auto whitespace-nowrap"/>

                </div>
            </header>
        </>
    )
}