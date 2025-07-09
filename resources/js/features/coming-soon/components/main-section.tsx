import { motion } from 'framer-motion';

const Main = () => {
  return (
    <main className="container z-10 grid py-16 mx-auto text-center place-items-center">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1, ease: 'easeInOut' }}
        className="container relative grid w-full h-full"
      >
        <img
          src="/assets/comingsoon/foto.png"
          alt="foto"
          className="absolute left-0 object-contain w-1/4 duration-500 ease-in-out bottom-14 -rotate-12 hover:rotate-0"
        />
        <img
          src="/assets/comingsoon/foto-dua.png"
          alt="foto"
          className="absolute top-20 object-contain w-1/12 duration-500 ease-in-out left-[28%] rotate-[20deg] hover:rotate-0 blur-[3px]"
        />
        <img
          src="/assets/comingsoon/foto-dua.png"
          alt="foto"
          className="absolute object-contain w-1/5 duration-500 ease-in-out hover:rotate-0 -right-12 bottom-28 rotate-12 blur-[1px]"
        />
        <img
          src="/assets/comingsoon/foto.png"
          alt="foto"
          className="absolute object-contain w-32 duration-500 ease-in-out right-[20%] top-32 -rotate-[20deg] hover:rotate-0 blur-[2px]"
        />
        <div className="flex flex-col max-w-xs px-8 mx-auto font-sora">
          <img
            src="/assets/comingsoon/mahkota.png"
            alt="mahkota"
            className="mx-14"
          />
          <h1
            className="text-2xl font-bold text-[#107D8F]"
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
            className="text-xl font-bold text-[#13B2BE]"
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
        <div className="z-10 flex flex-col gap-2">
          <p className="text-2xl text-[#1D5D77] font-extrabold -translate-y-5">
            Cie... nungguin, ya?
          </p>
          <div className="mb-12">
            <img
              src="/assets/comingsoon/text-center.svg"
              alt="text"
              className="mx-auto pointer-events-none select-none"
            />
          </div>
          <button
            onClick={() => {
              window.location.href = '/photo-booth';
            }}
            className="mx-auto flex w-[210px]  h-[55px] px-9 py-[14.5px] justify-center items-center gap-2 rounded-2xl bg-gradient-to-l from-[#7FCCCC] to-[#13B2BE] shadow-[inset_-4px_4px_7px_0px_rgba(255,255,255,0.5),0px_0px_18.5px_0px_#0C4C66] cursor-[url('/assets/cursor/photobooth-cursor.svg'),_auto]"
          >
            <p className="text-2xl font-extrabold text-white">Klik disini!</p>
          </button>
        </div>
      </motion.section>
      <style></style>
    </main>
  );
};

export default Main;
