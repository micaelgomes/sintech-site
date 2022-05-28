import React, {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useState,
} from "react";
import DrawerBottom from "../components/globals/DrawerBottom";

interface DrawerBottomData {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  toggleDrawerBottom: () => void;
}

const DrawerBottomContext = createContext<DrawerBottomData>(
  {} as DrawerBottomData
);

const DrawerBottomProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawerBottom = () => {
    setIsOpen((prevState) => !prevState);
  };

  const valuesInContext = useMemo(
    () => ({ isOpen, setIsOpen, toggleDrawerBottom }),
    [isOpen, setIsOpen, toggleDrawerBottom]
  );

  return (
    <DrawerBottomContext.Provider value={valuesInContext}>
      <DrawerBottom />
      {children}
    </DrawerBottomContext.Provider>
  );
};

const useDrawerBottom = (): DrawerBottomData => {
  const context = useContext(DrawerBottomContext);

  if (!context)
    throw new Error("useDrawerBottom must be used in sidebar context");

  return context;
};

export { DrawerBottomProvider, useDrawerBottom };
