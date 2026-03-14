import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function CadastroEvento() {
  const schema = z.object({
    nome: z.string().min(3, "Mínimo 3 caracteres"),
    email: z.string().email("Email Inválido"),
    tipoIngresso: z.enum(["vip", "comum", "estudante"]),
    termoUso: z.literal(true),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(schema), mode: "onchange" });

  const onSubmit = (data) => alert(JSON.stringify(data, null, 2)); //Json?

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("nome")} type="text" placeholder="Nome" />
      {errors.nome && <p>{errors.nome.message}</p>}

      <input {...register("email")} type="text" placeholder="E-mail" />
      {errors.email && <p>{errors.email.message}</p>}

      <select {...register("tipoIngresso")}>
        <option value="vip">Vip</option>
        <option value="comum">Comum</option>
        <option value="estudante">Estudante</option>
      </select>
      {errors.tipoIngresso && <p>{errors.tipoIngresso.message}</p>}

      <input
        {...register("termoUso")}
        type="checkbox"
        placeholder="Termos de Uso"
      />
      {errors.termoUso && <p>{errors.termoUso.message}</p>}

      <button type="submit" disabled={!isValid}>
        Enviar
      </button>
    </form>
  );
}

export default CadastroEvento;
