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
    <div className="w-full h-44 bg-gr-05 flex rounded-xl items-center justify-between px-8">
      <h1 className="text-4xl font-bold text-white">{title}</h1>
      {hasButton && buttonText && buttonAction && (
        <button
          onClick={buttonAction}
          className="bg-white text-gr-05 px-4 py-2 rounded"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default AdminLayout;
