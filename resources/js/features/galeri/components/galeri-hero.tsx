import { motion, Variants } from 'framer-motion';
import { textData } from '../data/text-data';
import { textDataType } from '../types/text-data-type';

const containerVariants: Variants = {
  hidden: {},
  visible: (i: number = 0) => ({
    transition: {
      staggerChildren: 0.12,
      delayChildren: i * 1.5,
    },
  }),
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const GaleriHero: React.FC = () => {
  const baseFontStyles = "font-['Raillinc'] font-normal leading-normal";
  const bottomLayerStyles =
    'text-[#FCC61A] [text-shadow:0px_1.6px_1.6px_rgba(0,0,0,0.25)] [-webkit-text-stroke:0.8px_#917006]';
  const topLayerStyles =
    'bg-[radial-gradient(ellipse_150%_80%_at_60%_30%,rgba(255,255,255,0.5)_0%,transparent_30%)] bg-clip-text text-transparent mix-blend-overlay';
  const typedTextData: textDataType[] = textData;

  return (
    <div className="flex flex-col w-full mt-44 xl:mt-0 xl:justify-center  h-fit xl:items-start items-center z-20 xl:min-h-screen text-center ">
      {typedTextData.map((line, index) => (
        <div key={line.id} className={`relative ${line.className}`}>
          {[bottomLayerStyles, `absolute inset-0 ${topLayerStyles}`].map(
            (layerStyle, layerIndex) => (
              <motion.h1
                key={layerIndex}
                className={`${baseFontStyles} ${layerStyle}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                aria-hidden={layerIndex === 1}
              >
                {line.text.split('').map((char: string, charIndex: number) => (
                  <motion.span
                    key={charIndex}
                    variants={childVariants}
                    transition={{
                      type: 'spring',
                      damping: 15,
                      stiffness: 100,
                    }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>
            ),
          )}
        </div>
      ))}
    </div>
  );
};

export default GaleriHero;
