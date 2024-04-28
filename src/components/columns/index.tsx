import { useBoards } from '@/hooks/useBoards';
import { useSelectedBoard } from '@/hooks/useSelectedBoard';
import { Button } from '@/components/ui/button';

import { AddNewColumn } from '@/components/columns/add-new-column';
import { Column } from '@/components/columns/column';

export function Columns() {
  const { selected } = useSelectedBoard();

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
      {
        selected.columns.map((column, index) => (<Column key={index} name={column.name} tasks={column.tasks} />))
      }
      <AddNewColumn />
    </section>
  );
}
