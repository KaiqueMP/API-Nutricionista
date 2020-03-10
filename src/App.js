import React, { Component } from 'react';
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component{

    constructor(props){
        super(props);
        this.state ={
            nutri: []

        };
    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        fetch(url)
        .then((r) => r.json())
        .then((json) => {
            let state = this.state;
            state.nutri = json;
            this.setState(state);
            console.log(json);
        })
    }


    render (){
        return(
            <div className="container">
                <header>
                    <strong>React Nutri</strong>
                    
                    <a className="kaique" href="https://www.linkedin.com/in/kaique-marques/">Feito por Kaique Marques</a>
                </header>
                {this.state.nutri.map((item) => {
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo"> {item.titulo} </strong>
                            <img  className="capa"src={item.capa}/>
                            <p className="subTitulo"> {item.subtitulo} </p>
                            <a className="buttonAcess" href="">Ler mais</a>
                        </article>
                    );
                })}

            </div>
        );
    }
}

export default App;