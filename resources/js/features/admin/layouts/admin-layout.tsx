import { Plus } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';

type AdminLayoutProps = {
  title: string;
  hasButton?: boolean;
  buttonText?: string;
  buttonAction?: () => void;
};

const AdminLayout = ({
  title,
  hasButton,
  buttonText,
  buttonAction,
}: AdminLayoutProps) => {
  return (
    <div className="w-full h-44 bg-gr-05 flex rounded-xl items-center justify-between px-8 mb-8">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      {hasButton && buttonText && buttonAction && (
        <Button
          onClick={buttonAction}
          variant={'ghost'}
          className="bg-white text-gr-05 px-8 py-6 font-bold text-base rounded-xl flex items-center hover:brightness-90 duration-300 ease-in-out"
        >
          <span className="bg-gr-05 rounded-full p-0.5 flex items-center justify-center">
            <Plus className=" text-white stroke-[4]" size={16} />
          </span>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default AdminLayout;
