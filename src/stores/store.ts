import { defineStore } from "pinia";

export const useTodoStore = defineStore({
    id: "todo",
    state: () => ({
        todos: [] as string[],
    }),
    actions: {
        add(todo: string) {
            this.todos.push(todo);
        },
        remove(index: number) {
            this.todos.splice(index, 1);
        },
    },
});