import React, { useEffect, useState } from 'react';
import api from "../services/api";
import './Home.css'

import Header from '../components/header';
import Footer from '../components/footer';
import Card from '../components/card';

function Home() {
    
    const [news, setNews] = useState(null);

    /*useEffect(() => {
        api.get("news")
        .then((response) => setNews(response.data))
        .catch((err) => {
            console.error("Ocorreu um erro " + err);
        });
    }, []);*/

    useEffect(() => {
        async function getNews() {
        const response = await api.get("news");
        setNews(response.data);
      }
      getNews();
    }, []);

    /*const handleSubmit = (event) => {
        api.get(`news/title/${event.target.value}`)
        .then((response) => {
            setNews(response.data); alert(event.target.value)
        }).catch((err) => {
            console.error("Ocorreu um erro " + err);
        });
    }*/

    const handleChange = (event) => {
        if(event.target.value){
            api.get(`news/title/${event.target.value}`)
            .then((response) => {
                setNews(response.data);
            }).catch((err) => {
                console.error("Ocorreu um erro " + err);
            });
        }else{
            api.get('news')
            .then((response) => {
                setNews(response.data);
            }).catch((err) => {
                console.error("Ocorreu um erro " + err);
            });
        }
        
    }
    

    /*useEffect(() => {
        api.get('news').then(res=>{
            console.log(res.data[0]);
        })
    }, [])*/

    if (!news) return null;

    return (
        <div>
            <Header />
            <div className="myhome">
                <div className="text-center">
                    <h1>EasyWork Notícias</h1>
                    <p>O maior portal de notícias do Brasil e do Mundo.</p>
                    <a href="http://localhost:3000/CadastroNoticia" className="col align-self-center btn btn-primary createnews">Criar nova Notícia</a>
                    <form className="d-flex myform">
                        <input className="form-control mr-sm-2 mynavbar" type="search" placeholder="Search" aria-label="Search" name="title" onChange={handleChange} />
                        <button className="btn btn-outline-success my-2 my-sm-0 mynavbar" type="submit">Search</button>
                    </form>
                </div>
                
                <div>
                    <ul className="list-group align-center">
                        { news.map( (n) => <li className="list-group-item myli">{<Card id={n._id} categoryname={n.category} title={n.title} description={n.description} />}</li> ) }
                    </ul>
                </div>
            </div>
            
            <Footer />
        </div>
        
    )
}

export default Home;