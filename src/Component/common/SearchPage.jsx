import SearchBar from "./SearchBar";
import SearchList from "./SearchList";

function SearchPage() {
  return (
    <div className="h-full w-full bg-background/40 text-text flex flex-col items-center  backdrop-blur-2xl fixed   z-50 top-0">
      <SearchBar />
      <SearchList />
    </div>
  );
}

export default SearchPage;
