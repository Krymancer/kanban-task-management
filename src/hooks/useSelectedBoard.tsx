"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
import defaultData from '@/utils/data.json';


export const SelectedBoardContext = createContext<SelectedBoardContext | null>(null);

type SelectedBoardContextProviderProps = {
  children: ReactNode;
}

type SelectedBoardContext = {
  selected: string,
  setSelected: React.Dispatch<React.SetStateAction<string>>
};

export default function SelectedBoardContextProvider({children} : SelectedBoardContextProviderProps) {
  const [selected, setSelected] = useState<string>(defaultData.boards[0].name);
  
  return (
    <SelectedBoardContext.Provider value={{
      selected,
      setSelected,
    }}>
      {children}
    </SelectedBoardContext.Provider>
  );
}

export function useSelectedBoard(){
  const context = useContext(SelectedBoardContext);
  if(!context) {
    throw new Error('useSelectedBoard must be used within a SelectedBoardContextProvider');
  }

  return context;
}
