import './Formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';


const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    //garante que ao clicar no botao a pagina não sera recarregada.
    // esse evento é padrão do JS evento.preventDefault() serve para não deixar a pagina recarregar
    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log ('submetido')
    }
    return (

        <section className='formulario'>
              {/* chama a função ao Salvar assim que o botao for clicado  */}
            <form onSubmit ={aoSalvar}>  
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio = {true} label='Nome' placeholder="Digite seu nome" />
                <CampoTexto obrigatorio = {true} label='Cargo' placeholder="Digite seu cargo" />
                <CampoTexto label='Imagem' placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio = {true} label = 'Time' itens = {times}/>
                <Botao texto = 'Criar Card' />
            </form>
        </section>

    );


}

export default Formulario