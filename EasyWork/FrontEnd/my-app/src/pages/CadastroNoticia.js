import React, { useEffect, useState } from 'react';
import api from "../services/api";
import './CadastroNoticia.css'

import Header from '../components/header';
import Footer from '../components/footer';

function CadastroNoticia () {

    //const [categorys, setCategorys] = useState(null);
    const [inputs, setInputs] = useState({});

    /*useEffect(() => {
        async function getCategorys() {
        const response = await api.get("category");
        console.log(response.data.map((c) => c.categoryname));
        setCategorys(response.data.map((c) => c.categoryname));
        console.log(categorys);
      }
      getCategorys();
    }, []);*/

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        api.post('news', {
            category: inputs.category,
            title: inputs.title,
            description: inputs.description
        })
        .then(() => {
            window.location.reload(); alert("Noticia criada com sucesso");
        }).catch((err) => {
            console.error("Ocorreu um erro " + err);
        });
    }

    return (
        <div>
            <Header />
            <div className="text-center">
                    <h1>EasyWork Notícias</h1>
                    <p>O maior portal de notícias do Brasil e do Mundo.</p>
                    <a href="http://localhost:3000/CadastroCategoria" className="col align-self-center btn btn-primary createnews">Criar nova Categoria</a>
                </div>
            <form className="myform" onSubmit={handleSubmit}>
                <div className="form-group col-sm-3">
                    <label>Categoria:</label>
                    <input type="text" className="form-control" name="category" placeholder="Categoria" value={inputs.category || ""} onChange={handleChange} />
                </div>
                <div className="form-group col-sm-3">
                    <label>Titulo:</label>
                    <input type="text" className="form-control" name="title" placeholder="Título" value={inputs.title || ""} onChange={handleChange} />
                </div>
                <div className="form-group col-sm-3 mb-2">
                    <label>Descrição:</label>
                    <textarea type="text" className="form-control" rows="3" name="description" placeholder="Descrição" value={inputs.description || ""} onChange={handleChange} />
                </div>
                <input className="btn btn-primary mb-2" type="submit" />
            </form>
            <Footer />
        </div>
        
    )
}

export default CadastroNoticia;