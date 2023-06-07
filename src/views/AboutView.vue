<template>
    <div>
        <h1 class="font l">TODO List</h1>
        <form @submit.prevent="addTodo">
            <input
                v-model.trim="newTodo"
                type="text"
            >
            <button type="submit">Add</button>
        </form>
        <ul>
            <li
                v-for="(todo, index) in todos"
                :key="index"
            >
                <span>{{ todo }}</span>
                <button @click="removeTodo(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";

import { useTodoStore } from "../stores/store";


const todoStore = useTodoStore();

const newTodo = ref("");

const addTodo = () => {
    if (newTodo.value) {
        todoStore.add(newTodo.value);
        newTodo.value = "";
    }
};

const removeTodo = (index: number) => {
    todoStore.remove(index);
};

const todos = ref(todoStore.todos);

</script>