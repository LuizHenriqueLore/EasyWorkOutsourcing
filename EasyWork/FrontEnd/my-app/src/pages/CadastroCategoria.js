import React, { useEffect, useState } from 'react';
import api from "../services/api";
import './CadastroNoticia.css'

import Header from '../components/header';
import Footer from '../components/footer';

function CadastroCategoria () {

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
        api.post('category', {
            categoryname: inputs.category
        })
        .then(() => {
            window.location.reload(); alert("Categoria criada com sucesso");
        }).catch((err) => {
            console.error("Ocorreu um erro " + err);
        });
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <div className="form-group col-sm-3 mb-2 mt-2 myform">
                    <label>Categoria:</label>
                    <input type="text" className="form-control" name="category" placeholder="Categoria" value={inputs.category || ""} onChange={handleChange} />
                </div>
                <input className="btn btn-primary mb-2 myform" type="submit" />
            </form>
            <Footer />
        </div>
        
    )
}

export default CadastroCategoria;