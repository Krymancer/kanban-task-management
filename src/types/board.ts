export type Kanbam = {
  boards: Board[];
}


export type Board = {
  id: string;
  name: string
  columns: Column[]
}

export type Column = {
  id: string;
  name: string
  tasks: Task[]
}

export type Task = {
  id: string;
  title: string
  description: string
  status: string
  subtasks: Subtask[]
}

export type Subtask = {
  id: string;
  title: string
  isCompleted: boolean
}
