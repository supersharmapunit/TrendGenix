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
    <div className="flex mb-1 w-1/2 mx-auto border-2 rounded-xl border-grey bg-black mx-7 space-x-2 justify-center items-center">
      <Textarea
        onChange={(e) => setSearchText(e.target.value)}
        className="ml-1 border-none resize-none"
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
