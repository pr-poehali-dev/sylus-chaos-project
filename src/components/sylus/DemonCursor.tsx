import { useEffect, useRef, useState } from 'react';

interface Trail {
  id: number;
  x: number;
  y: number;
}

const DemonCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState<Trail[]>([]);
  const [hovering, setHovering] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('button, a, [data-demon-hover], [role="button"]'),
      );

      if (Math.random() > 0.6) {
        const id = idRef.current++;
        setTrails((prev) => [
          ...prev.slice(-12),
          { id, x: e.clientX, y: e.clientY },
        ]);
        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== id));
        }, 600);
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* Кровавый шлейф */}
      {trails.map((t) => (
        <div
          key={t.id}
          className="pointer-events-none fixed z-[9998] rounded-full"
          style={{
            left: t.x,
            top: t.y,
            width: '6px',
            height: '6px',
            transform: 'translate(-50%, -50%)',
            background: 'hsl(0 100% 30%)',
            boxShadow: '0 0 8px hsl(0 100% 35%)',
            animation: 'blood-fade 0.6s ease-out forwards',
          }}
        />
      ))}

      {/* Сам курсор — демонический глаз */}
      <div
        className="pointer-events-none fixed z-[9999] transition-transform duration-150"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 1.6 : 1})`,
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: hovering ? '14px' : '10px',
            height: hovering ? '14px' : '10px',
            background:
              'radial-gradient(circle, hsl(45 90% 60%) 0%, hsl(0 100% 35%) 45%, hsl(0 100% 15%) 100%)',
            boxShadow:
              '0 0 12px hsl(0 100% 40%), 0 0 24px hsl(0 100% 30% / 0.6)',
          }}
        />
      </div>

      <style>{`
        @keyframes blood-fade {
          from { opacity: 0.9; transform: translate(-50%, -50%) scale(1); }
          to { opacity: 0; transform: translate(-50%, calc(-50% + 14px)) scale(0.3); }
        }
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
};

export default DemonCursor;
