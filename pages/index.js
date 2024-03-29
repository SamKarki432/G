import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Image from 'next/image';
import {SearchIcon, MicrophoneIcon} from "@heroicons/react/solid";
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function gsearch(event){
    event.preventDefault();
    const term = searchInputRef.current.value;
    if(!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }
  
  async function randomSearch(event){
    event.preventDefault();
    const term = await fetch("https://random-word-api.herokuapp.com/word?number=1").then((response)=>response.json())
    if(!term) return;
    router.push(`/search?term=${term}&searchType=`);
  }
  return (
    <>
      <Head>
        <title>GC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header/>

      <form className='flex flex-col items-center mt-40'>

        <Image
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
         width="300"
         height="100"
         objectFit="cover"
         alt="google logo"
        />

        <p className="text-sm italic">Not the official google website.Created for learning purposes.</p>

        <div className='flex w-full mt-5 items-center mx-auto max-w-[90%] border border-gray-300 hover:shadow-lg 
          focus-within:shadow-lg px-5 py-2 rounded-full sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className="h-6 w-6 text-gray-500 mr-3"/>
          <input ref={searchInputRef} type="text" className='flex-grow focus:outline-none'/>
          <MicrophoneIcon className="h-5 w-6 text-gray-500"/>
        </div>

        <div className='flex flex-col md:flex-row mt-5 space-y-2 md:space-x-4 md:space-y-0'>
          <button onClick={gsearch} className='btn'>Google Search</button>
          <button onClick={randomSearch} className='btn'> I&apos;m feeling lucky</button>
        </div>
        
      </form>

      <Footer/>
    </>
  )
}
