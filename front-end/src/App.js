import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import './App.css'

function App() {
  const modelRef = useRef();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='full'>
      <div className='cont'>
        <h1>Illegal Freedom</h1>
      </div>
      <div className='model'>
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Model ref={modelRef} scrollPosition={scrollPosition} />
          <OrbitControls maxDistance={700} minDistance={1} />
        </Canvas>
      </div>
      <div className='more'>
        <h2>More Content Here</h2>
      </div>
    </div>
  );
}

export default App;
