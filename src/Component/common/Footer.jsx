import FooterLogos from "./FooterLogos";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <div className="h-full w-full bg-background px-42 py-10  border-t border-border text-text grid grid-cols-4 gap-15">
      <div className="pr-10 border-r border-border">
        <h1 className="text-4xl font-semibold">NexusHub</h1>
        <p className="text-lg py-8 text-lightText ">
          Your ultimate destination for movies, ratings, trailers and reviews.
          Discover trending films any time.
        </p>
      </div>
      <FooterNav
        arr={["Home", "Movies", "TV shows", "Top Rated"]}
        title={"Explore"}
      />
      <FooterNav
        arr={["About US", "Contact", "Privacy Policy", "Terms"]}
        title={"Company"}
      />

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Follow us</h1>
        <FooterLogos />
      </div>
    </div>
  );
}

export default Footer;
