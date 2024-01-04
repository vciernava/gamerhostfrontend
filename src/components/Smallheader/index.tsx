const SmallHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header className="border-b border-gray-100 bg-white pb-12 pt-32">
      <div className="container">
        <h1 className="text-5xl font-bold leading-relaxed">{title}</h1>
        <p className="text-2xl leading-relaxed">{description}</p>
      </div>
    </header>
  );
};

export default SmallHeader;
