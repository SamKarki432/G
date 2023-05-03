import { useSession, signIn, signOut } from "next-auth/react"

export default function User(){
    const {data:session} = useSession();
    
    if(session){
        return(
            <>
               <img onClick={signOut} src={session.user.image} alt={session.user.name} className="h-10 w-10 rounded-full cursor-pointer hover:bg-gray-200 p-1" />
            </>
        ) 
    }

    return(
        <>
            <button onClick={signIn} className="bg-blue-600 px-6 py-2 text-white rounded-md hover:brightness-105 hover:shadow-md">
                Sign in
            </button>
        </>
    )
}