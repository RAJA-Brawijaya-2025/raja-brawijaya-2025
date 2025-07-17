import type React from 'react';

type CardProps = {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
};

const FlipCard = ({ frontContent, backContent }: CardProps) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back p-4">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
