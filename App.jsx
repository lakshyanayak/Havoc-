import { motion } from 'framer-motion';
import { useRef} from 'react';
import Companion, { getMoodState } from './Companion';
import { useGameStore } from './store/gameStore';

const backgrounds = {
  thriving: '/bg-thriving.jpeg',
  content: '/bg-content.jpeg',
  neutral: '/bg-neutral.jpeg',
  low: '/bg-low.jpeg',
  critical: '/bg-critical.jpeg',
};

function App() {
  const score = useGameStore((state) => state.getWellbeing());
  const mood = getMoodState(score);
  const areaRef = useRef(null);
  const wasDragged = useRef(false);
  return (
    <div style={{
      width: 390,
      height: '100vh',
      maxHeight: 844,
      margin: '0 auto',
      position: 'relative',
      backgroundImage: `url(${backgrounds[mood]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#111'
    }}>
      <div ref={areaRef} style={{
        position: 'absolute', top: 110, bottom: 10, left: 20, right: 20,
        pointerEvents: 'none'
      }} />

      <motion.div
        drag
        dragConstraints={areaRef}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => { wasDragged.current = true; }}
        onDragEnd={() => { setTimeout(() => { wasDragged.current = false; }, 50); }}
        onClickCapture={(e) => { if (wasDragged.current) e.stopPropagation(); }}
        style={{ position: 'absolute', bottom: '19%', left: 125, width: 140, height: 160, cursor: 'grab', zIndex: 5 }}
      >
        <div style={{
          position: 'absolute', bottom: -6, left: '50%', transform: 'translateX(-50%)',
          width: 110, height: 16, borderRadius: '50%',
          background: 'rgba(0,0,0,0.45)', filter: 'blur(4px)'
        }} />
        <Companion score={score} />
      </motion.div>
    </div>
  );
}

export default App;