import React, { useEffect, useRef, useState } from 'react';

function Camera() {
  const videoRef = useRef(null);
  const [currentCamera, setCurrentCamera] = useState('environment'); // Inicialmente, usa la cámara trasera

  const switchCamera = () => {
    setCurrentCamera(currentCamera === 'environment' ? 'user' : 'environment');
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: currentCamera, // Cambiar entre 'environment' y 'user' aquí
          },
        });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error al acceder a la cámara:', error);
      }
    };

    startCamera();
  }, [currentCamera]);

  return (
    <div>
      <h2>Cámara en tiempo real</h2>
      <video ref={videoRef} autoPlay playsInline />
      <button onClick={switchCamera}>Cambiar Cámara</button>
    </div>
  );
}

export default Camera;
