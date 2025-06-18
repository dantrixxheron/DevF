import React from "react";

export default function InputNumber({inputValue, setInputValue}) {

    return (
            <input
                type="number"
                value={inputValue}
                onChange={(e)=>{setInputValue(e.target.value)}}
                placeholder="Ingresa un número entre 0 y 100"
            />
    );
}