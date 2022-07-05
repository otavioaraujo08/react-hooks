import { useEffect } from 'react';
import { useState } from 'react';

export default function UseEffec() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log('Componente renderizou');
  }, []);

  useEffect(() => {
    console.log('Contador Incrementado');
  }, [counter]);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleCounter} style={{ width: '20%' }}>
        Aumentar contador
      </button>
    </div>
  );
}
