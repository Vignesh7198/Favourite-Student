import { useEffect, useState } from "react"
import AddButton from "./Button"

export default function StudentList({ favouriteList, setFavouriteList }) {
    const [buttonBg,setButtonBg] = useState(false)
    const [studentList, setStudentList] = useState([
        {
            id: 1,
            name: "Vignesh"
        },
        {
            id: 2,
            name: "Koushik"
        },
        {
            id: 3,
            name: "Rahul"
        },
        {
            id: 4,
            name: "Sree"
        },
        {
            id: 5,
            name: "Britney"
        },
        {
            id: 6,
            name: "Binoth"
        },
        {
            id: 7,
            name: "Geo"
        },
        {
            id: 8,
            name: "Suja"
        },
        {
            id: 9,
            name: "Dhaya"
        },
        {
            id: 10,
            name: "Giri"
        },
    ])

    return (
        <div className="flex flex-col p-2 border border-red-700" style={{height:"70vh",overflow:"hidden"}}>
            <div className="flex justify-between border border-black bg-black p-2">
                <h1 className="font-bold text-white">Student Name</h1>
                <h1 className="font-bold text-white">Favourite Bucket</h1>
            </div>
            <div className="flex flex-col overflow-scroll" >
                {
                    studentList.map((student) => {
                        return (
                            <div className="flex justify-between items-center border border-black flex-wrap p-5">
                                <p className="">{student.name}</p>
                                <AddButton setFavouriteList={setFavouriteList} student={student} favouriteList = {favouriteList}></AddButton>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}