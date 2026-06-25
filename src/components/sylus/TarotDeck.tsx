import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { TAROT, TarotCard } from './data';

const TarotDeck = () => {
  const [open, setOpen] = useState(false);
  const [card, setCard] = useState<TarotCard | null>(null);

  const draw = () => {
    setOpen(true);
    setCard(TAROT[Math.floor(Math.random() * TAROT.length)]);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {open && card && (
        <div className="w-60 border border-gold/40 bg-black/90 p-5 backdrop-blur-md animate-fade-up box-glow-gold">
          <div className="mb-3 flex items-center gap-2">
            <Icon name={card.icon as string} size={22} className="text-gold" />
            <h4 className="font-decorative text-lg text-gold text-glow-gold">
              {card.name}
            </h4>
          </div>
          <p className="font-voice text-sm leading-relaxed text-foreground/85">
            «{card.prophecy}»
          </p>
          <button
            onClick={draw}
            className="mt-3 font-cinzel text-xs tracking-widest text-blood hover:text-glow-blood"
          >
            ↻ ещё карта
          </button>
        </div>
      )}

      <button
        data-demon-hover
        onClick={open ? () => setOpen(false) : draw}
        className="group relative flex h-16 w-12 items-center justify-center border border-blood/50 bg-gradient-to-b from-shadow-violet to-black transition-transform hover:scale-110 box-glow-blood"
      >
        <Icon
          name="Sparkles"
          size={20}
          className="text-gold opacity-70 group-hover:opacity-100"
        />
      </button>
      <span className="font-voice text-[10px] text-muted-foreground/50">
        колода судьбы
      </span>
    </div>
  );
};

export default TarotDeck;