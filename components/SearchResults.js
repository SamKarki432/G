import Parser from 'html-react-parser';

export default function SearchResults({results}){

    return (
        <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-sm text-gray-600 mt-3 mb-5">About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>

            {results.items?.map((result)=>(
                <div key={result.link} className='mb-8 max-w-xl'>
                    <div className='group'> 
                        <a className='text-sm truncate' href={result.link}>{result.formattedUrl}</a>
                        <a className='group-hover:underline decoration-blue-800' href={result.link}>
                            <h2 className='truncate text-xl font-medium text-blue-800'>{result.title}</h2>
                        </a>
                    </div>
                    <p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>
                </div>   
            ))}
        </div>
    )
}