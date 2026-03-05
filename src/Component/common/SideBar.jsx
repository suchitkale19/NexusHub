function SideBar() {
  return (
    <div className="h-full w-full bg-background/40 text-text   backdrop-blur-2xl fixed   z-50 top-0">
      <div className="h-full w-fit flex flex-col gap-1 text-2xl px-4 bg-background">
        <div className="w-full h-fit text-end py-4 px-4 text-text">
          <div className="h-1 rounded-2xl w-10 bg-primary rotate-45"></div>
          <div className="h-1 rounded-2xl w-9 bg-primary rotate-145"></div>
        </div>
        {["Home", "Movies", "TV-Shows", "Trending"].map((page) => (
          <div
            className="w-72 py-4 px-4 rounded-2xl   font-semibold hover:bg-secondary   text-start"
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
