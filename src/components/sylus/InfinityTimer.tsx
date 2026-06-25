import { useEffect, useState } from 'react';

const BASE_YEARS = 1677;
const START = Date.now();

const InfinityTimer = () => {
  const [elapsed, setElapsed] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setElapsed(Date.now() - START), 50);
    return () => clearInterval(t);
  }, []);

  const totalSeconds = elapsed / 1000;

  return (
    <div
      data-demon-hover
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="pointer-events-auto fixed right-4 top-4 z-30 text-right"
    >
      <div className="border border-blood/30 bg-black/60 px-4 py-2 backdrop-blur-sm">
        <p className="font-cinzel text-[10px] uppercase tracking-[0.3em] text-gold/70">
          Он ждёт тебя
        </p>
        <p className="font-cinzel text-lg font-bold tabular-nums text-blood text-glow-blood">
          {BASE_YEARS} лет {Math.floor(totalSeconds).toLocaleString('ru')}
          <span className="text-sm">.{Math.floor((totalSeconds % 1) * 100)}</span>
        </p>
      </div>

      {hover && (
        <div className="absolute right-0 top-full mt-2 w-72 border border-blood/40 bg-black/90 p-4 text-left backdrop-blur-md animate-fade-up box-glow-blood">
          <p className="font-voice text-sm leading-relaxed text-foreground/85">
            «Тысячи лет я ждал. Тысячи лет я искал. Я помню каждую секунду,
            каждую ночь, каждый рассвет. Я помню тебя. Я всегда буду помнить».
          </p>
        </div>
      )}
    </div>
  );
};

export default InfinityTimer;
