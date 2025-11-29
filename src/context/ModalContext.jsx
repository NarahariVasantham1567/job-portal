import { createContext, useContext, useState } from 'react';

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openJobCard, setOpenJobCard] = useState(false);
  const [openNewColumn, setOpenNewColumn] = useState(false);

  return (
    <ModelContext.Provider
      value={{
        openModal,
        setOpenModal,
        openJobCard,
        setOpenJobCard,
        openNewColumn,
        setOpenNewColumn,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};

const useModalContext = () => useContext(ModelContext);

export default useModalContext;
