import { useBoards } from '@/hooks/useBoards';
import { useSelectedBoard } from '@/hooks/useSelectedBoard';
import { Button } from '@/components/ui/button';

import { AddNewColumn } from '@/components/columns/add-new-column';
import { Column } from '@/components/columns/column';

export function Columns() {
  const { boards } = useBoards();
  const { selected } = useSelectedBoard();
  const columns = boards.boards.filter(x => x.name === selected).map(x => x.columns).pop();

  if (!columns?.length) {
    return (
      <section className='flex flex-col items-center justify-center gap-6 px-4'>
        <p className='text-center text-medium-gray font-bold text-lg'>This board is empty. Create a new column to get started.</p>
        <Button className='w-[174px]' onClick={() => { }}>+ Add New Column</Button>
      </section>
    );
  }

  return (
    <section className='flex flex-row gap-6 p-6 overflow-scroll'>
      {
        columns.map((column, index) => (<Column key={index} name={column.name} tasks={column.tasks} />))
      }
      <AddNewColumn />
    </section>
  );
}
