import './Botao.css'

const Botao = (props) => {

    return ( 
        <button className = 'botao'>
            {props.texto}
        </button>
 
    )


}

export default Botao






// {props.texto}    No lugar do .texto poderiámos usar o .children...    Isso se usa bastante quando eu quero usar uma mesma base de botão por exemplo, mas quero colocar algo amais em algum deles... um texto misturado com ícon.. etc etc.     Então eu envio la no JS do formulário oque eu quero que apareça.