import Button from '@/components/Button';
import { useBoards } from '@/hooks/useBoards';
import { useSelectedBoard } from '@/hooks/useSelectedBoard';
import { type Task, type Column } from '@/types/board';


type RowItemProps = Task;

function RowItem({title, subtasks}: RowItemProps) {
  return (
    <div className='px-4 py-6 rounded-lg max-w-64 bg-dark-gray'>
      <h1>{title}</h1>
      <p>{`0 of ${subtasks.length} subtasks`}</p>
    </div>
  )
}

type ColumnProps = Column;

function Column({name, tasks}: ColumnProps) {
  return(
    <div className="text-white">
    {`${name} (${tasks.length})`}
      <div className='flex flex-col gap-4 justify-start'>
        {
          tasks.map((task, index) => (<RowItem key={index} {...task} />))
        }
      </div>
    </div>
  );
}

export default function Columns() {
  const {boards} = useBoards();
  const {selected} = useSelectedBoard();
  const columns = boards.boards.filter(x => x.name === selected).map(x => x.columns).pop();
  
  if(!columns?.length) {
    return (
      <section className='flex flex-col items-center justify-center gap-6 px-4'>
        <p className='text-center text-medium-gray font-bold text-lg'>This board is empty. Create a new column to get started.</p>
        <Button className='w-[174px]' onClick={() => { }}>+ Add New Column</Button>
      </section>
   );
  }

  return(
    <section className='flex flex-row gap-6 p-6 overflow-scroll'>
      {
        columns.map((column, index) => (<Column key={index} name={column.name} tasks={column.tasks} />))
      } 
    </section>
  );
}
