import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea"
import { ArrowUpCircle } from "lucide-react";
import { useSetRecoilState } from "recoil";
import { searchDataAtom } from '@/store/recoil/atoms'



function SearchBox() {
  const [searchText, setSearchText] = useState('');
  const setSearchDataAtom = useSetRecoilState(searchDataAtom);

  const handleSubmit = (): void => {
    setSearchDataAtom(searchText);
    setSearchText(() => '');
  }
  const handleEnterKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key == 'Enter' && (!event.shiftKey && !event.ctrlKey && !event.altKey)) {
      handleSubmit();
    }
    return;
  }



  return (
    <div className="flex w-full space-x-2 justify-center items-center">
      <Textarea
        onChange={(e) => setSearchText(e.target.value)}
        className=" rounded-xl w-2/4 p-3 border-2 border-grey bg-black resize-none"
        placeholder="What have you learnt today..."
        value={searchText}
        onKeyDown={(event) => handleEnterKeyDown(event)}
      ></Textarea>
      <Button onClick={handleSubmit} variant="ghost" size="icon">
        <ArrowUpCircle className="h-auto w-10" />
      </Button>
    </div>
  );
}

export default SearchBox;
