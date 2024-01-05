import './ListaSuspensa.css'


const ListaSuspensa = (props)=>{
    console.log(props.itens)

    return (

        // ISSO SEMPRE VAI APARECER QUANDO QUERO RENDERIZAR UMA LISTA NA TELA
        <div className = 'Lista-Suspensa'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key = {item}>
                        {item}
                    </option>
                    })}

                    {/* TAMBEM PODE SER FEITO ASSIM */}
                    {/* {propse.itens.map(item => <option>{item}</option>)}  */}
            </select>
        </div>
    )
}
export default ListaSuspensa
