function Todo(props) {
    return (
        <div className="item">
            <div className="items">{props.title}</div>
            <div className="items">
                <span>{props.description}</span>
                <button onClick={props.onOpenModal}>Delete</button>
            </div>
        </div>
    )
}

export default Todo
