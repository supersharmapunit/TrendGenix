import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpCircle } from "lucide-react";
import { useSetRecoilState } from "recoil";
import { searchDataAtom } from '@/store/recoil/atoms'



 function SearchBox() {
  const searchWrapRef=useRef<HTMLDivElement>(null);
  const [searchText, setSearchText] = useState('');
  const setSearchDataAtom = useSetRecoilState(searchDataAtom);
  const handleSubmit = (): void => {
    setSearchDataAtom(searchText);
    setSearchText(() => '');
  }
  const handleEnterKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key == 'Enter' && (!event.shiftKey && !event.ctrlKey && !event.altKey)) {
      event.preventDefault();
      handleSubmit();
    }
    return;
  }
  const handleTextAreaActive=(makeActive:boolean)=>{
    if(searchWrapRef.current && makeActive){
      searchWrapRef.current.classList.remove('border-grey');
      searchWrapRef.current.classList.add('border-white');
    }
    else if(searchWrapRef.current && !makeActive){
      searchWrapRef.current.classList.remove('border-white');
      searchWrapRef.current.classList.add('border-grey');
    }
  }


  return (
    <div className="flex mb-1 w-1/2 mx-auto  rounded-xl border-2 bg-black mx-7 space-x-2 justify-center items-center"  ref={searchWrapRef} >
      <Textarea
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={()=>{handleTextAreaActive(true)}}
        onBlur={()=>{handleTextAreaActive(false)}}
        className="ml-1 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent border-none resize-none"
        placeholder="What have you learnt today..."
        value={searchText}
        onKeyDown={(event) => handleEnterKeyDown(event)}
      ></Textarea>
      <Button onClick={handleSubmit} variant="ghost" size="icon">
        <ArrowUpCircle className="h-auto w-10 mr-1" />
      </Button>
    </div>
  );
}

export default SearchBox;
