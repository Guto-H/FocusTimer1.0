import * as actions from './actions.js'
import * as el from './elementes.js'
import state from './state.js'
import { updateDisplay } from './timer.js'

/*  Exportando uma função que registra qual botão foi clicado pelo usuario*/
export function registerControls(){
    el.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function"){
            return
        }
        
        actions[action]()
        
    })
}

export function setMinutes(){
    el.minutes.addEventListener('focus', () =>{
        el.minutes.textContent = "";
    })

    /*  Função que não deixa digitar letra com a variavel \d*/
    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    /*  Evento que limita a quantidade de minutos em no maximo 60*/
    el.minutes.addEventListener('blur', (event) => {
        
        let time = event.currentTarget.textContent;
        time = time > 60 ? 60 : time;

        state.minutes = time;
        state.seconds = 0;

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}

