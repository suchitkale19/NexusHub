function DualButtons({ name1, name2, imdbID, Title, Type }) {
  return (
    <div className="flex gap-4">
      <a
        href={`https://vidsrc.to/embed/${Type === "movie" ? "movie" : "tv"}/${imdbID}`}
        target="blank"
        className="text-lg font-semibold py-3 rounded-4xl px-6 border-2 border-border bg-button2 cursor-grab"
      >
        {name1}
      </a>
      <a
        href={`https://www.youtube.com/results?search_query=${Title.split(" ").join("+")}+trailer`}
        target="blank"
        className="text-lg font-semibold py-3 rounded-4xl px-6 border-2 border-border bg-button cursor-grab"
      >
        {name2}
      </a>
    </div>
  );
}

export default DualButtons;
