import type { Task } from "./taskModel";

export interface TaskState{
    loading: boolean;
    data: Task[];
}
