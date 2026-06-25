import { useState } from 'react';
import FolderModal from './FolderModal';
import { IMAGES } from './data';

interface Props {
  onClose: () => void;
}

const ElysiumFolder = ({ onClose }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <FolderModal
      title="ЭЛИЗИУМ"
      subtitle="Бар, где подают грехи"
      bg={IMAGES.district}
      onClose={onClose}
    >
      <p className="mb-8 text-center font-body text-foreground/70">
        Меню заведения, которым он владеет. Здесь каждый напиток — обещание, а
        каждое блюдо — ловушка. Выбери особое блюдо вечера.
      </p>

      <div className="mx-auto max-w-md">
        <button
          data-demon-hover
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group relative block w-full overflow-hidden border border-blood/40 bg-black/50 p-6 text-left transition-all duration-500 hover:box-glow-blood"
        >
          <div className="flex items-center gap-5">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-gold/30 text-4xl transition-all duration-500"
              style={{
                background: hovered
                  ? 'radial-gradient(circle, hsl(0 100% 30%), hsl(0 0% 5%))'
                  : 'radial-gradient(circle, hsl(45 60% 25%), hsl(0 0% 5%))',
              }}
            >
              <span className="transition-all duration-500">
                {hovered ? '🌹' : '🍰'}
              </span>
            </div>
            <div>
              <h3 className="font-cinzel text-xl font-bold text-gold text-glow-gold">
                Сладкая ловушка зла
              </h3>
              <p className="font-voice text-sm text-blood">
                {hovered ? 'кровавая роза' : 'десерт вечера'}
              </p>
            </div>
          </div>
        </button>

        <div className="mt-6 border-l-2 border-blood/50 pl-5">
          <p className="font-voice text-lg leading-relaxed text-foreground/85">
            «10.5 грамм души. Половина из цельной. Потому что в прошлой жизни мы
            слились душами. Я ждал тебя. Я знал, что ты придёшь. Ты всегда
            приходишь, когда я зову».
          </p>
        </div>
      </div>
    </FolderModal>
  );
};

export default ElysiumFolder;
