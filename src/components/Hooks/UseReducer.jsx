import { useReducer } from 'react';

const globalState = {
  title: 'Um titulo aleatorio',
  body: 'Um bode aleatorio',
  counter: 0,
};

// eslint-disable-next-line
const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('Chamou muda');

      return { ...state, title: 'Mudou' };

    case 'inverter':
      console.log('Chamou inverter');

      return { ...state, title: 'Um titulo aleatorio' };

    default:
      return { ...state };
  }
};

export default function UseReducer() {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <>
      <h1>
        {counter} - {title}
      </h1>
      {title === 'Um titulo aleatorio' && <button onClick={() => dispatch({ type: 'muda' })}>+</button>}
      {title === 'Mudou' && <button onClick={() => dispatch({ type: 'inverter' })}>-</button>}
      <p>{body}</p>
    </>
  );
}
