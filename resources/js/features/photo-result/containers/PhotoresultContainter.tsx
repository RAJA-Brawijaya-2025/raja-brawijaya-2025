import { Head } from '@inertiajs/react';
import RabrawHead from '../components/RabrawHead';
import Ornaments from '../components/Ornaments';
import Awan from '../components/Awan';
import PhotoResult from '../components/PhotoResult';

const PhotoresultContainer = () => {
  return (
    <main className="photo-booth-bg w-full min-h-screen p-2 relative ">
      <RabrawHead />
      <Awan />
      <Ornaments />
      <div className="relative z-10">
        <PhotoResult />
      </div>
    </main>
  );
};

export default PhotoresultContainer;
