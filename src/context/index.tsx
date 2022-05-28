import React from "react";
import ListaProvider from "../components/lista/context";
import { DrawerProvider } from "./drawer";
import { DrawerBottomProvider } from "./drawerBottom";
import { ToastProvider } from "./toast";

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <ListaProvider>
        <DrawerProvider>
          <DrawerBottomProvider>{children}</DrawerBottomProvider>
        </DrawerProvider>
      </ListaProvider>
    </ToastProvider>
  );
};

export default AppProvider;
