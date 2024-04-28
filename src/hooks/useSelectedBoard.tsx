"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";
import defaultData from '@/utils/data.json';
import { Board } from "@/types/board";


export const SelectedBoardContext = createContext<SelectedBoardContext | null>(null);

type SelectedBoardContextProviderProps = {
  children: ReactNode;
}

type SelectedBoardContext = {
  selected: Board,
  setSelected: React.Dispatch<React.SetStateAction<Board>>
};

export default function SelectedBoardContextProvider({ children }: SelectedBoardContextProviderProps) {
  const [selected, setSelected] = useState<Board>(defaultData.boards[0]);

  return (
    <SelectedBoardContext.Provider value={{
      selected,
      setSelected,
    }}>
      {children}
    </SelectedBoardContext.Provider>
  );
}

export function useSelectedBoard() {
  const context = useContext(SelectedBoardContext);
  if (!context) {
    throw new Error('useSelectedBoard must be used within a SelectedBoardContextProvider');
  }

  return context;
}
