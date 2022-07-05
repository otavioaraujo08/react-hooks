import { useState } from 'react';

export default function UseState() {
  const [nome, setNome] = useState('otávio');

  const handleName = () => {
    nome === 'otávio' ? setNome('josi') : setNome('otávio');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1>{nome}</h1>
      <button onClick={handleName} style={{ width: '20%' }}>
        Mudar nome
      </button>
    </div>
  );
}
