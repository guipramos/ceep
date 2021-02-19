import React, { Component } from 'react'
import CardNota from '../CardNota'

class ListaDeNotas extends Component {
    render(){
        return (
            <ul className="lista-notas">
                {Array.of('Trabalho', 'Faculdade', 'Vida social').map((categoria, index) => {
                    return (
                        <li className="lista-notas_item" key={index}> 
                            <CardNota/>
                        </li>
                    );
                })}
              
            </ul>
        )
    }
}

export default ListaDeNotas