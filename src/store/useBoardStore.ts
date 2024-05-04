import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer'

import { Board } from "@/types/board";
import defaultData from '@/utils/data.json';

type State = {
  boards: Board[];
  selected: Board;

}

type Actions = {
  setBoards: (boards: Board[]) => void;
  setSelected: (board: Board) => void;
}

export const useBoardStore = create<State & Actions>()(
  immer((set) => ({
    boards: defaultData.boards,
    selected: defaultData.boards[0],
    setBoards: (boards: Board[]) => set({ boards }),
    setSelected: (selected: Board) => set({ selected }),
  }))
);