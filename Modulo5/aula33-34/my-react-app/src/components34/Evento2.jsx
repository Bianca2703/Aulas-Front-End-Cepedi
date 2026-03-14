import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

function Evento2() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(`Usuário ${data.firstName} logou com email ${data.email} e senha ${data.senha}`)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Nome</label>
            <input {...register("firstName")} placeholder="Nome" /> <br />

            <label htmlFor="">Email</label>
            <input {...register("email")} placeholder="Email" /> <br />

            <label htmlFor="">Senha</label>
            <input {...register("senha")} placeholder="Senha" /> <br />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Evento2