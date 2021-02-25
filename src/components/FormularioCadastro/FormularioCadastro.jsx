import React, { Component } from 'react'
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(props){
        super(props);

        this.titulo = "";
        this.texto = "";

        this._handleMudarTitulo = this._handleMudarTitulo.bind(this)
        this._handleMudancaTexto = this._handleMudancaTexto.bind(this)
        this._criarNota = this._criarNota.bind(this)
    }

    _handleMudarTitulo = (event) => {
        this.titulo = event.target.value;
    }

    _handleMudancaTexto = (event) => {
        this.texto = event.target.value;
    }

    _criarNota = (event) => {
        event.preventDefault();
        this.props.criarNota(this.titulo, this.texto)
    }


    render(){
        return (
            <form className="form-cadastro "
                onSubmit={this._criarNota}
            >
                <input 
                    type="text" 
                    placeholder="Titulo" 
                    className="form-cadastro_input"
                    onChange={this._handleMudarTitulo}
                />
                <textarea 
                    placeholder="Escreva sua nota..." 
                    rows={15}
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto}
                />
                <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
            </form>
        )
    }
}

export default FormularioCadastro