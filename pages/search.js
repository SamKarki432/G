import Response from "@/Response";
import SearchHeader from "@/components/SearchHeader";
import SearchHeaderOptions from "@/components/SearchHeaderOptions";
import Head from "next/head";


export default function Search({results}){
    console.log(results)
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

export async function getServerSideProps(context){
    const mockData = true;
    const data = mockData? Response :await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}`
    ).then((response)=> response.json())

    return{
        props :{
            results: data
        }
    }

}