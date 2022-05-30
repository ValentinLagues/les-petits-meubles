import home from "../../../content/home.json";

const HomeTitle = (): JSX.Element => {
  return (
    <div className="w-full">
      <h1 className="flex justify-center text-4xl mt-52 md:mt-24 md:mb-6 title md:text-7xl lg:text-8xl font-roadrage">
        {home.title}
      </h1>
      <h2 className="flex justify-center text-3xl md:py-4 title md:text-6xl font-sorbw">
        {home.by}
      </h2>
    </div>
  );
};

export default HomeTitle;
