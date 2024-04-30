import { type Column } from '@/types/board';
import { RowItem } from "@/components/columns/row-item";
import { ColoredCircle } from './colored-circle';

type ColumnProps = Column;

export function Column({ name, tasks }: ColumnProps) {
  return (
    <div className="text-white flex flex-col gap-6 min-w-64">
      <div className='flex gap-2 items-center uppercase tracking-wider text-medium-gray font-semibold'>
        <ColoredCircle />
        {`${name} (${tasks.length})`}
      </div>
      <div className='flex flex-col gap-4 justify-start'>
        {
          tasks.map((task, index) => (<RowItem key={index} {...task} status={task.status} />))
        }
      </div>
    </div>
  );
}