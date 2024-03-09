import { reactive } from 'vue'

// APIからのレスポンス(Repository層に入れるようなデータクラス)
type ToDoResponse = {
    text: string
}

// 公開するToDoドメインモデル(Domain層に入れるようなデータクラス)
type ToDo = {
    text: string
}

export function useToDoList() {
    const todoList = reactive<ToDo[]>([])
    const fetchToDoList = async () => {
        const response = await fetch("http://localhost:8000/todos/todo/")
        const data: Array<ToDoResponse> = await response.json()
        data.forEach(element => {
            todoList.push({text: element.text})
        });
        return data
    }
    return {
        fetchToDoList,
        todoList
    }
}
