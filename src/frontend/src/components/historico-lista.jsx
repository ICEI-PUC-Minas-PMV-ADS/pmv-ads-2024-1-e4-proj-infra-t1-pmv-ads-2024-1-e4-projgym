import './lista.css'
import CardHist from './historico-card.jsx'

export default function ListaHist() {
    return (
        <>
            <div class="lista">
                <h3>Histórico de exercícios</h3>
                <CardHist></CardHist>
                <CardHist></CardHist>
            </div>
        </>
    );
}
