import TodoData from "./todo.data";

const TodoList = () => {
    const todos = [
        {
            id: 1,
            isComplete: false,
            title: "Learn React TypeScript",
        },
        {
            id: 2,
            isComplete: true,
            title: "Subscribe Youtube HoiDanIT",
        },
        {
            id: 3,
            isComplete: false,
            title: "Learn English",
        }
    ]

    return (
        <div>
            <div>My todo list: </div>
            <br />
            <TodoData
                todos={todos}
                owner={"HoiDanIT"}
                age={25}
                isDeveloper={true}
            />
        </div>
    )
}

export default TodoList;