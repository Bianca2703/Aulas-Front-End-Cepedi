//Exercício Exemplo pág.:32
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function FormularioLogin() {
  //lugar central de validação:
  const schema = z.object({
    //cria um modelo objeto(espero receber um obejto com essas propriedades)
    email: z.string().email("Email Inválido"), //o campo email precisa ser um string e .email diz que precisa estar no formato de email
    senha: z.string().min(8, "Mínimo 8 caracteres"), //texto e se tiver menos de 8 caractres aparece: Mínimo 8 caracteres
  }); //se uma regra falha, o Zod gera um erro que o zodresolver pega e entrega ao React Hook Form
  //o React Hook Form coloca esse erro dentro de formState.errors
  const {
    register,
    handleSubmit, //Intercepta o envio e valida os dados usando o resolver(Zod)/ Dispara todo o processo de validação
    formState: { errors }, //destrturação de objetos: Dentro do formState quero só a propriedade errors
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*Quando o formulário for enviado, primeiro valide tudo. Se estiver válido, execute minha função onSubmit */}
      <h2>Formulario de Login</h2>
      <label htmlFor="">Email</label>
      <input {...register("email")} type="email" />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="">Senha</label>
      <input {...register("senha")} type="password" />
      {
        errors.senha && (
          <p>{errors.senha.message}</p>
        ) /*renderização condicional */
      }
      {/*<p>{errors.senha?.message}</p> optional chaing */}

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioLogin;

/*
Zod faz a validação, definindo regras
resolver(zodResolver) executa a validação, traduzindo o resultado do Zod para o formato que o React Hook Form entende
handleSubmit dispara o processo. Se tiver erro, não chama onSubmit. Se não tiver, chama onSubmit
*/
