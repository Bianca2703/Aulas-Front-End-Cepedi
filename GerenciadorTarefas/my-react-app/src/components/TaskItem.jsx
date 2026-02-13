function TaskItem({ task, onTaskClick, onDeletedClick }) {
  return (
    <li className="flex gap-1 border border-slate-500 rounded-md py-3 bg-amber-200">
      <p
        className={`w-full  ${task.isCompleted == true ? "line-through" : ""}`}
      >
        {task.title}
      </p>
      <button className="w-1/5" onClick={() => onTaskClick(task.id)}>
        V
      </button>
      <button className="w-1/5" onClick={() => onDeletedClick(task.id)}>
        X
      </button>
    </li>
  );
}

export default TaskItem;
