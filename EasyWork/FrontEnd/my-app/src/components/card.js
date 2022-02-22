import React from 'react';
import api from '../services/api';

function Card(props) {

    const deleteNews = () => {
        api.delete(`news/id/${props.id}`)
        .then(() => {
            window.location.reload(); alert("Noticia excluida com sucesso!");
        }).catch((err) => {
            console.error("Ocorreu um erro " + err);
        });
    }

    return (
        <div className="card text-center col-md-3">
            <div className="card-header">
                {props.categoryname}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Saiba mais</a>
            </div>
            <div className="card-footer text-muted">
                Há 2 dias.
            </div>
            <button type="button" className="btn btn-danger" onClick={deleteNews} >Excluir Noticia</button>
        </div>
    );
}

export default Card;