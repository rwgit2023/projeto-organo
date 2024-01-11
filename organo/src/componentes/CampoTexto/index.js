import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (propse) => {

    const [valor, setValor] = useState('eu')
    // let valor = 'Ronan assemiro'
    const aoDigitado = (evento) => {
        setValor (evento.target.value)
        console.log(valor)

    }


    return (
        <div className="campo-texto">
            <label>{propse.label}</label>
            <input  value = {valor} onChange={aoDigitado} placeholder={propse.placeholder} required={propse.obrigatorio}></input>

        </div>
    );
    //required = {propse.obrigatorio}  para isso acontecer foi enviado o parâmetro no index do formulário.
};

export default CampoTexto;
