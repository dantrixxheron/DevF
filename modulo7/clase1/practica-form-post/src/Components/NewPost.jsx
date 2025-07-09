import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './NewPost.css'

export default function NewPost() {
    const { register, handleSubmit, reset, formState:{errors}} = useForm();
    const [message,setMessage]=useState('')
    const onSubmit = data => {
        console.log(data);
        setMessage('Enviado correctamente')
        reset();
    }
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className={errors.title?'input-error':''} placeholder="Titulo" {...register("title", {required:true, minLength:5})} />
                {errors.title?.type==="required"||errors.title?.type==="minLength" && <span className="error-message">Este contenido es obligatorio y debe ser mayor a 5 caracteres.</span>}
                <input type="text" className={errors.content?'input-error':''} placeholder="Contenido" {...register("content", {required: true, minLength:20})} />
                {errors.content?.type==="required"|| errors.content?.type==="minLength" && <span className="error-message">Este contenido es obligatorio y debe ser mayor a 5 caracteres.</span>}
                <input type="text" className={errors.mail?'input-error':''} placeholder="Correo" {...register("mail", {pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/})}/>
                {errors.mail?.type==="pattern" && <span className="error-message">El correo debe tener un formato válido</span>}
                <button type="submit">Enviar</button>
            </form>
            <p>{message}</p>
        </>
    );
}