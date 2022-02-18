import React from "react";
import { useState, useContext, useEffect } from "react";

import firebase from "../../services/firebaseConnection";


export default function Produto(){
    const[nome, setNome] = useState('');

      
        return(
         <div className="card border-secondary mb-3" >
            <div className="card-header">Cadastro de produto</div>
            <div className="card-body">
            <form>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nome: *</label>
                            <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                            <label>SKU: *</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Descrição: </label>
                            <textarea type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Preço: *</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                            <label>Fornecedor: *</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1">
                            <button className="btn btn-success"> Salvar</button>
                    </div>
                    <div className="col-md-1">
                            <button type="submit" className="btn btn-primary">cadastro</button>
                    </div>
                </div>
            </form>
            </div>
            </div>
        )
    
}