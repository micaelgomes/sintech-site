import React, {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useState,
} from "react";
import Drawer from "../components/globals/Drawer";

interface DrawerData {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  toggleDrawer: () => void;
}

const DrawerContext = createContext<DrawerData>({} as DrawerData);

const DrawerProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const valuesInContext = useMemo(
    () => ({ isOpen, setIsOpen, toggleDrawer }),
    [isOpen, setIsOpen, toggleDrawer]
  );

  return (
    <DrawerContext.Provider value={valuesInContext}>
      <Drawer />
      {children}
    </DrawerContext.Provider>
  );
};

const useDrawer = (): DrawerData => {
  const context = useContext(DrawerContext);

  if (!context) throw new Error("useDrawer must be used in sidebar context");

  return context;
};

export { DrawerProvider, useDrawer };
