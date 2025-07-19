import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  current?: number;
  total?: number;
  onChange?: (page: number) => void;
}

export const Pagination = ({
  current = 1,
  total = 5,
  onChange,
}: PaginationProps) => {
  return (
    <div className="flex justify-center gap-8 items-center mt-24 select-none">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gr-05 text-gr-05 hover:bg-gr-05 hover:text-white transition-colors"
        onClick={() => onChange?.(Math.max(1, current - 1))}
        disabled={current === 1}
        aria-label="Previous"
      >
        <ChevronLeft />
      </button>
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, idx) => {
          const num = idx + 1;
          return (
            <button
              key={num}
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-gr-05 font-bold text-base transition-colors
                        ${num === current ? 'bg-gr-05 text-white' : 'text-gr-05 bg-white'}
                        hover:bg-gr-05 hover:text-white`}
              onClick={() => onChange?.(num)}
              aria-current={num === current ? 'page' : undefined}
            >
              {num}
            </button>
          );
        })}
      </div>
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gr-05 text-gr-05 hover:bg-gr-05 hover:text-white transition-colors"
        onClick={() => onChange?.(Math.min(total, current + 1))}
        disabled={current === total}
        aria-label="Next"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
