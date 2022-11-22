import { atom, useSetRecoilState, useRecoilValue  } from "recoil";
import { TodoList } from "@/types/todo-list";

export default function useTodoListState() {
    const todoListState = atom({
        key: 'TodoList',
        default: [] as TodoList[],
    });

    const setTodoList = useSetRecoilState(todoListState)

    const todoList = useRecoilValue(todoListState);

    const addTodoList = (newTodoList: TodoList) => {
        setTodoList((oldTodoList: TodoList[]) => [
            ...oldTodoList,
            {
                id: newTodoList.id,
                title: newTodoList.title,
                description: newTodoList.description
            }
        ])
    }

    return {
        todoListState,
        todoList,
        addTodoList,
    }
}