import { useBoardStore } from "@/store/useBoardStore";
import { Board, Task } from "@/types/board";


/**
 * Add a task to the board in the correspondent status (column)
 * This is a helper function to add a task to a board.
 * The point of this is to not have this code multiple times in the application.
 * Unfortuantely, we can't use zustand hooks in a function
 * 
 * @param {Task} task - The task to be added.
 * @param {Board} board - The board where the task will be added.
 * @param {Board[]} allBoards - All boards in the application.
 * @param {(boards: Board[]) => void} setBoards - Function to update the boards.
 */
export function addNewTask(task: Task, board: Board, allBoards: Board[], setBoards: (boards: Board[]) => void) {
  const updatedColumn = board.columns.find(column => column.name === task.status);

  if (!updatedColumn) return;

  updatedColumn.tasks.push(task);

  const updatedBoard = board.columns.map(column => {
    if (column.name === task.status) {
      return updatedColumn;
    }
    return column;
  });

  const boardName = board.name;

  const updatedBoards = allBoards.map(board => {
    if (board.name === boardName) {
      return { ...board, columns: updatedBoard };
    }
    return board;
  });

  setBoards(updatedBoards);
}