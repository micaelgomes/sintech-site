import React, {
  createContext,
  Dispatch,
  useContext,
  useMemo,
  useState,
} from "react";

import toast, { Toaster } from "react-hot-toast";

type TypesToasts = "info" | "success" | "error";

interface ToastData {
  addToast: (type: TypesToasts, message: string) => void;
}

const ToastContext = createContext<ToastData>({} as ToastData);

const ToastProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const addToast = (type: TypesToasts, message: string) => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
        toast(message);
        break;
      default:
        toast("Sem mensagem.");
        break;
    }
  };

  const valuesInContext = useMemo(() => ({ addToast }), [addToast]);

  return (
    <ToastContext.Provider value={valuesInContext}>
      <Toaster />
      {children}
    </ToastContext.Provider>
  );
};

const useToast = (): ToastData => {
  const context = useContext(ToastContext);

  if (!context) throw new Error("useToast must be used in sidebar context");

  return context;
};

export { ToastProvider, useToast };
