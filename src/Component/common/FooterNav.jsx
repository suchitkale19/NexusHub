function FooterNav({ arr, title }) {
  return (
    <div className="flex flex-col gap-4 text-lg border-r border-border">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div>
        {arr.map((link) => (
          <h2 className="hover:underline" key={link}>
            {link}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default FooterNav;
