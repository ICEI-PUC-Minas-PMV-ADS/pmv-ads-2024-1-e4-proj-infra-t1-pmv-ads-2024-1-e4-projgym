import './card-exercicios.css'
import Button from './button.jsx'

export default function CardExer() {
    return (
        <>
            <div class="card">
                <div class="thumb">
                    {/* <img src="" alt="" /> */}
                    [ img ]
                </div>
                <div class="info">
                    <span class="title">Agachamento com Barra</span>
                    <span class="repetitions">4 séries x 12 repetições</span>
                </div>
                <div class="check mdi mdi-check">
                    
                </div>
                <div>
                    <button class="mini-button">
                        Marcar como realizado
                    </button>
                </div>
            </div>
        </>
    );
}
