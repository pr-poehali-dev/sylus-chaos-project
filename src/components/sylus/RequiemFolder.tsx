import { useState } from 'react';
import FolderModal from './FolderModal';
import Icon from '@/components/ui/icon';
import { IMAGES, MEMORIES, Memory } from './data';

interface Props {
  onClose: () => void;
}

const RequiemFolder = ({ onClose }: Props) => {
  const [active, setActive] = useState<Memory | null>(null);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState<Set<string>>(new Set());

  const tryUnlock = () => {
    if (!active) return;
    if (input.trim().toLowerCase() === active.password.toLowerCase()) {
      setUnlocked((prev) => new Set(prev).add(active.key));
      setError(false);
      setInput('');
    } else {
      setError(true);
    }
  };

  return (
    <FolderModal
      title="РЕКВИЕМ"
      subtitle="Воспоминания прошлой жизни"
      bg={IMAGES.organ}
      onClose={onClose}
    >
      {!active ? (
        <div className="grid gap-4 sm:grid-cols-3">
          {MEMORIES.map((m) => {
            const isOpen = unlocked.has(m.key);
            return (
              <button
                key={m.key}
                data-demon-hover
                onClick={() => {
                  setActive(m);
                  setError(false);
                  setInput('');
                }}
                className="group flex flex-col items-center gap-3 border border-blood/30 bg-black/50 p-6 transition-all hover:box-glow-blood"
              >
                <Icon
                  name={isOpen ? (m.icon as string) : 'Lock'}
                  size={32}
                  className={isOpen ? 'text-gold' : 'text-blood/70'}
                />
                <span className="font-cinzel tracking-wider text-foreground/85">
                  {m.title}
                </span>
                <span className="font-voice text-xs text-muted-foreground">
                  {isOpen ? 'открыто' : 'запечатано'}
                </span>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="mx-auto max-w-lg">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Icon
              name={active.icon as string}
              size={28}
              className="text-blood"
            />
            <h3 className="font-cinzel text-2xl text-gold">{active.title}</h3>
          </div>

          {unlocked.has(active.key) ? (
            <p className="border-l-2 border-gold/50 pl-5 font-voice text-lg leading-relaxed text-foreground/90 animate-fade-up">
              «{active.text}»
            </p>
          ) : (
            <div className="text-center">
              <p className="mb-4 font-body italic text-muted-foreground">
                {active.hint}
              </p>
              <div className="flex items-center justify-center gap-2">
                <input
                  data-demon-hover
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setError(false);
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && tryUnlock()}
                  placeholder="введи пароль..."
                  className="border border-blood/40 bg-black/60 px-4 py-2 text-center font-cinzel text-foreground outline-none focus:box-glow-blood"
                />
                <button
                  onClick={tryUnlock}
                  data-demon-hover
                  className="border border-blood/50 bg-black/50 px-4 py-2 text-blood transition-all hover:box-glow-blood"
                >
                  <Icon name="KeyRound" size={20} />
                </button>
              </div>
              {error && (
                <p className="mt-4 font-voice text-blood text-glow-blood animate-fade-up">
                  «Не то слово. Но ты вспомнишь. Ты всегда вспоминаешь».
                </p>
              )}
            </div>
          )}

          <button
            onClick={() => setActive(null)}
            className="mt-8 block font-cinzel text-sm tracking-widest text-foreground/50 hover:text-blood"
          >
            ← к воспоминаниям
          </button>
        </div>
      )}
    </FolderModal>
  );
};

export default RequiemFolder;
