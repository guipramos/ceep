import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import React, { Component } from 'react';

import "./assets/app.css";
import "./assets/index.css";
class App extends Component {

    constructor(){
        super();

        this.state = {
            notas: []
        }
        this.criarNota = this.criarNota.bind(this)
    }

    criarNota = (titulo, texto) => {
        const novaNota = { titulo, texto }
        const novoArrayDeNotas = [...this.state.notas, novaNota]
        const novoEstado = {
            notas: novoArrayDeNotas
        }
        this.setState(novoEstado)
    }

    render(){
        return (
            <section className="conteudo">
                <FormularioCadastro criarNota={this.criarNota}/>
                <ListaDeNotas notas={this.state.notas}/>
            </section>
        );
    }
}

export default App;
