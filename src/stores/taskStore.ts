import { defineStore } from 'pinia';
import type { TaskState } from '@/models/taskState'
import type { Task } from '@/models/taskModel'

export const useTaskStore = defineStore({
    id: 'taskStore',
    state: (): TaskState => ({
        loading: false,
        data: []
    }),
    actions: {
        addTask(task: Task): void{
            this.data.push(task);
        },
        removeTask(task: Task): void{
            this.data = this.data.filter((item) => item.id !== task.id)
        },
        updateTaskStatus(task: Task): void{
            const index = this.data.findIndex(task)
        },
    },
});
