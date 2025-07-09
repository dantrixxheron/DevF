import React from "react";
import { useForm } from "react-hook-form";
import './SimpleForm.css';

export default function SimpleForm() {
    //le indica que cualquiera de los dos va a ser usado como función 
    // y otro como parámetro
    const { register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = data => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className={errors.nombre ? 'input-error':'' } type="text" placeholder="Nombre" {...register("nombre", {required:true, minLength:5})}/>
            {errors.nombre?.type==="required"&& <span className="error-message">El nombre es obligatorio</span>}
            {errors.nombre?.type==="minLength"&& <span className="error-message">El nombre debe tener más de 5 caracteres</span>}
            <input type="text" placeholder="Apellido" {...register("apellido")}/>
            <input type="text" placeholder="Edad" {...register("edad")}/>
            <input className={errors.correo ? 'input-error':'' } type="text" placeholder="Correo" {...register("correo", {required:true, minLength:10})}/>
            
            {errors.correo?.type==="required"&& <span className="error-message">{errors.correo.type==="required"? 'Campo obligatorio':'Debe tener al menos 10 caracteres'}</span>}
            <button type="submit">Enviar</button>
        </form>
    );
}