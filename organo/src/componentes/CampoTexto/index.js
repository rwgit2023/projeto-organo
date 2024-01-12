import { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
    // let valor = 'Ronan assemiro'

    // const [valor, setValor] = useState('eu')
    const aoDigitado = (evento) => {
        // EXEMPLOS:
        // setValor (evento.target.value)
        // console.log(valor)

        props.aoAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                placeholder={props.placeholder}
                required={props.obrigatorio}
            ></input>
        </div>
    );
};
export default CampoTexto;

//required = {propse.obrigatorio}  para isso acontecer foi enviado o parâmetro no index do formulário.

//useState : é um HOOK ele vai fazer alguma coisa...     essa função retorna 2 valores ->  [Value, SetValor] -> SetValor -> prepara a variável...
//ISSO SERVE PARA RENDERIZAR ALGO...    PORQUE O REACT ENTENDE QUE NO MOMENTO QUE O ESTADO MUDA ELE PRECISA RENDERIZAR
