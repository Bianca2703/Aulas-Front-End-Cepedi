function TaskForm({ handleSubmit, title, setTitle }) {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-amber-100  flex flex-col gap-2 py-7 p-5"
    >
      <input
        type="text"
        placeholder="Digite sua tarefa..."
        className="border border-black rounded-md px-4 py-2 "
        value={title}
        onChange={
          (event) =>
            setTitle(
              event.target.value,
            ) /**"valor do input que o usuário acabou de editar" */
        }
      />
      <button className="border border-black bg-amber-300 rounded-md py-1">
        Adicionar
      </button>
    </form>
  );
}

export default TaskForm;
