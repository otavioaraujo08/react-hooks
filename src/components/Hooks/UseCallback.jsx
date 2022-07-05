import Props from 'prop-types';
import React, { useState } from 'react';
import { useCallback } from 'react';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: Props.func,
};

export default function UseCallback() {
  const [counter, setCounter] = useState(0);

  const incrementCount = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('pai renderizou');

  return (
    <>
      <h1>{counter}</h1>
      <Button incrementButton={incrementCount} />
    </>
  );
}
