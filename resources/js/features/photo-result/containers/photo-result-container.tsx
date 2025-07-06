import { Head } from '@inertiajs/react';
import RabrawHead from '../components/rabraw-head';
import Ornaments from '../components/ornaments';
import Awan from '../components/awan';
import PhotoResult from '../components/photo-result';

const PhotoResultContainer = () => {
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

export default PhotoResultContainer;
