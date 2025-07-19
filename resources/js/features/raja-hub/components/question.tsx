import type { ReactNode, MouseEventHandler, UIEvent } from 'react';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  delay = 0,
  index,
  onMouseEnter,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

interface Item {
  id: number | string;
  question: string;
  answer: string;
}

interface AnimatedListProps {
  items?: Item[];
  onItemSelect?: (item: Item, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  items = [],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);
  const [openStates, setOpenStates] = useState<Record<number, boolean>>({});
  const handleToggle = (index: number) => {
    setOpenStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } =
      e.target as HTMLDivElement;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1),
    );
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(
      `[data-index="${selectedIndex}"]`,
    ) as HTMLElement | null;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (
        itemBottom >
        containerScrollTop + containerHeight - extraMargin
      ) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth',
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-full mx-auto ${className}`}>
      <div
        ref={listRef}
        className="max-h-[600px] mx-auto overflow-y-auto p-4"
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={0.1}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onItemSelect) {
                onItemSelect(item, index);
              }
            }}
          >
            <button
              type="button"
              className={`p-4 bg-[#C99C0B] w-full sm:w-[80vw] md:w-[60vw] relative z-20 mx-auto flex flex-row justify-between gap-x-2 items-center border-4 border-white drop-shadow-md rounded-3xl ${selectedIndex === index ? 'bg-[#222]' : ''} ${itemClassName}`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex flex-row gap-x-2  items-center">
                <img
                  src="/assets/rajahub/ornament-list.webp"
                  alt="card"
                  className="w-[3vw] h-[3vw]"
                />
                <p className="text-white text-wrap text-[clamp(1vw,2vw,5rem)]  font-bold m-0">
                  {item.question}
                </p>
              </div>
              <img
                src="/assets/rajahub/arrow-down.webp"
                alt="toggle"
                className={`w-[3vw] transition-transform duration-300 ${openStates[index] ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 mt-[-5vw] md:mt-[-2vw] mb-[6vw] md:mb-[3vw] drop-shadow-md ease-in-out sm:w-[80vw] md:w-[60vw] mx-auto -mt-2"
              style={{ gridTemplateRows: openStates[index] ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden relative z-0 ">
                <div className="bg-[#917006] border-4 border-white p-6 rounded-b-lg text-gray-700 shadow-inner">
                  <p className="whitespace-pre-line mt-[2vw] text-white">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-[10vw] sm:h-[5vw] sm:w-[90vw] md:w-[70vw] rounded-t-xl mx-auto bg-gradient-to-b from-[#C99C0B] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[10vw] sm:h-[5vw] sm:w-[90vw] md:w-[70vw] rounded-b-xl  mx-auto bg-gradient-to-t from-[#C99C0B] to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </>
      )}
    </div>
  );
};

export default AnimatedList;
