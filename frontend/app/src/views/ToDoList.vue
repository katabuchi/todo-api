<script lang="ts" setup>
import { onMounted } from 'vue';
import ToDoCard from '../components/ToDoCard.vue';
import { useToDoList } from '../components/ToDoList';

const { fetchToDoList, todoList } = useToDoList();

onMounted(async() => {
  await fetchToDoList().catch((e) => {
    console.error(`[ERROR] ${e}`);
  });
});
</script>

<template>
  <div>
    <h1 class="p-title">ToDo List</h1>
    <ToDoCard
      v-for="(todo, index) in todoList"
      :key="index"
      :title="todo.text"
      :date="todo.dueAt"
    />
  </div>
</template>

<style lang="scss" scoped>
.p-title {
  font-size: 1.5rem;
  text-align: start;
  margin-left: 15px;
}
</style>