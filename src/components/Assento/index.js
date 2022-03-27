import { useState } from "react";
import style from "styled-components";

function Assento({ name, isAvailable }) {

    const [selecionado, setSelecionado] = useState(false);
    const cor = `${isAvailable ? '#C3CFD9' : '#FBE192'}`;
    const borda = `${isAvailable ? '#7B8B99': '#F7C52B'}`;
    const assentoSelecionado = `assento-numero ${selecionado ? "marcado" : ""}`;


        return (
                <Div cor={cor} borda={borda} className={assentoSelecionado} onClick={() => {
                    isAvailable ? setSelecionado(!selecionado) : alert("Esse assento não está disponível")}}>{name}</Div>
        );


}

const Div = style.div`
    background: ${props => props.cor};
    border: 1px solid ${props => props.borda};
`

export default Assento;