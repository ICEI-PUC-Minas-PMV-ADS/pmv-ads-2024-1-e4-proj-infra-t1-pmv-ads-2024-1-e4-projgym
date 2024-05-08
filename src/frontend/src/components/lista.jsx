import './lista.css'
import CardExer from './card-exercicios.jsx'

export default function Lista() {
    return (
        <>
            <div class="lista">
                <h3>Lista de exercícios</h3>
                <CardExer></CardExer>
                <CardExer></CardExer>
                <CardExer></CardExer>
            </div>
        </>
    );
}
