import SearchHeader from "@/components/SearchHeader";
import SearchHeaderOptions from "@/components/SearchHeaderOptions";
import Head from "next/head";


export default function Search(){

    return(
    <>
       <Head>
        <title>Google clone app</title>
       </Head>

       <SearchHeader/>
       <SearchHeaderOptions/>

    </>
    )
}