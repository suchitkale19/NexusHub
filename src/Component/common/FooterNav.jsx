function FooterNav({ arr, title }) {
  return (
    <div className="flex flex-col lg:gap-4 gap-1 lg:border-r border-border lg:pr-6">
      <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>

      <ul className="flex lg:grid gap-2 justify-between text-sm sm:text-base lg:text-lg text-lightText">
        {arr.map((link) => (
          <li
            key={link}
            className="cursor-pointer hover:text-text hover:underline transition"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterNav;
