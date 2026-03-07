import FooterLogos from "./FooterLogos";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <div
      className="w-full bg-background 
      px-6 sm:px-10 md:px-16 lg:px-32 
      lg:py-10 py-2 border-t border-border text-text 
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
      lg:gap-10 gap-2"
    >
      {/* Logo + Description */}
      <div className="lg:pr-10 lg:border-r border-border">
        <h1 className="text-2xl sm:text-4xl font-semibold">NexusHub</h1>

        <p className="text-sm sm:text-base lg:text-lg lg:py-6 py-2 text-lightText">
          Your ultimate destination for movies, ratings, trailers and reviews.
          Discover trending films anytime.
        </p>
      </div>

      {/* Explore */}
      <FooterNav
        arr={["Home", "Movies", "TV Shows", "Top Rated"]}
        title={"Explore"}
      />

      {/* Company */}
      <FooterNav
        arr={["About Us", "Contact", "Privacy Policy", "Terms"]}
        title={"Company"}
      />

      {/* Social */}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl sm:text-2xl font-semibold">Follow us</h1>
        <FooterLogos />
      </div>
    </div>
  );
}

export default Footer;
