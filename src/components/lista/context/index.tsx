import React from "react";
import { ProdutoProvider } from "./produto";

const ListaProvider: React.FC = ({ children }) => {
  return <ProdutoProvider>{children}</ProdutoProvider>;
};

export default ListaProvider;
