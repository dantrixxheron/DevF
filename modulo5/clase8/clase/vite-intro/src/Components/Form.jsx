import React from "react";
import MainButton from './MainButton';

function Form({ input, setInput, setValue }) {
    const handleForm = (e) => {
        e.preventDefault();
        setValue(input);
    }
    return (
        <form>
            <label htmlFor="name">Ingresa tu nombre</label>
            <input type="text" id="name" value={input} onChange={(e) => { setInput(e.target.value) }} />
            <MainButton text="Subir nombre" handlingFunction={handleForm} />
        </form>
    )
}
export default Form;