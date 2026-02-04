import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input {...register("email")} placeholder="Email" />
      <input {...register("password")} type="password" />
      <button>Login</button>
    </form>
  );
}
