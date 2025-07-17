import React, { useState } from 'react';
import CardColor from './card-color';
import EntryAnimation from './entry-animation';

type CardColorType = {
  id: number;
  color: string;
  text: string;
};

const Filosofi = () => {
  const cardColor: CardColorType[] = [
    { id: 1, color: '#92509D', text: 'Purple' },
    { id: 2, color: '#F9BE1B', text: 'Gold' },
    { id: 3, color: '#27B266', text: 'Green' },
    { id: 4, color: '#40246B', text: 'Dark Purple' },
    { id: 5, color: '#FBD1A5', text: 'Peach' },
    {
      id: 6,
      color: 'radial-gradient(50% 50% at 50% 50%, #1D5D77 0%, #13B2BE 100%)',
      text: 'default',
    },
  ];

  const [activeColor, setActiveColor] = useState(cardColor[5]);

  const handleColorChange = (newColor: CardColorType) => {
    setActiveColor(newColor);
  };

  const inactiveColors = cardColor.filter(
    (kartu) => kartu.id !== activeColor.id,
  );

  return (
    <div className="flex-col flex gap-y-5 sm:mb-[8vw] mb-[10vw] overflow-hidden items-center relative">
      <div className="flex flex-row relative">
        <EntryAnimation type="slide" direction="left" duration={2} delay={0.5}>
          <img
            src="/assets/landingpage/filosofi/daun-hijau.webp"
            alt="filosofi"
            className="sm:block hidden w-[10vw] animate-rotate"
          />
        </EntryAnimation>
        <div className="flex flex-col items-center text-center">
          <EntryAnimation type="scale" delay={0.5} duration={1}>
            <p className="font-sora text-[#1D5D77] sm:text-[clamp(1.5vw,3vw,5rem)] text-[clamp(1.5vw,9vw,10rem)] ">
              Filosofi
            </p>
            <h1 className="font-raillinc text-[#372D6F] sm:text-[clamp(1.5vw,5vw,5rem)] text-[clamp(1.5vw,7vw,10rem)] ">
              Logo RAJA Brawijaya
            </h1>
          </EntryAnimation>
          <EntryAnimation type="scale" duration={1} delay={1}>
            <div
              className="w-[38vw] h-[38vw] mr-[-4vw] rounded-full block sm:hidden transition-colors duration-500"
              style={{
                background: activeColor.color,
                boxShadow: 'inset 4px 4px 8px 0px #FFFFFF80',
              }}
            ></div>
          </EntryAnimation>
        </div>

        <EntryAnimation duration={2} direction="right" type="slide" delay={0.5}>
          <img
            src="/assets/landingpage/filosofi/daun-hijau2.webp"
            alt="filosofi"
            className="w-[10vw] sm:block hidden animate-rotate2"
          />
        </EntryAnimation>
      </div>

      {/* main content */}
      <div className="flex flex-col w-full sm:flex-row gap-x-[10vw] relative justify-between items-center pl-[2vw]">
        <EntryAnimation
          className="flex flex-row w-full sm:hidden mt-[2vw] items-start justify-between px-[10vw]"
          type="scale"
          duration={1}
          delay={0.5}
        >
          {inactiveColors.map((kartu) => (
            <CardColor
              key={kartu.id}
              color={kartu.color}
              text={kartu.text}
              onClick={() => handleColorChange(kartu)}
            />
          ))}
        </EntryAnimation>
        <div className="flex flex-col gap-y-[2vw] items-center sm:items-start text-start">
          <EntryAnimation
            type="slide"
            direction="left"
            duration={1}
            delay={1}
            className="flex flex-col gap-y-[2vw] items-center sm:items-start text-start"
          >
            <h2 className="text-[#FCC61A] text-[clamp(1.5vw,8vw,5rem)] sm:text-[clamp(1.5vw,5vw,5rem)] sm:text-start text-center w-[70vw] sm:w-[50vw] font-bold">
              Wajah Menghadap ke Samping
            </h2>
            <p className="text-[#176EA8] text-[clamp(1.5vw,3.8vw,4rem)] sm:text-[clamp(1.5vw,2vw,4rem)] w-[80vw] sm:w-[55vw] sm:text-start text-center">
              Melambangkan kepedulian, harapan menuju masa depan yang lebih
              baik, kewaspadaan, dan mengingatkan agar tidak menempuh jalan yang
              salah. Tri Dharma pendidikan dan bunga di ambil dari budaya Bali
            </p>
          </EntryAnimation>
          <EntryAnimation
            type="slide"
            direction="right"
            duration={1}
            delay={1.5}
          >
            <div className="sm:flex flex-row gap-x-[6vw] hidden">
              {inactiveColors.map((kartu) => (
                <CardColor
                  key={kartu.id}
                  color={kartu.color}
                  text={kartu.text}
                  onClick={() => handleColorChange(kartu)}
                />
              ))}
            </div>
          </EntryAnimation>
        </div>
        <EntryAnimation type="slide" direction="right" duration={1} delay={1}>
          <div
            className="w-[38vw] h-[38vw] mr-[-4vw] rounded-full sm:block hidden transition-colors duration-500"
            style={{
              background: activeColor.color,
              boxShadow: 'inset 4px 4px 8px 0px #FFFFFF80',
            }}
          ></div>
        </EntryAnimation>
      </div>

      <img
        src="/assets/landingpage/mobile/ornament-yellow.webp"
        alt="filosofi"
        className="absolute -z-10 w-full bottom-0 sm:hidden block"
      />
      <img
        src="/assets/landingpage/mobile/ornament-grey.webp"
        alt="filosofi"
        className="absolute -z-10 w-full sm:hidden block"
      />
      <img
        src="/assets/landingpage/filosofi/ornaments-grey.webp"
        alt="filosofi"
        className="absolute -z-10 w-full sm:block hidden "
      />
      <img
        src="/assets/landingpage/filosofi/ornaments-yellow.webp"
        alt="filosofi"
        className="absolute -z-10 w-full sm:block hidden "
      />
    </div>
  );
};

export default Filosofi;
