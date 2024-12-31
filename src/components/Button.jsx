import { useEffect, useState } from "react"
import toast from "react-hot-toast"


export default function AddButton({ setFavouriteList, student, favouriteList }) {
    
    const [isAdded, setIsAdded] = useState(false)
    useEffect(() => {

      const found =   favouriteList.some((favourite) => {
            if (student.id == favourite.id) {
                return true
            }
            else{
                return false
            }
        })
        console.log(found)
        setIsAdded(found)
    },[favouriteList]
    )



    function addToFavourite(student) {
        let temp = false
        favouriteList.forEach((favourite)=>{
            if(student.id === favourite.id)
            {
            toast.error("Already Added!")   
            temp = true

            }
        })
        if(!temp){
        setFavouriteList((prev) => {
            
            let list = [...prev, { id: student.id, name: student.name }]

                  
            return list
        })
        toast.success("Added to favourites")
    }
}

    return (


        <button onClick={() => { addToFavourite(student) }} className={`border ${isAdded?"bg-red-500": "bg-black"} text-white rounded-md p-2`} >{isAdded?"Added":"Add"}</button>

    )
}