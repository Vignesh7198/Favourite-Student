import { Link, useLocation } from "react-router-dom";

export default function Header()
{

    
    return(
        <div className="flex flex-col sm:flex-row gap-5 bg-black text-white justify-end p-5">
        <h1 className="hidden sm:block sm:mr-64 sm:text-4xl">Favourite Student</h1>
        <Link className="bg-slate-700 p-2 rounded-md" to={"/"}>Home</Link>
  
        <Link className="bg-slate-700 p-2 rounded-md" to={"favourite"}>Favourites</Link>
  
        </div>
    )
}