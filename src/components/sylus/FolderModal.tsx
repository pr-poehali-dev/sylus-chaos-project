import { ReactNode } from 'react';
import Icon from '@/components/ui/icon';

interface Props {
  title: string;
  subtitle?: string;
  bg?: string;
  onClose: () => void;
  children: ReactNode;
}

const FolderModal = ({ title, subtitle, bg, onClose, children }: Props) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-up">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden border border-blood/40 bg-abyss shadow-2xl box-glow-blood">
        {bg && (
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, hsl(0 0% 3% / 0.7), hsl(0 0% 3% / 0.95))',
          }}
        />

        <div className="relative z-10 max-h-[90vh] overflow-y-auto p-8 md:p-12">
          <button
            onClick={onClose}
            data-demon-hover
            className="absolute right-5 top-5 text-blood/70 transition-colors hover:text-blood"
          >
            <Icon name="X" size={26} />
          </button>

          <header className="mb-8 text-center">
            <h2 className="font-decorative text-3xl font-bold tracking-wider text-blood text-glow-blood md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 font-voice text-base text-gold/80">{subtitle}</p>
            )}
            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-blood to-transparent" />
          </header>

          {children}
        </div>
      </div>
    </div>
  );
};

export default FolderModal;
