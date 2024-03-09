import "./App.css";
import SearchBox from "./components/SearchBox";
import Post from "./components/Post";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
    <div className="main h-screen grid grid-rows-1 gap-x-4 p-1">
        <div className="post-wrapper row-span-1 flex justify-center">
          <Post></Post>
        </div>
        <SearchBox/>
    </div>
    </RecoilRoot>
  );
}

export default App;
