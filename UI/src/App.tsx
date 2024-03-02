import { useState } from "react";
import "./App.css";
import Searchwrap from "./components/Searchwrap";
import Post from "./components/Post";

function App() {
  const [searchData,setSearchData]=useState('');
  const getSearchData=(data:string)=>{
       setSearchData(data)
  }
  return (
    <div className="main h-screen grid grid-rows-1 gap-x-4 p-1">
        <div className="post-wrapper row-span-1 flex justify-center">
          <Post></Post>
        </div>
        <Searchwrap sendSearchText={getSearchData}></Searchwrap>
    </div>
  );
}

export default App;
