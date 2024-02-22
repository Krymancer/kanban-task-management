"use client";

import { Kanbam } from "@/types/board";
import React, { ReactNode, createContext, useContext, useState } from "react";
import defaultData from '@/utils/data.json';

export const BoardsContext = createContext<BoardsContext | null>(null);

type BoardsContextProviderProps = {
  children: ReactNode;
}

type BoardsContext = {
  boards: Kanbam,
  setBoards: React.Dispatch<React.SetStateAction<Kanbam>>
};

export default function BoardsContextProvider({children} : BoardsContextProviderProps) {
  const [boards, setBoards] = useState<Kanbam>(defaultData);
  
  return (
    <BoardsContext.Provider value={{
      boards,
      setBoards,
    }}>
      {children}
    </BoardsContext.Provider>
  );
}

export function useBoards(){
  const context = useContext(BoardsContext);
  if(!context) {
    throw new Error('useBoards must be used within a BoardsContextProvider');
  }

  return context;
}
