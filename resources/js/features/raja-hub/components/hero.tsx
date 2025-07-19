import EntryAnimation from '@/features/landing-page/components/entry-animation';
const Hero = () => {
  return (
    <div className="relative z-20 flex   min-h-screen  w-full flex-col  items-center justify-center gap-y-3 overflow-hidden bg-[linear-gradient(360deg,_#83CDCE_0%,_#19485C_81.73%)] sm:gap-y-0">
      <EntryAnimation type="slide" direction="up" delay={1.5} duration={1}>
        <img
          src="/assets/rajahub/raja-hub.webp"
          alt="raja-hub"
          className="w-[50vw] sm:w-[30vw] "
        />
      </EntryAnimation>

      <EntryAnimation
        type="slide"
        direction="up"
        delay={0}
        duration={1}
        className="curved-edge3 absolute bottom-0 w-full z-20"
      >
        <div></div>
      </EntryAnimation>

      <EntryAnimation type="fade" delay={1} duration={1}>
        <img
          src="/assets/rajahub/batik.webp"
          alt="raja-hub"
          className="absolute left-[-5%] bottom-[10%] w-[50%] sm:w-[50%]  lg:w-[40%]"
        />
        <img
          src="/assets/rajahub/batik.webp"
          alt="raja-hub"
          className="absolute right-[-5%] scale-x-[-1] bottom-[10%]  w-[50vw] sm:w-[50%]  lg:w-[40%]"
        />
        <img
          src="/assets/rajahub/batik.webp"
          alt="raja-hub"
          className="absolute right-[-5%] top-0 w-[50%] sm:w-[50%]  lg:w-[40%] sm:hidden rotate-180"
        />
        <img
          src="/assets/rajahub/batik.webp"
          alt="raja-hub"
          className="absolute left-[-5%] top-0 w-[50%] sm:w-[50%]  lg:w-[40%] sm:hidden scale-x-[-1] rotate-180"
        />
      </EntryAnimation>
      <EntryAnimation
        type="slide"
        direction="left"
        delay={2}
        duration={1}
        className="absolute bottom-[10%] md:bottom-[5%]  lg:bottom-[0%] z-20 left-[-20%] w-[40%]   "
      >
        <img
          src="/assets/rajahub/awan.webp"
          alt="raja-hub"
          className="animate-awan"
        />
      </EntryAnimation>
      <EntryAnimation
        type="slide"
        direction="left"
        delay={2}
        duration={1}
        className="absolute bottom-[10%] md:bottom-[5%] lg:bottom-[0%] z-20 scale-x-[-1] right-[-20%]  w-[40%] "
      >
        <img
          src="/assets/rajahub/awan.webp"
          alt="raja-hub"
          className="animate-awan"
        />
      </EntryAnimation>
    </div>
  );
};

export default Hero;
