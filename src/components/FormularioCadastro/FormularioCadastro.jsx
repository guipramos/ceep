import React, { Component } from 'react'
import "./estilo.css";

class FormularioCadastro extends Component {
    render(){
        return (
            <form className="form-cadastro ">
                <input type="text" placeholder="Titulo" />
                <textarea placeholder="Escreva sua nota..." rows={15}/>
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        )
    }
}

export default FormularioCadastro