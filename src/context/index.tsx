import React from "react";
import ListaProvider from "../components/lista/context";
import { DrawerProvider } from "./drawer";
import { DrawerBottomProvider } from "./drawerBottom";

const AppProvider: React.FC = ({ children }) => {
  return (
    <ListaProvider>
      <DrawerProvider>
        <DrawerBottomProvider>{children}</DrawerBottomProvider>
      </DrawerProvider>
    </ListaProvider>
  );
};

export default AppProvider;
