import { useState } from 'react';
import FolderModal from './FolderModal';
import { GALLERY, IMAGES } from './data';

interface Props {
  onClose: () => void;
}

const GalleryFolder = ({ onClose }: Props) => {
  const [zoom, setZoom] = useState<number | null>(null);

  return (
    <FolderModal
      title="МИР САЙЛУСА"
      subtitle="Осколки его вечности"
      bg={IMAGES.raven}
      onClose={onClose}
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {GALLERY.map((g, i) => (
          <button
            key={i}
            data-demon-hover
            onClick={() => setZoom(i)}
            className="group relative aspect-square overflow-hidden border border-blood/30 transition-all hover:box-glow-blood"
          >
            <img
              src={g.src}
              alt={g.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-transparent to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="font-cinzel text-xs text-gold">{g.title}</span>
            </div>
          </button>
        ))}
      </div>

      {zoom !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-6 animate-fade-up"
          onClick={() => setZoom(null)}
        >
          <img
            src={GALLERY[zoom].src}
            alt={GALLERY[zoom].title}
            className="max-h-[70vh] max-w-full border border-blood/40 box-glow-blood"
          />
          <h3 className="mt-5 font-decorative text-2xl text-blood text-glow-blood">
            {GALLERY[zoom].title}
          </h3>
          <p className="mt-1 font-voice text-gold/80">{GALLERY[zoom].caption}</p>
        </div>
      )}
    </FolderModal>
  );
};

export default GalleryFolder;
