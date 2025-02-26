export enum TaskStatus {
    Pending = "Pending",
    Completed = "Completed",
  }

  export interface Task{
    id: number ;
    title: string ;
    status : TaskStatus;
  }