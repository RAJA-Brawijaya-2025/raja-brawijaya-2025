const RabrawHead = () => {
  return (
    <div className="flex flex-col items-center scale-60  z-10 mt-20 sm:mt-0 max-w-xs  px-8 mx-auto font-sora">
      <img
        src="/assets/comingsoon/mahkota.png"
        alt="mahkota"
        className="mx-14"
      />
      <h1
        className="text-xl lg:text-2xl font-bold text-[#107D8F]"
        style={{
          textShadow: `
                                    1px 1px 0 #fff,
                                    -1px 1px 0 #fff,
                                    1px -1px 0 #fff,
                                    -1px -1px 0 #fff,
                                    3px 3px 6px rgba(0,0,0,0.4)
                                    `,
        }}
      >
        RAJA Brawijaya
      </h1>
      <h2
        className="text-lg lg:text-xl font-bold text-[#13B2BE]"
        style={{
          textShadow: `
                                    1px 1px 0 #fff,
                                    -1px 1px 0 #fff,
                                    1px -1px 0 #fff,
                                    -1px -1px 0 #fff,
                                    3px 3px 6px rgba(0,0,0,0.4)
                                    `,
        }}
      >
        2025
      </h2>
    </div>
  );
};

export default RabrawHead;
