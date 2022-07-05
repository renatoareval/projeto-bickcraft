/*ativar links do menu  */

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = location.href;
    const href = link.href;


    if(url.includes(href)){
        link.classList.add('ativo');
    }

}

links.forEach(ativarLink);


/*ativar items orçamentos */


const params = new URLSearchParams(location.search);

params.forEach((item) => {
  const element = document.querySelector(`[type="radio"][value="${item}"]`);
  if (element) element.checked = true;
});


/*perguntas frequentes */


const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
   
}

function eventosPerguntas(pergunta){

    pergunta.addEventListener('click',ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

console.log(perguntas);