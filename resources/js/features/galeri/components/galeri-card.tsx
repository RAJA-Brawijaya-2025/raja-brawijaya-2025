import { useState } from 'react';
import {
  motion,
  useMotionValue,
  animate,
  type PanInfo,
  useTransform,
} from 'framer-motion';
import { cardData } from '../data/card-data';

const STACK_STYLES = [
  { x: 0, y: 0, rotate: 0, zIndex: 30 },
  { x: 80, y: -40, rotate: -6, zIndex: 20 },
  { x: 110, y: -80, rotate: -12, zIndex: 10 },
];

const GaleriCard = () => {
  const [cards, setCards] = useState(cardData.sort((a, b) => a.id - b.id));
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const rotate = useTransform(x, [-350, 350], [-15, 15]);

  const handleDragEnd = (_: Event, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 120 || Math.abs(info.offset.y) > 120) {
      const swipedCard = cards[cards.length - 1];

      setCards((prev) => {
        const remaining = prev.filter((c) => c.id !== swipedCard.id);
        animate(x, 0, { type: 'spring', stiffness: 260, damping: 20 });
        animate(y, 0, { type: 'spring', stiffness: 260, damping: 20 });
        return [swipedCard, ...remaining];
      });
    } else {
      animate(x, 0, { type: 'spring', stiffness: 260, damping: 20 });
      animate(y, 0, { type: 'spring', stiffness: 260, damping: 20 });
    }
  };

  return (
    <div className="flex relative justify-center -ml-10 xl:-ml-0 w-full items-center ">
      {cards.map((card, index) => {
        const isTopCard = index === cards.length - 1;
        const depth = cards.length - 1 - index;
        const style =
          STACK_STYLES[depth] || STACK_STYLES[STACK_STYLES.length - 1];

        const randomRotate = Math.random() * 4 - 2;
        const finalRotate = style.rotate + randomRotate;

        return (
          <motion.div
            key={card.id}
            className="absolute aspect-square w-52 md:w-80 lg:w-96 2xl:w-[25rem]  z-30 rounded-2xl overflow-hidden cursor-grab"
            style={{
              x: isTopCard ? x : undefined,
              y: isTopCard ? y : undefined,
              rotateX: isTopCard ? rotateX : undefined,
              rotateY: isTopCard ? rotateY : undefined,
              rotate: isTopCard ? rotate : undefined,
              transformOrigin: '90% 90%',
            }}
            animate={{
              ...style,
              rotate: finalRotate,
              scale: 1 + index * 0.06 - cards.length * 0.06,
            }}
            drag={isTopCard ? true : false}
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragElastic={0.6}
            whileTap={{ cursor: 'grabbing' }}
            onDragEnd={isTopCard ? handleDragEnd : undefined}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <img
              className="object-cover w-full z-20 h-full pointer-events-none scale-x-[-1]"
              src={card.src}
              alt={`Galeri ${card.id}`}
            />
          </motion.div>
        );
      })}{' '}
      <div className=" w-full h-full flex justify-center">
        <img
          className="top-0   h-5/6   right-0 hidden xl:block z-0"
          src="/assets/galeri/galeri-sticker.webp"
          alt="Sticker"
        />
      </div>
    </div>
  );
};

export default GaleriCard;
