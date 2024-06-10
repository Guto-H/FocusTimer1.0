let defaultMode = true;

/*  Variavel para coletar o Elemento pelo ID, no caso botão de troca de modo*/
const btnToogleMode = document.getElementById('mode')

/*  Construindo o evento Click e a arrow function para alternar modo
    alterando classe direto no HTML via documentElement
    verificando e alternando variavel de verificação de modo 'defaultMode'
    coletando o elemento 'span' no evento que está como target e alterando texto que contem no elemento*/
btnToogleMode.addEventListener('click', (event) =>{
    document.documentElement.classList.toggle('light');

    const mode = defaultMode ? 'claro' : 'escuro';

    event.currentTarget.querySelector('span').textContent = `Modo ${mode} ativado!`;

    defaultMode = !defaultMode;
})