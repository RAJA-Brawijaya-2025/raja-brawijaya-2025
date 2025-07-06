import { Button } from '@/shared/components/ui/button';
import { motion } from 'framer-motion';

const MainSection = () => {
  const handleClick = () => {
    window.location.href = '/photo-booth';
  };

  return (
    <main className="container z-10 flex flex-col items-center text-center">
      <motion.img
        src="/assets/notfound/head-component.png"
        alt="Header Illustration"
        className="w-72 lg:w-auto h-auto"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <p className="mt-9 font-sora text-primary-300 text-4xl xl:text-6xl font-extrabold w-80 md:w-96 lg:w-[982px]">
        Halaman yang kamu cari nggak ada, nih
      </p>

      <p className="mt-6 text-cyan-800 text-xl font-black">
        Mau coba foto dulu?
      </p>

      <Button
        onClick={handleClick}
        className="mt-20 py-5 lg:py-7 px-8 lg:text-2xl text-white font-black rounded-xl shadow-[0_0_12px_rgba(29,93,119,1.0)] bg-gradient-to-r from-primary-300 to-primary-200 cursor-[url('/assets/cursor/photobooth-cursor.svg'),_auto]"
      >
        Yuk, Foto Dulu!
      </Button>
    </main>
  );
};

export default MainSection;
