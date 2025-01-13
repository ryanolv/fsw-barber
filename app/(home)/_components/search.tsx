import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex gap-3 px-5">
      <Input placeholder="Pesquisar..." />
      <Button className="rounded-xl">
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
