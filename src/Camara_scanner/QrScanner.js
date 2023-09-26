import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-scanner';

function QRScanner() {
  const [result, setResult] = useState('');
  const [facingMode, setFacingMode] = useState('environment'); // Por defecto, usa la cámara trasera
  const handleScan = (data) => {
    if (data) {
      console.log(data); // Muestra los datos del escaneo en la consola
      setResult(data.text); // Actualiza el estado con el texto del escaneo
    }
  };

  const toggleCamera = () => {
    // Cambia entre la cámara trasera y la cámara frontal
    setFacingMode(facingMode === 'user' ? 'environment' : 'user');
  };


  return (
    <div>
      
      <button onClick={toggleCamera}>Cambiar Cámara</button>

      <QrReader
        delay={300}
        onError={(error) => console.log(error)}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {/* <p>Resultado: <a href={result} target='_blank'>{result}</a></p> */}
      <p>Resultado: {result}</p>

    </div>
  );
}
export default QRScanner;

// import React, { useState, useEffect } from 'react';
// import QrReader from 'react-qr-scanner';

// function QRScanner() {
//   const [result, setResult] = useState('');
//   const [facingMode, setFacingMode] = useState('environment'); // Por defecto, usa la cámara trasera

//   const handleScan = (data) => {
//     if (data) {
//       setResult(data);
//     }
//   };

//   const toggleCamera = () => {
//     // Cambia entre la cámara trasera y la cámara frontal
//     setFacingMode(facingMode === 'user' ? 'environment' : 'user');
//   };

//   return (
//     <div>
//       <button onClick={toggleCamera}>Cambiar Cámara</button>
//       <QrReader
//         delay={300}
//         onError={(error) => console.log(error)}
//         onScan={handleScan}
//         style={{ width: '100%' }}
//         facingMode={facingMode} // Establece la cámara
//       />
//       <p>Resultado: {result}</p>
//     </div>
//   );
// }

// export default QRScanner;
