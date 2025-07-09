const Ornaments = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <div className="w-full h-full flex justify-between items-center  sm:items-end">
        <div className="flex-col sm:flex  hidden">
          <img
            src="/assets/photoresult/ornament.png"
            alt="ornamen kiri atas"
            className="w-2/3"
          />
          <img
            src="/assets/photobooth/ornament.png"
            alt="ornamen kiri bawah"
            className="w-2/3 scale-x-[-1]"
          />
        </div>

        <div className="flex-col sm:flex items-end hidden">
          {' '}
          <img
            src="/assets/photoresult/ornament.png"
            alt="ornamen kanan atas"
            className="w-2/3 scale-x-[-1]"
          />
          <img
            src="/assets/photobooth/ornament.png"
            alt="ornamen kanan bawah"
            className="w-2/3"
          />
        </div>
        {/* Mobile */}
        <img
          src="/assets/photoresult/ornament-mobile.png"
          alt="Mobile"
          className="sm:hidden w-2/3 overflow-hidden "
        />
        <img
          src="/assets/photoresult/ornament-mobile.png"
          alt="Mobile"
          className="sm:hidden scale-x-[-1] w-2/3 overflow-hidden "
        />
      </div>
    </div>
  );
};

export default Ornaments;
