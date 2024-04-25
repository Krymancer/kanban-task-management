import { Task } from "@/types/board";

type RowItemProps = Task;

export function RowItem({ title, subtasks }: RowItemProps) {
  return (
    <div className='px-4 py-6 rounded-lg max-w-64 bg-white dark:bg-dark-gray text-black dark:text-white  '>
      <h1>{title}</h1>
      <p className='text-medium-gray'>{`0 of ${subtasks.length} subtasks`}</p>
    </div>
  )
}