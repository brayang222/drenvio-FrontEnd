import { createContext, useContext } from "react";

export const ModalContext = createContext<{ closeModal: () => void } | null>(
  null
);

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext debe usarse dentro de un ModalProvider");
  }
  return context;
}
