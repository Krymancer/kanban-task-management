import { type Column } from '@/types/board';
import { RowItem } from "@/components/columns/row-item";
import { ColoredCircle } from './colored-circle';
import { Draggable, Droppable } from '@hello-pangea/dnd';

type ColumnProps = Column;

export function Column({ id, name, tasks }: ColumnProps) {
  return (
    <div className="text-white flex flex-col gap-6 min-w-64" >
      <div className='flex gap-2 items-center uppercase tracking-wider text-medium-gray font-semibold'>
        <ColoredCircle />
        {`${name} (${tasks.length})`}
      </div>
      <Droppable droppableId={id}>
        {(provided) => (
          <div className='flex flex-col gap-4 justify-start' ref={provided.innerRef} {...provided.droppableProps}>
            {
              tasks.map((task, index) =>
              (
                <Draggable key={task.id} draggableId={task.id} index={index} >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <RowItem
                        {...task}
                        status={task.status} />
                    </div>
                  )}
                </Draggable>
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}