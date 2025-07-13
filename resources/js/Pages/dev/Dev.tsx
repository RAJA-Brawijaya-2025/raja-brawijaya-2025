import { Button } from '@/shared/components/ui/button';

const Dev = () => {
  return (
    <div className="container mx-auto min-h-screen bg-gray-50 p-10 space-y-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Dev Playground - php 8.2
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
          <div className=" aspect-square bg-gr-00 border-1">gr-00</div>
          <div className=" aspect-square bg-gr-01 border-1">gr-01</div>
          <div className=" aspect-square bg-gr-02 border-1">gr-02</div>
          <div className=" aspect-square bg-gr-03 border-1">gr-03</div>
          <div className=" aspect-square bg-gr-04 border-1">gr-04</div>
          <div className=" aspect-square bg-gr-05 border-1">gr-05</div>
          <div className=" aspect-square bg-gr-06 border-1">gr-06</div>
          <div className=" aspect-square bg-gr-07 border-1">gr-07</div>

          <div className=" aspect-square bg-yl-00 border-1">yl-00</div>
          <div className=" aspect-square bg-yl-01 border-1">yl-01</div>
          <div className=" aspect-square bg-yl-02 border-1">yl-02</div>
          <div className=" aspect-square bg-yl-03 border-1">yl-03</div>
          <div className=" aspect-square bg-yl-04 border-1">yl-04</div>
          <div className=" aspect-square bg-yl-05 border-1">yl-05</div>

          <div className=" aspect-square bg-or-00 border-1">or-00</div>
          <div className=" aspect-square bg-or-01 border-1">or-01</div>

          <div className=" aspect-square bg-pr-00 border-1">pr-00</div>
          <div className=" aspect-square bg-pr-01 border-1">pr-01</div>
          <div className=" aspect-square bg-pr-02 border-1">pr-02</div>

          <div className=" aspect-square bg-active border-1">active</div>
          <div className=" aspect-square bg-red border-1">red</div>
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
