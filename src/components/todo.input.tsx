import { useState } from "react";

interface ITodo {
    id: number;
    title: string;
    isComplete: boolean;
}

interface IProps {
    name?: string;
    addNewTodo: (value: ITodo) => void;
}

const TodoInput = (props: IProps) => {
    const { addNewTodo } = props;

    const [todo, setTodo] = useState("");

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    const randomIntFromInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleClick = () => {
        if (!todo) {
            alert("Empty todo");
            return;
        }
        addNewTodo({
            id: randomIntFromInterval(1, 100000),
            title: todo,
            isComplete: false,
        })
        setTodo("");
    }
    return (
        <>
            <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
                <input
                    type="text"
                    value={todo}
                    onChange={handleTextChange}
                />
                <button onClick={handleClick}>Add Todo</button>
            </div>
        </>
    )
}

export default TodoInput;