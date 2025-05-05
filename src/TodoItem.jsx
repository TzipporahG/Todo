export function TodoItem({ task, onDelete }) {
    return (
        <li className="task-item">
            {task.value}
            <button onClick={onDelete} className="remove-button">Delete</button>
        </li>
    );
}