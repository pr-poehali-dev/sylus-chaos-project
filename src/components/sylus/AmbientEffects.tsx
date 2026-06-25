import { useEffect, useMemo, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const AmbientEffects = () => {
  const [idleFeathers, setIdleFeathers] = useState(false);

  const embers = useMemo<Particle[]>(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 10,
        size: 2 + Math.random() * 4,
      })),
    [],
  );

  const feathers = useMemo<Particle[]>(
    () =>
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 12,
        size: 14 + Math.random() * 16,
      })),
    [],
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const reset = () => {
      setIdleFeathers(false);
      clearTimeout(timer);
      timer = setTimeout(() => setIdleFeathers(true), 9000);
    };
    window.addEventListener('mousemove', reset);
    window.addEventListener('click', reset);
    reset();
    return () => {
      window.removeEventListener('mousemove', reset);
      window.removeEventListener('click', reset);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden">
      {/* Тёмная виньетка */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, hsl(0 0% 2% / 0.85) 100%)',
        }}
      />

      {/* Угли, поднимающиеся вверх */}
      {embers.map((e) => (
        <span
          key={`ember-${e.id}`}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${e.left}%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            background: 'hsl(0 100% 45%)',
            boxShadow: '0 0 8px hsl(0 100% 40%), 0 0 14px hsl(45 90% 52% / 0.5)',
            animation: `ember-rise ${e.duration}s linear ${e.delay}s infinite`,
          }}
        />
      ))}

      {/* Падающие перья — когда долго не двигаешь мышь */}
      {idleFeathers &&
        feathers.map((f) => (
          <span
            key={`feather-${f.id}`}
            className="absolute top-0"
            style={{
              left: `${f.left}%`,
              fontSize: `${f.size}px`,
              color: 'hsl(0 0% 10%)',
              textShadow: '0 0 6px hsl(0 100% 20%)',
              animation: `fall-feather ${f.duration}s linear ${f.delay}s infinite`,
            }}
          >
            🪶
          </span>
        ))}
    </div>
  );
};

export default AmbientEffects;
