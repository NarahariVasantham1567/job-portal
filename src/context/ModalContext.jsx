import { createContext, useContext, useState } from 'react';

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ModelContext.Provider value={{ openModal, setOpenModal }}>
      {children}
    </ModelContext.Provider>
  );
};

const useModalContext = () => useContext(ModelContext);

export default useModalContext;
