import { reactive } from 'vue'

// APIからのレスポンス(Repository層に入れるようなデータクラス)
type ToDoResponse = {
    text: string,
    due_at: string
}

// 公開するToDoドメインモデル(Domain層に入れるようなデータクラス)
type ToDo = {
    text: string
    dueAt: string
}

export function useToDoList() {
    const todoList = reactive<ToDo[]>([])
    const fetchToDoList = async () => {
        const response = await fetch("http://localhost:8000/todos/todo/")
        const data: Array<ToDoResponse> = await response.json()
        data.forEach(element => {
            todoList.push({
                text: element.text,
                dueAt: element.due_at
            })
        });
        return data
    }
    return {
        fetchToDoList,
        todoList
    }
}
