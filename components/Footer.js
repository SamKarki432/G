
export default function Footer(){

    return(
        <>
            <footer className="absolute bottom-0 left-[50%] translate-x-[-50%]
            whitespace-nowrap p-5 text-sm text-gray-600">
                <p> Made By Samrakshan Karki {new Date().getFullYear()} </p>
            </footer>
        </>
    )
}