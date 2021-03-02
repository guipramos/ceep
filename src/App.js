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
        this.deletarNota = this.deletarNota.bind(this)
    }

    criarNota = (titulo, texto) => {
        const novaNota = { titulo, texto }
        const novoArrayDeNotas = [...this.state.notas, novaNota]
        const novoEstado = {
            notas: novoArrayDeNotas
        }
        this.setState(novoEstado)
    }

    deletarNota = (index) => {
        let arrayNotas = this.state.notas
        console.log(arrayNotas);
        arrayNotas.splice(index, 1);
        this.setState({ notas: arrayNotas });
    }

    render(){
        return (
            <section className="conteudo">
                <FormularioCadastro criarNota={this.criarNota}/>
                <ListaDeNotas 
                    apagarNota={this.deletarNota}
                    notas={this.state.notas}
                />
            </section>
        );
    }
}

export default App;
