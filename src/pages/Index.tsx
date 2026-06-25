import { useState } from 'react';
import AwakeningScreen from '@/components/sylus/AwakeningScreen';
import Desktop from '@/components/sylus/Desktop';
import AmbientEffects from '@/components/sylus/AmbientEffects';
import DemonCursor from '@/components/sylus/DemonCursor';

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="relative min-h-screen bg-abyss">
      {!entered ? (
        <AwakeningScreen onEnter={() => setEntered(true)} />
      ) : (
        <Desktop />
      )}

      <AmbientEffects />
      <DemonCursor />
    </div>
  );
};

export default Index;
