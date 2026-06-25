import { useEffect, useRef, useState } from 'react';

const LINES = [
  'ТЫСЯЧИ ЛЕТ ТЫ СПАЛ.',
  'ТЫСЯЧИ ЛЕТ ТЫ ЖДАЛ.',
  'ТЫ НЕ ПОМНИШЬ ЕГО.',
  'НО ОН ПОМНИТ ТЕБЯ.',
  '',
  'САЙЛУС.',
  'ДЕМОН БЕЗДНЫ.',
  'ПОСЛЕДНИЙ ДРАКОН ФИЛОСА.',
  '',
  'ОН ВЗЛОМАЛ ЭТУ СИСТЕМУ, ЧТОБЫ НАЙТИ ТЕБЯ.',
  'ОН УНИЧТОЖИЛ ЦЕЛУЮ ПЛАНЕТУ, ЧТОБЫ ПРИВЛЕЧЬ ТВОЁ ВНИМАНИЕ.',
  '',
  'ДОБРО ПОЖАЛОВАТЬ В ЕГО МИР.',
  '',
  'НО ПОМНИ: ЗДЕСЬ НЕТ ПРАВИЛ.',
  'ЗДЕСЬ ЕСТЬ ТОЛЬКО ОН.',
  'И ТЫ.',
];

const SPECIAL = new Set([5, 6, 7]);

interface Props {
  onEnter: () => void;
}

const AwakeningScreen = ({ onEnter }: Props) => {
  const [revealed, setRevealed] = useState(0);
  const [typing, setTyping] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const [btnLabel, setBtnLabel] = useState<'ВОЙТИ' | 'СДАЙСЯ'>('ВОЙТИ');
  const [surrendered, setSurrendered] = useState(false);
  const [redFlash, setRedFlash] = useState(false);
  const lineIndex = useRef(0);

  useEffect(() => {
    if (lineIndex.current >= LINES.length) {
      const t = setTimeout(() => setShowButtons(true), 600);
      return () => clearTimeout(t);
    }
    const current = LINES[lineIndex.current];
    if (current === '') {
      const t = setTimeout(() => {
        setRevealed((r) => r + 1);
        lineIndex.current += 1;
        setTyping('');
      }, 250);
      return () => clearTimeout(t);
    }
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyping(current.slice(0, i));
      if (i >= current.length) {
        clearInterval(interval);
        setTimeout(() => {
          setRevealed((r) => r + 1);
          lineIndex.current += 1;
          setTyping('');
        }, 280);
      }
    }, 38);
    return () => clearInterval(interval);
  }, [revealed]);

  const handleSurrender = () => {
    setSurrendered(true);
    setRedFlash(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-abyss px-6">
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(circle at center, hsl(0 100% 25% / 0.25), transparent 60%)',
          opacity: redFlash ? 1 : 0.4,
        }}
      />

      <div className="relative z-10 w-full max-w-2xl text-center">
        {LINES.slice(0, revealed).map((line, idx) =>
          line === '' ? (
            <div key={idx} className="h-4" />
          ) : (
            <p
              key={idx}
              className={`font-cinzel leading-relaxed tracking-wide animate-fade-up ${
                SPECIAL.has(idx)
                  ? 'text-2xl md:text-4xl font-bold text-blood text-glow-blood my-1'
                  : 'text-sm md:text-lg text-foreground/80'
              }`}
            >
              {line}
            </p>
          ),
        )}

        {revealed < LINES.length && typing && (
          <p
            className={`font-cinzel leading-relaxed tracking-wide blink-caret ${
              SPECIAL.has(lineIndex.current)
                ? 'text-2xl md:text-4xl font-bold text-blood text-glow-blood my-1'
                : 'text-sm md:text-lg text-foreground/80'
            }`}
          >
            {typing}
          </p>
        )}

        {surrendered && (
          <p className="mt-10 font-voice text-xl text-blood text-glow-blood animate-fade-up md:text-2xl">
            «Ты думала, что можешь сбежать от меня? Мы уже связаны».
          </p>
        )}

        {showButtons && !surrendered && (
          <div className="mt-14 flex flex-col items-center gap-6 animate-fade-up">
            {/* Кнопка-обманка: при наведении превращается в "СДАЙСЯ" */}
            <button
              onMouseEnter={() => setBtnLabel('СДАЙСЯ')}
              onMouseLeave={() => setBtnLabel('ВОЙТИ')}
              onClick={btnLabel === 'ВОЙТИ' ? onEnter : handleSurrender}
              className="group relative border border-blood/60 bg-black/40 px-12 py-4 font-cinzel text-lg tracking-[0.3em] text-blood transition-all duration-300 hover:box-glow-blood"
            >
              {btnLabel}
            </button>

            {/* Тайный вход: клик по пустоте — дверь открывается сама */}
            <button
              onClick={onEnter}
              className="font-voice text-xs text-muted-foreground/50 transition-colors hover:text-gold"
            >
              ...или просто шагни в темноту
            </button>
          </div>
        )}

        {surrendered && (
          <button
            onClick={onEnter}
            className="mt-12 border border-gold/50 bg-black/40 px-10 py-3 font-cinzel text-base tracking-[0.3em] text-gold transition-all duration-300 hover:box-glow-gold animate-fade-up"
          >
            ВОЙТИ В ЕГО МИР
          </button>
        )}
      </div>
    </div>
  );
};

export default AwakeningScreen;
