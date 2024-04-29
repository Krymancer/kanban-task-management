import { create } from 'zustand';

import { Board } from "@/types/board";
import defaultData from '@/utils/data.json';

type BoardState = {
  boards: Board[];
  selected: Board;
  setBoards: (boards: Board[]) => void;
  setSelected: (board: Board) => void;
}

export const useBoardStore = create<BoardState>(set => ({
  boards: defaultData.boards,
  selected: defaultData.boards[0],
  setBoards: (boards: Board[]) => set({ boards }),
  setSelected: (selected: Board) => set({ selected }),
}));