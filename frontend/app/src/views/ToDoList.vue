<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useToDoList } from '../components/ToDoList';

const { fetchToDoList, todoList } = useToDoList();

const sample = ref('');

onMounted(async() => {
  await fetchToDoList().catch((e) => {
    console.error(`[ERROR] ${e}`);
  });
  if (todoList.length !== 0) {
    sample.value =  todoList[0].text;
  }
});

</script>

<template>
  <div>
    <p>{{ sample }}</p>
  </div>
</template>