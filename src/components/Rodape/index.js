import "./style.css";

function Rodape({posterURL, title}) {
    return (
        <footer className="Footer">
            <div className="imagem-titulo">
                <div className="imagem">
                    <img src={posterURL} alt={title} />
                </div>
                <p>{title}</p>
            </div>
        </footer>
    );
}

export default Rodape;