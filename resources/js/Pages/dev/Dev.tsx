import { Button } from '@/shared/components/ui/button';

const Dev = () => {
  return (
    <div className="container mx-auto min-h-screen bg-gray-50 p-10 space-y-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Dev Playground
        </h1>
        <p className="text-gray-500">
          Preview komponen dan style secara cepat.
        </p>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Buttons</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Button>primary/default</Button>
          <Button variant="alt">primary alt</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="tertiary">tertiary</Button>
          <Button variant="destructive">destructive</Button>
          <Button variant="link">link</Button>
          <Button variant="ghost">ghost</Button>
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Color</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className=" aspect-square bg-white border-1">white</div>
          <div className=" aspect-square bg-primary-100 border-1">
            primary 100
          </div>
          <div className=" aspect-square bg-primary-200 border-1">
            primary 200
          </div>
          <div className=" aspect-square bg-primary-300 border-1">
            primary 300
          </div>
          <div className=" aspect-square bg-primary-400 border-1">
            primary 400
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Text</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <p className="text-base">base</p>
          <p className="text-lg">lg</p>
          <p className="text-xl">xl</p>
          <p className="text-2xl">2xl</p>
          <p className="text-3xl">3xl</p>
          <p className="text-4xl">4xl</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 font-sora">
          <p className="text-4xl">4xl</p>
          <p className="text-5xl">5xl</p>
          <p className="text-6xl">6xl</p>
          <p className="text-7xl">7xl</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Gradient</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className=" aspect-square bg-gradient-to-t from-[#1D5D77] via-[#83B3B6] to-white border-1" />
          <div className=" aspect-square opacity-60 bg-gradient-to-t from-[#1D5D77] via-[#83B3B6] to-white border-1" />
          <div className=" aspect-square bg-gradient-to-r from-primary-300 to-[#4FC5CE] border-1" />
        </div>
      </div>
    </div>
  );
};

export default Dev;
