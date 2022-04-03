import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface IPedido {}

interface CartData {
  currentCart: IPedido[];
  addItem: (item: IPedido) => void;
}

const CartContext = createContext<CartData>({} as CartData);

const CartProvider: React.FC = ({ children }) => {
  const [currentCart, setCurrentCart] = useState<IPedido[]>([]);

  const addItem = useCallback((item: IPedido) => {
    // Função de adicionar
    // Salvar no Storage
  }, []);

  const valuesInContext = useMemo(
    () => ({ currentCart, addItem }),
    [currentCart, addItem]
  );

  return (
    <CartContext.Provider value={valuesInContext}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartData => {
  const context = useContext(CartContext);

  if (!context) throw new Error("useCart must be used in sidebar context");

  return context;
};

export { CartProvider, useCart };
