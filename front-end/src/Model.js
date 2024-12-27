import React, { forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Model = forwardRef(({ scrollPosition }, ref) => {
  const { scene } = useGLTF('/models/dog.glb'); // Path to your model

  useFrame(() => {
    if (ref.current) {
      // Rotate based on scroll position
      ref.current.rotation.y = scrollPosition / 100; // Adjust speed with division
    }
  });

  return <primitive object={scene} ref={ref} />;
});

export default Model;
