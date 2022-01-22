


const TodoList = () => {

    const nextId = useRef(0)

    const addTodo = (task: string) => {
        if(!task.trim()) {
            return
    }
        const newTodoList = todoList.concat({
            id: nextId.current,
            todo: task,
            completed: false
        })
        setTodoList(newTodoList)
        setTask('')

        nextId.current += 1
    }

    const removeTodo = (index: number) => {
        const newTodoList = todoList.filter((todo, _index) => {
            return index !== _index
        })

        setTodoList(newTodoList)
    }


    const completeTodo = (id: number) => {
        const newTodoList = todoList.map(todo => {
            if(todo.id == id) {
               return {
                    id: todo.id,
                    todo: todo.todo,
                    completed: !todo.completed
                }
            }

            return todo
        })

        setTodoList(newTodoList)
    }

}


export default TodoList