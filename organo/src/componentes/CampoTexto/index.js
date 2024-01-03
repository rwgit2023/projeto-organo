import "./CampoTexto.css";

const CampoTexto = (propse) => {
    return (
        <div className="campo-texto">
            <label>{propse.label}</label>
            <input placeholder={propse.placeholder}></input>
        </div>
    );
};

export default CampoTexto;
