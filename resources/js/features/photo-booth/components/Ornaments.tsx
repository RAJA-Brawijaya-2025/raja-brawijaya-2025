const Ornaments = () => {
  return (
    <>
      {/* INI YANG DESKTOP / LAPTOP */}
      <div className="w-full h-full hidden sm:flex flex justify-between items-end absolute left-0 right-0 top-0">
        <div>
          <img
            src="/assets/photobooth/ornament.png"
            alt="mahkota"
            className="lg:w-2/3S md:w-2/3 scale-x-[-1]"
          />
        </div>
        <div className="flex justify-end">
          <img
            src="/assets/photobooth/ornament.png"
            alt="mahkota"
            className="lg:w-2/3 md:w-2/3"
          />
        </div>
      </div>
      {/* INI YANG MOBILE */}
      <div className="flex  left-0 bottom-20 justify-center absolute  sm:hidden">
        <div className="lg:w-3/4 md:w-2/3 sm:w-1/4 w-2/3">
          <img
            src="/assets/photobooth/ornament2.png"
            alt="mahkota"
            className=""
          />
        </div>
        <div className="flex justify-end lg:w-3/4 md:w-2/3 sm:w-1/4 w-2/3 scale-x-[-1]">
          <img
            src="/assets/photobooth/ornament2.png"
            alt="mahkota"
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default Ornaments;
