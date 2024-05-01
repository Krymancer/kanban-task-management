import { Button } from '@/components/ui/button';

import { AddNewColumn } from '@/components/columns/add-new-column';
import { Column } from '@/components/columns/column';
import { useBoardStore } from '@/store/useBoardStore';

import { DragDropContext, DropResult } from '@hello-pangea/dnd';

export function Columns() {
  const { selected, setSelected, setBoards, boards } = useBoardStore();

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;

    console.log({ source, destination });

    if (!destination) {
      return;
    }

    const sourceIndex = selected.columns.findIndex((column) => column.name === source.droppableId);
    const destinationIndex = selected.columns.findIndex((column) => column.name === destination.droppableId);

    if (sourceIndex === destinationIndex) {
      const column = selected.columns[sourceIndex];
      const tasks = [...column.tasks];
      const [removed] = tasks.splice(source.index, 1);
      tasks.splice(destination.index, 0, removed);

      const newState = [...selected.columns];
      newState[sourceIndex] = { ...column, tasks };

      setSelected({ ...selected, columns: newState });
      return;
    } else {
      console.log(sourceIndex, destinationIndex)
      const sourceColumn = selected.columns[sourceIndex];
      const destinationColumn = selected.columns[destinationIndex];

      const sourceTasks = [...sourceColumn.tasks];
      const destinationTasks = [...destinationColumn.tasks];

      const [removed] = sourceTasks.splice(source.index, 1);
      destinationTasks.splice(destination.index, 0, removed);

      const newSourceColumn = { ...sourceColumn, tasks: sourceTasks };
      const newDestinationColumn = { ...destinationColumn, tasks: destinationTasks };

      const newState = [...selected.columns];
      newState[sourceIndex] = newSourceColumn;
      newState[destinationIndex] = newDestinationColumn;

      setSelected({ ...selected, columns: newState });
      return;
    }
  }

  if (!selected.columns?.length) {
    return (
      <section className='flex w-full flex-col items-center justify-center gap-6 px-4'>
        <p className='text-center text-medium-gray font-bold text-lg'>This board is empty. Create a new column to get started.</p>
        <Button className='w-[174px]' onClick={() => { }}>+ Add New Column</Button>
      </section>
    );
  }

  return (
    <section className='flex flex-row gap-6 p-6 overflow-scroll'>
      <DragDropContext onDragEnd={onDragEnd}>
        {
          selected.columns.map((column, index) => (
            <Column key={index} name={column.name} tasks={column.tasks} />
          ))
        }
      </DragDropContext>
      <AddNewColumn />
    </section>
  );
}
