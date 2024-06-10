import state from './state.js'
import * as timer from './timer.js'
import * as el from './elementes.js'
import * as sounds from './sounds.js'

export function toogleRunning(){
    /*  Ação de play, para iniciar o contador adicionando a class Running*/
    state.isRunning = document.documentElement.classList.toggle('running');

    sounds.buttonPressAudio.play();

    /*  Chamando a função countDown para o contador funcionar */
    timer.countDown();
}

export function set(){
    /*  Permitido que o segundos/minutos possa ser editado via atributo */
    el.seconds.setAttribute('contenteditable', true);
    el.minutes.setAttribute('contenteditable', true);
    sounds.buttonPressAudio.play();

    el.minutes.focus()
}

export function reset(){
    state.isRunning = false;
    document.documentElement.classList.remove('running');

    sounds.buttonPressAudio.play();

    /*  Chamando a função que contem as informações de update para o contador */
    timer.updateDisplay();
}

export function toogleMusic(){

    /*  Alteração da opção com ou sem som*/
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute){
        sounds.bgAudio.play();
        return;
    }

    sounds.bgAudio.pause();
}