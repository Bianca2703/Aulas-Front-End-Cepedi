import { useEffect, useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";
import { v4 } from "uuid";
import TaskForm from "./components/TaskForm";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saveTasks = localStorage.getItem("tasks");

    saveTasks ? setTasks(JSON.parse(saveTasks)) : [];
    setIsLoaded(true);
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeletedClick(taskId) {
    //mantém só as tarefas cujo id é diferente do id que eu quero deletar
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  const [title, setTitle] = useState("");
  function onSubmmitTask(title) {
    const newTaskAdd = {
      id: v4(),
      title,
      isCompleted: false,
    };
    setTasks([...tasks, newTaskAdd]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmmitTask(title);
    setTitle("");
  }

  useEffect(() => {
    if (!isLoaded) {
      //se for false não continua
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks, isLoaded]);

  const pendentTasks = tasks.filter(
    (task) => task.isCompleted === false,
  ).length;
  useEffect(() => {
    document.title = `TaskMaster (${pendentTasks} pendentes)`;
  }, [pendentTasks]);

  //FAZER O FORM NÃO REGARREGAR A PAGINA, CANCELANDO COMPORTAMENTO PADRÃO DO EVENTO
  return (
    <div className="flex flex-col p-6 space-y-4 shadow">
      <h1 className="text-2xl">Gerenciador de Tarefas</h1>
      <TaskForm handleSubmit={handleSubmit} title={title} setTitle={setTitle} />
      <div className="bg-amber-100 p-5">
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onTaskClick={onTaskClick}
              onDeletedClick={onDeletedClick}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
