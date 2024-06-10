import state from './state.js'
import * as el from './elementes.js'
import { reset } from './actions.js';
import * as sounds from './sounds.js'


export function countDown(){

    /*  Limpando o contador de ID por time out*/
    clearTimeout(state.countDownId)

    if(!state.isRunning){
        return
    }


    /*  Logica de funcionamento do contador
        Transforma a String em Number para decrementar
        Chama o Reset quando o contador chegar a 0
    */
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    seconds--

    if(seconds < 0){
        seconds = 59;
        minutes--
    }

    if(minutes < 0){
        reset()
        sounds.kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)

    /*  Funcão setTimeout é uma função que recebe uma Call Back Funtion
        com intuito de repetir varias vezes para algum fim, com duração estipulada
        em milisegundos 1000ms = 1s

        Guardando o iD de time out para criar controle sobre a velocidade do tempo
    */
    state.countDownId = setTimeout(() => countDown(), 1000) 
}


export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    el.minutes.textContent = String(minutes).padStart(2, '0');
    el.seconds.textContent = String(seconds).padStart(2, '0');

}

