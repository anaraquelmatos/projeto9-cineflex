import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Filmes() {

    const [imagens, setImagens] = useState([{}]);


    useEffect(() => {
        axios
            .get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
            .then((response) => {
                const { data } = response;
                setImagens(data);
            })
    }, []);


    return imagens.length > 0 ? (

        <main className="Filmes">
            <h3 className="titulo">Selecione o filme</h3>
            <div className="imagens">
                {
                    imagens.map((imagem) => {
                        const { id, title, posterURL } = imagem;
                        return <div className="imagem" key={id + 1}>
                            <Link to={`/sessoes/${id}`}>
                                <img src={posterURL} alt={title} />
                            </Link>
                        </div>
                    })
                }
            </div>
        </main>
    ) : <></>
}

export default Filmes;