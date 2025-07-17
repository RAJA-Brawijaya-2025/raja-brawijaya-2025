interface CardColorProps {
  color: string;
  text: string;
  onClick?: () => void;
}

const CardColor = ({ color, text, onClick }: CardColorProps) => {
  return (
    <div
      className="flex flex-row cursor-pointer group items-center"
      onClick={onClick}
    >
      <div className="flex flex-col w-[6vw] items-center gap-y-2">
        <div
          className="w-[13vw] h-[13vw] sm:w-[6vw] sm:h-[6vw] rounded-full"
          style={{ background: color }}
        ></div>
        <p className="text-[#0C4C66] text-[clamp(1vw,2vw,5rem)] sm:text-[clamp(1vw,1vw,5rem)] text-wrap text-center sm:text-nowrap font-sora font-bold">
          {text}
        </p>
      </div>
    </div>
  );
};
export default CardColor;
