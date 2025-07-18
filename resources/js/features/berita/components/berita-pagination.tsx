import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeritaPaginationProps {
  current?: number;
  total?: number;
  onChange?: (page: number) => void;
}

export const BeritaPagination = ({
  current = 1,
  total = 3,
  onChange,
}: BeritaPaginationProps) => {
  return (
    <div className="flex select-none items-center justify-center gap-8 mt-24">
      <button
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8B7100] bg-white text-[#8B7100] shadow-[#8B7100]/30 shadow-md transition-colors hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onChange?.(Math.max(1, current - 1))}
        disabled={current === 1}
        aria-label="Previous Page"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="flex items-center gap-3">
        {Array.from({ length: total }).map((_, idx) => {
          const pageNumber = idx + 1;
          const isActive = pageNumber === current;

          return (
            <button
              key={pageNumber}
              className={`h-5 w-5 rounded-full transition-colors duration-300
                ${
                  isActive ? 'bg-[#8B7100]' : 'bg-[#FFC700] hover:bg-yellow-500'
                }
              `}
              onClick={() => onChange?.(pageNumber)}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isActive ? 'page' : undefined}
            />
          );
        })}
      </div>

      <button
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8B7100] bg-white text-[#8B7100] shadow-[#8B7100]/30 shadow-md transition-colors hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => onChange?.(Math.min(total, current + 1))}
        disabled={current === total}
        aria-label="Next Page"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
