import { Button } from '@/shared/components/ui/button';
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
          className="absolute left-0 object-contain w-1/4 duration-500 ease-in-out top-[40%] md:bottom-14 -rotate-12 hover:rotate-0"
        />
        <img
          src="/assets/comingsoon/foto-dua.png"
          alt="foto"
          className="hidden md:absolute top-20 object-contain w-1/12 duration-500 ease-in-out left-[28%] rotate-[20deg] hover:rotate-0 blur-[3px]"
        />
        <img
          src="/assets/comingsoon/foto-dua.png"
          alt="foto"
          className="absolute object-contain w-1/5 duration-500 ease-in-out hover:rotate-0 right-4 md:-right-12 top-[45%] md:bottom-28 rotate-12 blur-[1px]"
        />
        <img
          src="/assets/comingsoon/foto.png"
          alt="foto"
          className="hidden md:absolute object-contain w-32 duration-500 ease-in-out right-[20%] top-32 -rotate-[20deg] hover:rotate-0 blur-[2px]"
        />
        <div className="flex flex-col max-w-xs px-12 translate-y-14 md:translate-y-0 md:px-8 mx-auto font-sora">
          <img
            src="/assets/comingsoon/mahkota.png"
            alt="mahkota"
            className="mx-14"
          />
          <h1
            className="text-lg md:text-2xl font-bold text-[#107D8F]"
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
            {/* <img
                            src="/assets/comingsoon/text-center.svg"
                            alt="text"
                            className="mx-auto pointer-events-none scale-90 md:scale-1 select-none"
                        /> */}
            <div className="relative mt-[-2vw] font-sora text-5xl">
              <h5
                className="absolute w-full left-0 font-extrabold leading-16"
                style={{
                  WebkitTextStroke: '12px white',
                  color: 'transparent',
                  filter: 'drop-shadow(2px 3px 4px rgba(0,0,0,0.3))',
                }}
              >
                Dikit lagi jadi, mending foto dulu!
              </h5>
              <h5
                className="relative font-extrabold bg-clip-text text-transparent leading-16"
                style={{
                  background:
                    'linear-gradient(90deg, #1D5D77 0%, #4FC5CE 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Dikit lagi jadi, mending foto dulu!
              </h5>
            </div>
          </div>
          <Button
            onClick={() => {
              window.location.href = '/photo-booth';
            }}
            variant="alt"
            className="mx-auto cursor-[url('/assets/cursor/photobooth-cursor.svg'),_auto] px-8 py-6 rounded-xl"
          >
            <p className="text-2xl font-extrabold text-white">Klik disini !</p>
          </Button>
        </div>
      </motion.section>
      <style />
    </main>
  );
};

export default Main;
