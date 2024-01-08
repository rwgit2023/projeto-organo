import "./CampoTexto.css";

const CampoTexto = (propse) => {
    return (
        <div className="campo-texto">
            <label>{propse.label}</label>
            <input placeholder={propse.placeholder} required = {propse.obrigatorio}></input>
        </div>
    );
};

export default CampoTexto;
