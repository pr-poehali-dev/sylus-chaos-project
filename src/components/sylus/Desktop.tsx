import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { IMAGES } from './data';
import ElysiumFolder from './ElysiumFolder';
import OnyhinusFolder from './OnyhinusFolder';
import RequiemFolder from './RequiemFolder';
import GalleryFolder from './GalleryFolder';
import InfinityTimer from './InfinityTimer';
import RavenFeather from './RavenFeather';
import TarotDeck from './TarotDeck';

type Folder = 'elysium' | 'onyhinus' | 'requiem' | 'gallery' | null;

const ZoneIcon = ({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick: () => void;
}) => (
  <button
    data-demon-hover
    onClick={onClick}
    className="group flex flex-col items-center gap-2"
  >
    <div className="flex h-14 w-14 items-center justify-center border border-blood/40 bg-black/50 transition-all group-hover:box-glow-blood">
      <Icon name={icon} size={24} className="text-blood group-hover:text-gold" />
    </div>
    <span className="font-cinzel text-xs tracking-wider text-foreground/70 group-hover:text-gold">
      {label}
    </span>
  </button>
);

const Desktop = () => {
  const [folder, setFolder] = useState<Folder>(null);
  const [eyeWatch, setEyeWatch] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-abyss">
      {/* Три зоны фоном */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
        {[IMAGES.district, IMAGES.eye, IMAGES.chapel].map((bg, i) => (
          <div key={i} className="relative">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black/40" />

      {/* Контент трёх зон */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 md:grid-cols-3">
        {/* ЛЕВО — Зона №109 */}
        <section className="flex flex-col justify-between border-blood/20 p-8 md:border-r">
          <div>
            <h2 className="font-decorative text-2xl font-bold text-blood text-glow-blood animate-flicker">
              ЗОНА №109
            </h2>
            <p className="mt-1 font-voice text-sm text-gold/70">
              Хаос и власть
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <ZoneIcon
              icon="Martini"
              label="Элизиум"
              onClick={() => setFolder('elysium')}
            />
            <ZoneIcon
              icon="Map"
              label="Онихинус"
              onClick={() => setFolder('onyhinus')}
            />
            <ZoneIcon
              icon="Swords"
              label="Арена"
              onClick={() => setFolder('gallery')}
            />
          </div>
        </section>

        {/* ЦЕНТР — Глаз Эфира */}
        <section
          data-demon-hover
          onMouseEnter={() => setEyeWatch(true)}
          onMouseLeave={() => setEyeWatch(false)}
          className="flex flex-col items-center justify-center p-8 text-center"
        >
          <div
            className="relative h-40 w-40 rounded-full transition-transform duration-500"
            style={{ transform: eyeWatch ? 'scale(1.1)' : 'scale(1)' }}
          >
            <img
              src={IMAGES.eye}
              alt="Глаз Эфира"
              className="h-full w-full rounded-full object-cover animate-breathe"
              style={{ boxShadow: '0 0 40px hsl(0 100% 30% / 0.7)' }}
            />
          </div>
          <h2 className="mt-6 font-decorative text-xl font-bold text-gold text-glow-gold">
            ГЛАЗ ЭФИРА
          </h2>
          {eyeWatch && (
            <p className="mt-4 max-w-xs font-voice text-sm leading-relaxed text-blood text-glow-blood animate-fade-up">
              «Я вижу твои желания. Я вижу твою жадность. Я вижу твой страх. Ты
              не можешь скрыть от меня ничего. Мы одинаковы».
            </p>
          )}
        </section>

        {/* ПРАВО — Часовня */}
        <section className="flex flex-col justify-between border-blood/20 p-8 md:border-l">
          <div className="text-right">
            <h2 className="font-decorative text-2xl font-bold text-gold/90 text-glow-gold">
              ЧАСОВНЯ
            </h2>
            <p className="mt-1 font-voice text-sm text-blood/70">
              Прошлая жизнь
            </p>
          </div>
          <div className="flex flex-wrap justify-end gap-6">
            <ZoneIcon
              icon="Music"
              label="Реквием"
              onClick={() => setFolder('requiem')}
            />
            <ZoneIcon
              icon="Flower2"
              label="Цветы"
              onClick={() => setFolder('requiem')}
            />
            <ZoneIcon
              icon="Images"
              label="Арты"
              onClick={() => setFolder('gallery')}
            />
          </div>
        </section>
      </div>

      {/* Угловые интерактивы */}
      <InfinityTimer />
      <RavenFeather />
      <TarotDeck />

      {/* Папки */}
      {folder === 'elysium' && (
        <ElysiumFolder onClose={() => setFolder(null)} />
      )}
      {folder === 'onyhinus' && (
        <OnyhinusFolder onClose={() => setFolder(null)} />
      )}
      {folder === 'requiem' && (
        <RequiemFolder onClose={() => setFolder(null)} />
      )}
      {folder === 'gallery' && (
        <GalleryFolder onClose={() => setFolder(null)} />
      )}
    </div>
  );
};

export default Desktop;
