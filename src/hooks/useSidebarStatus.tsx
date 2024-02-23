"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

export const SidebarStatusContext = createContext<SidebarStatusContext | null>(null);

type SidebarStatusContextProviderProps = {
  children: ReactNode;
}

type SidebarStatusContext = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export default function SidebarStatusContextProvider({children} : SidebarStatusContextProviderProps) {
  const [open, setOpen] = useState<boolean>(true);
  
  return (
    <SidebarStatusContext.Provider value={{
      open,
      setOpen,
    }}>
      {children}
    </SidebarStatusContext.Provider>
  );
}

export function useSelectedBoard(){
  const context = useContext(SidebarStatusContext);
  if(!context) {
    throw new Error('useSidebarStatus must be used within a SidebarStatusContextProvider');
  }

  return context;
}
