"use client";

import { Kanbam } from "@/types/board";
import { ReactNode, createContext, useContext, useState } from "react";
import defaultData from '@/utils/data.json';

export const DataContext = createContext<DataContext | null>(null);

type DataContextProviderProps = {
  children: ReactNode;
}

type DataContext = {
  data: Kanbam,
  setData: React.Dispatch<React.SetStateAction<Kanbam>>
};

export default function DataContextProvider({children} : DataContextProviderProps) {
  const [data, setData] = useState<Kanbam>(defaultData);

  return (
    <DataContext.Provider value={{
      data,
      setData
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData(){
  const context = useContext(DataContext);
  if(!context) {
    throw new Error('useData must be used within a DataContextProvider');
  }

  return context;
}