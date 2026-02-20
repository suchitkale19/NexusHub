function Footer() {
  return (
    <div className="h-full w-full px-50 text-text grid grid-cols-4 gap-20">
      <div>
        <h1 className="text-4xl font-semibold">NexusHub</h1>
        <p className="text-lg py-8 text-lightText ">
          Your ultimate destination for movies, ratings, trailers and reviews.
          Discover trending films any time.
        </p>
      </div>
      <div className="">
        <h1>Explore</h1>
        {["Home", "Movies", "TV shows", "Top Rated"].map((link) => (
          <h2 key={link}>{link}</h2>
        ))}
      </div>
      <div className="">
        <h1>Company</h1>
        {["About US", "Contact", "Privacy Policy", "Terms"].map((link) => (
          <h2 key={link}>{link}</h2>
        ))}
      </div>

      <div className="">
        <h1>Follow us</h1>
        <div className="flex gap-5">
          {["facebook", "twitter", "youtube"].map((item) => (
            <img key={item} src={`/src/assets/${item}.svg`} alt={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
