import Props from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';

// Actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

// Data.js
export const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

// Reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar titulo');

      return { ...state, title: action.payload };
    }
  }

  return { ...state };
};

// AppContext.js
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: Props.node,
};

// H1/index.js
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>;
      <input type="text" placeholder="Digite um título." ref={inputRef} />
    </>
  );
};

// Star Function
export default function ContextReducer() {
  return (
    <AppContext>
      <H1 />
      <p>Olá pra todos</p>
    </AppContext>
  );
}
