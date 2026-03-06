function SideBar({ setSideBar }) {
  return (
    <div className="h-full w-full bg-background/40 text-text lg:hidden flex   backdrop-blur-2xl fixed z-50 top-0">
      <div className="h-full w-fit flex flex-col  text-2xl px-4 bg-background">
        <div className="w-full h-fit text-end pt-4 pb-2 px-4 text-text">
          <svg
            onClick={() => {
              setSideBar(false);
            }}
            className="h-8 w-8 fill-logo hover:fill-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
        {["Home", "Movies", "TV-Shows", "Trending"].map((page) => (
          <div
            className="w-64 py-4 px-4 rounded-2xl   font-semibold hover:bg-secondary   text-start"
            key={page}
          >
            {page}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
