interface IProps {
    todos: {
        id: number;
        title: string;
        isComplete: boolean;
    }[];
    owner: string;
    age: number;
    isDeveloper: boolean;
}

const TodoData = (props: IProps) => {
    const { todos, owner } = props;
    return (
        <>
            <div>
                <div>owner = {owner}</div>
                {todos.map(item => {
                    return (
                        <div key={item.id}>
                            <div>{item.title}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoData;