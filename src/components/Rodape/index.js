import "./style.css";

function Rodape({ posterURL, title, weekday, name, hifen }) {

    return (
        <footer className="Rodape">
            <div className="imagem-titulo">
                <div className="imagem">
                    <img src={posterURL} alt={title} />
                </div>
                <div className="detalhes-filme">
                    <p>{title}</p>
                    <div className="informacoes" >
                        <p>{weekday} {hifen} {name}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;