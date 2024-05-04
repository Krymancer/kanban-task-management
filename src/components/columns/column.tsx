"use client";

import { Subtask, type Column } from '@/types/board';
import { RowItem } from "@/components/columns/row-item";
import { ColoredCircle } from './colored-circle';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import { produce } from 'immer';
import { useBoardStore } from '@/store/useBoardStore';
import { useState } from 'react';

type ColumnProps = Column;

export function Column({ id, name, tasks }: ColumnProps) {
  const { selected, boards, setBoards } = useBoardStore();
  const [clientTasks, setClientTasks] = useState(tasks);

  function handleSubtaskClick(subtaskId: string) {
    const next = produce(boards, draft => {
      const subtask = draft.find(board => board.id === selected.id
      )?.columns.find(column => column.id === id)
        ?.tasks.find(task => task.subtasks.find(subtask => subtask.id === subtaskId))
        ?.subtasks.find(subtask => subtask.id === subtaskId);
      console.log(subtask?.title)
      subtask!.isCompleted = !(subtask?.isCompleted);
    });

    setClientTasks(next.find(board => board.id === selected.id)?.columns.find(column => column.id === id)?.tasks || []);
    setBoards(next);
  }


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
              clientTasks.map((task, index) =>
              (
                <Draggable key={task.id} draggableId={task.id} index={index} >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div>
                        <RowItem
                          {...task}
                          onSubtaskClick={handleSubtaskClick}
                          status={task.status} />
                      </div>
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