import StudentList from "./components/StudentList";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Favourite from "./components/Favourite";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [favouriteList,setFavouriteList] =  useState([])

 
  return (
    <div className="bg-emerald-300 p-1 h-lvh text-center">
      <div className="mt-16 ml-auto mr-auto w-4/5">
      <div><Toaster/></div>
      <Header></Header>
      <div className="bg-emerald-50 ">
         <Routes>
          <Route  path={"/"} element={<StudentList favouriteList={favouriteList} setFavouriteList={setFavouriteList}/>}/>
          <Route  path={"/favourite"} element={<Favourite favouriteList={favouriteList} setFavouriteList={setFavouriteList}/>}/>
         </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
