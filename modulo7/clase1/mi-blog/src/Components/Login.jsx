import { useUser } from "../Context/UserContext";
import { useForm } from "react-hook-form";
import './Login.css'

export default function Login() {
  const { user, login } = useUser();
  const { register,handleSubmit, formState: { errors }} = useForm();

  if(user) return null;

  const onSubmit = (data)=>{
    login(data.nombre,data.password);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} aria-label="Formulario de Login" className="login">
        <input  className={errors.nombre ? 'input-error':'' } type="text" placeholder="Nombre" {...register("nombre",{required:true})} />
        {errors.nombre && <p className="error-message">El nombre es obligatorio</p>}
        <input  className={errors.nombre ? 'input-error':'' } type="password" placeholder="Contraseña" {...register("password",{required:true})} />
        {errors.password && <p className="error-message">La contraseña es obligatorio</p>}
        
        <button type="submit">Iniciar sesión</button>
    </form>
  )
}
