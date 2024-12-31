import toast from "react-hot-toast"

export default function Favourite({ favouriteList, setFavouriteList }) {

    function DeleteFavourite(id) {
        console.log(id)

        const newFavouriteList = favouriteList.filter((favourite) => {
            if (favourite.id === id) {

                toast("🗑 Deleted")

                return false

            }
            else {
                return true
            }
        })

        setFavouriteList(()=>{
            return newFavouriteList
    })

    }

    return (
        <div>
            <div className="flex flex-col p-2 border border-black flex-wrap">

                <div className="" >
                    {
                        favouriteList.length > 0 ?
                            <div>
                                <div className="flex justify-between  border border-black bg-black p-2">
                                    <h1 className="text-white font-bold">Student Name</h1>
                                    <h1 className="text-white font-bold mr-7">Action</h1>
                                </div>
                            </div>:""
                }
                </div>
                <div style={{height:"60vh",overflow:"scroll"}}>

                    {
                        favouriteList.length > 0 ?
                            favouriteList.map((student) => {
                                return (

                                    <div className="flex justify-between items-center border border-black m-auto p-5" >
                                        <p>{student.name}</p>
                                        <button onClick={() => { DeleteFavourite(student.id) }} className="border bg-red-600 border-black text-white rounded-md p-3">Delete</button>
                                    </div>

                                )
                            }) : <h1 className="text-center">Favourite List Empty</h1>
                    }
                </div>
            </div>
        </div>
    )

}