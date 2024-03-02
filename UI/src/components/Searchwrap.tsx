import { ChangeEvent, useState } from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpCircle } from "lucide-react";



function Searchwrap({sendSearchText}) {
    const [searchText,setSearchText]=useState('');
    const handleChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
          setSearchText(e.target.value);
    }
  return (
      <div className="flex w-full space-x-2 justify-center items-center">
        <Textarea
           onChange={handleChange}
           className=" rounded-xl w-2/4 p-3 border-2 border-grey bg-black resize-none"
           placeholder="Give some thoughts ....."
        ></Textarea>
        <Button onClick={()=>{sendSearchText(searchText)}} variant="ghost" size="icon">
          <ArrowUpCircle className="h-auto w-10" />
        </Button>
      </div>
  );
}

export default Searchwrap;
