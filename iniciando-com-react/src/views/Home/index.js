import React from "react";
import{Link} from 'react-router-dom'


export default function Home(){
    return(
        <div className="jumbotron">
  <h1 className="display-3">Bem vindo!</h1>
  <p className="lead">Este é seu sistema, utilize a barra de navegação para acessar as paginas</p>
  <hr className="my-4"/>
  <p className="lead">
    <Link className="btn btn-primary btn-lg" to="/cadastro">Cadastrar</Link>

  </p>
</div>
    )
}