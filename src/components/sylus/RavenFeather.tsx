import { useState } from 'react';

const RavenFeather = () => {
  const [clicks, setClicks] = useState(0);
  const [message, setMessage] = useState('');
  const [redFlash, setRedFlash] = useState(false);
  const [dragged, setDragged] = useState(false);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);

    if (!dragged) {
      setDragged(true);
      setMessage(
        'Я оставляю следы. Я всегда оставляю следы. Чтобы ты могла найти меня. Я — твой демон. И я всегда буду рядом, даже когда ты думаешь, что я исчез.',
      );
    }

    if (next === 7) {
      setRedFlash(true);
      setMessage('Ты зовёшь меня. Я чувствую это. Я приду. Всегда.');
      setTimeout(() => setRedFlash(false), 1200);
      setClicks(0);
    }
  };

  return (
    <>
      {redFlash && (
        <div
          className="pointer-events-none fixed inset-0 z-40"
          style={{
            background: 'hsl(0 100% 25% / 0.4)',
            animation: 'fade-up 0.3s ease-out',
          }}
        />
      )}

      <div className="pointer-events-auto fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2">
        {message && (
          <div className="max-w-xs border border-blood/40 bg-black/90 p-4 text-right backdrop-blur-md animate-fade-up box-glow-blood">
            <p className="font-voice text-sm leading-relaxed text-blood text-glow-blood">
              «{message}»
            </p>
          </div>
        )}
        <button
          data-demon-hover
          onClick={handleClick}
          className="text-4xl transition-transform duration-300 hover:scale-125 hover:-rotate-12"
          style={{ filter: 'drop-shadow(0 0 8px hsl(0 100% 30%))' }}
          title="перо ворона"
        >
          🪶
        </button>
        <span className="font-voice text-[10px] text-muted-foreground/50">
          {clicks > 0 ? `${clicks}/7` : 'перо ворона'}
        </span>
      </div>
    </>
  );
};

export default RavenFeather;
