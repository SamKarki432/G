
export default function Footer(){

    return(
        <>
            <footer className="absolute bottom-0 left-[50%] translate-x-[-50%]
            whitespace-nowrap p-5 text-sm text-gray-600">
                <p>Copyright &copy; {new Date().getFullYear()} Made By Samrakshan Karki</p>
            </footer>
        </>
    )
}