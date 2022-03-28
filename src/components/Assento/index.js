import { useState } from "react";
import style from "styled-components";

function Assento({ name, isAvailable, id, setTotalAssentos, totalAssentos, identificacaoAssento, setIdentificacaoAssento, assento }) {

    const [selecionado, setSelecionado] = useState(false);
    const cor = `${isAvailable ? '#C3CFD9' : '#FBE192'}`;
    const borda = `${isAvailable ? '#7B8B99' : '#F7C52B'}`;
    const assentoSelecionado = `assento-numero ${selecionado ? "marcado" : ""}`;

    function verificarAssento() {
        isAvailable ? setSelecionado(!selecionado) : alert("Esse assento não está disponível");
        let array = [...totalAssentos];
        let index = array.indexOf(id);

        let arr = [...identificacaoAssento];
        let indexAssento = arr.indexOf(assento);
        if (isAvailable) {
            if (index > -1) {
                array.splice(index, 1);
                setTotalAssentos(array);
            } else {
                setTotalAssentos([...totalAssentos, id]);
            }
        }
        if (isAvailable) {
            if (indexAssento > -1) {
                arr.splice(indexAssento, 1);
                setIdentificacaoAssento(arr);
            } else {
                setIdentificacaoAssento([...identificacaoAssento, assento]);
            }
        }
    }

    return (
        <Div cor={cor} borda={borda} className={assentoSelecionado} onClick={() => {
            verificarAssento();
        }
        }>{name}</Div>
    );

}

const Div = style.div`
    background: ${props => props.cor};
    border: 1px solid ${props => props.borda};
`

export default Assento;