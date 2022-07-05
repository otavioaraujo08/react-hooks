import React, { useContext, useState } from 'react';

const globalState = {
  title: 'O título do state',
  body: 'O body do state',
  counter: 0,
};

const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <div>
      <H1 />
      <div>
        <P />
      </div>
    </div>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);

  const {
    contextState: { title, counter },
  } = theContext;

  return (
    <>
      <h1>
        {title} - {counter}
      </h1>
    </>
  );
};

// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);

  const {
    contextState: { body },
    contextState,
    setContextState,
  } = theContext;

  return <p onClick={() => setContextState({ ...contextState, body: 'Batata canoa' })}>{body}</p>;
};

export default function UseContext() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}
