import { ref } from 'vue'

export function useToDoList() {
    const todoList = ref([])
    const fetchToDoList = async () => {
        const response = await fetch("http://localhost:8000/todos/todo/")
        const data = await response.json()
        todoList.value = data
        return data
    }
    return {
        fetchToDoList,
        todoList
    }
}
