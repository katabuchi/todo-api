<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import ToDoCard from '../components/ToDoCard.vue';
import AddButton from '../components/AddButton.vue';
import AddToDoModal from '../components/AddToDoModal.vue';
import { useToDoList } from '../components/ToDoList';

const { fetchToDoList, todoList } = useToDoList();
const isOpen = ref(false);

onMounted(async() => {
  await fetchToDoList().catch((e) => {
    console.error(`[ERROR] ${e}`);
  });
});

function onClick() {
  isOpen.value = !isOpen.value;
}

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
    <AddButton class="p-add_button" @click="onClick"/>
    <AddToDoModal :isOpen=isOpen />
  </div>
</template>

<style lang="scss" scoped>
.p-title {
  font-size: 1.5rem;
  text-align: start;
  margin-left: 15px;
}
.p-add_button {
  position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #42b983;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.p-add_button:hover {
    background-color: #2f9e44;
}
</style>