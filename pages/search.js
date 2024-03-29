import Response from "@/Response";
import ImageResults from "@/components/ImageResults";
import SearchHeader from "@/components/SearchHeader";
import SearchHeaderOptions from "@/components/SearchHeaderOptions";
import SearchResults from "@/components/SearchResults";
import Head from "next/head";
import { useRouter } from "next/router";


export default function Search({results}){
    const router = useRouter();
    console.log(results)
    return(
    <>
       <Head>
        <title>{router.query.term}</title>
       </Head>

       <SearchHeader/>
       <SearchHeaderOptions/>

        {router.query.searchType === "image"?(
            <ImageResults results={results}/>
        ):
        (
            <SearchResults results={results}/>
        )}
       

    </>
    )
}

export async function getServerSideProps(context){
    const mockData = false;
    const startIndex = context.query.start || "1";
    const data = mockData? Response :await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
    ).then((response)=> response.json())

    return{
        props :{
            results: data
        }
    }

}