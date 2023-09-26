import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

function QRScanner() {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      console.log(data); // Muestra los datos del escaneo en la consola
      setResult(data.text); // Actualiza el estado con el texto del escaneo
    }
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={(error) => console.log(error)}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>Resultado: {result}</p>
    </div>
  );
}

export default QRScanner;
