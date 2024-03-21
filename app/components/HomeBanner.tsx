import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-900 mb-8">
      <div className="mx-auto px-8 py-12 flsx flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Emmington Services
          </h1>
          <p className="text-2xl md:text-5xl text-red-400 font-bold ">
            E-Commerce
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
