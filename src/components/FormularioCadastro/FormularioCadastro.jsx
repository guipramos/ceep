import React, { Component } from 'react'
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(props){
        super(props);

        this.titulo = "";
        this.texto = "";
        this.categoria= "Sem categoria";

        this._handleMudarTitulo = this._handleMudarTitulo.bind(this)
        this._handleMudancaTexto = this._handleMudancaTexto.bind(this)
        this._criarNota = this._criarNota.bind(this)
        this._handleMudancaCategoria = this._handleMudancaCategoria.bind(this)
    }

    _handleMudancaCategoria = (event) => {
        this.categoria = event.target.value;
    }

    _handleMudarTitulo = (event) => {
        this.titulo = event.target.value;
    }

    _handleMudancaTexto = (event) => {
        this.texto = event.target.value;
    }

    _criarNota = (event) => {
        event.preventDefault();
        this.props.criarNota(this.titulo, this.texto, this.categoria)
    }


    render(){
        return (
            <form className="form-cadastro "
                onSubmit={this._criarNota}
            >
                <select 
                    onChange={this._handleMudancaCategoria} 
                    className="form-cadastro_input" 
                >
                    <option>Sem categoria</option>
                    {this.props.categorias.map((categoria) => {
                        return <option>{categoria}</option>
                    })}
                </select>
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