import { useState } from 'react';
import FolderModal from './FolderModal';
import Icon from '@/components/ui/icon';
import { IMAGES } from './data';

interface Props {
  onClose: () => void;
}

const TERRITORIES = [
  { id: 't1', label: 'Зона №109', x: 22, y: 30 },
  { id: 't2', label: 'Элизиум', x: 70, y: 22 },
  { id: 't3', label: 'Арена', x: 78, y: 68 },
  { id: 't4', label: 'Часовня', x: 30, y: 72 },
  { id: 'base', label: 'Трон Сайлуса', x: 50, y: 50 },
];

const OnyhinusFolder = ({ onClose }: Props) => {
  const [message, setMessage] = useState('');
  const [showHologram, setShowHologram] = useState(false);
  const [hologramTurned, setHologramTurned] = useState(false);

  const handleClick = (id: string) => {
    if (id === 'base') {
      setShowHologram(true);
      setMessage('');
    } else {
      setMessage(
        'Ты думаешь, что можешь контролировать это? Я контролирую всё. И тебя тоже.',
      );
    }
  };

  return (
    <FolderModal
      title="ОНИХИНУС"
      subtitle="Карта его владений"
      bg={IMAGES.portal}
      onClose={onClose}
    >
      {!showHologram ? (
        <>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden border border-blood/40 bg-black/60">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url(${IMAGES.district})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(hsl(0 100% 30% / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(0 100% 30% / 0.15) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {TERRITORIES.map((t) => (
              <button
                key={t.id}
                data-demon-hover
                onClick={() => handleClick(t.id)}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${t.x}%`, top: `${t.y}%` }}
              >
                <span
                  className={`block rounded-full ${
                    t.id === 'base'
                      ? 'h-5 w-5 bg-gold'
                      : 'h-3 w-3 bg-blood'
                  }`}
                  style={{
                    boxShadow:
                      t.id === 'base'
                        ? '0 0 16px hsl(45 90% 52%), 0 0 4px hsl(45 90% 52%)'
                        : '0 0 12px hsl(0 100% 40%)',
                    animation: 'breathe 3s ease-in-out infinite',
                  }}
                />
                <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap font-cinzel text-xs text-foreground/70 opacity-0 transition-opacity group-hover:opacity-100">
                  {t.label}
                </span>
              </button>
            ))}
          </div>

          <p className="mt-6 min-h-[3rem] text-center font-voice text-lg text-blood text-glow-blood transition-opacity">
            {message || 'Коснись его трона в центре карты...'}
          </p>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            data-demon-hover
            onClick={() => setHologramTurned(true)}
            className="relative mb-6"
          >
            <div
              className="relative h-64 w-64 overflow-hidden rounded-lg border border-gold/40 transition-transform duration-700"
              style={{
                transform: hologramTurned ? 'rotateY(0deg)' : 'rotateY(-25deg)',
                boxShadow: '0 0 40px hsl(0 100% 30% / 0.6)',
              }}
            >
              <img
                src={IMAGES.eye}
                alt="Сайлус"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 animate-flicker"
                style={{
                  background:
                    'linear-gradient(transparent 50%, hsl(180 100% 50% / 0.04) 50%)',
                  backgroundSize: '100% 4px',
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(circle, transparent 40%, hsl(0 100% 20% / 0.5))',
                }}
              />
            </div>
            {!hologramTurned && (
              <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-voice text-sm text-gold/70">
                <Icon name="MousePointerClick" size={14} className="mr-1 inline" />
                наведи на проекцию
              </span>
            )}
          </button>

          {hologramTurned && (
            <p className="mt-2 max-w-md text-center font-voice text-lg leading-relaxed text-blood text-glow-blood animate-fade-up">
              «Ты искала меня. Я знаю. Ты всегда ищешь. Но вопрос в том: найдёшь
              ли ты меня, или я найду тебя первым?»
            </p>
          )}

          <button
            onClick={() => {
              setShowHologram(false);
              setHologramTurned(false);
            }}
            className="mt-8 font-cinzel text-sm tracking-widest text-foreground/50 hover:text-blood"
          >
            ← вернуться к карте
          </button>
        </div>
      )}
    </FolderModal>
  );
};

export default OnyhinusFolder;
