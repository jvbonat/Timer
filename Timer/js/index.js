const h1 = document.querySelector('.h1')
const btnStart = document.querySelector('.btn-start')
const btnStop = document.querySelector('.btn-stop')
const btnZerar = document.querySelector('.btn-zerar')

function criaHoraSegundos(segundos){
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'UTC'
    })
}

let segundos = 0;
let timer;

function iniciaContagem(){
     timer = setInterval(() => {
        segundos++
        h1.innerHTML = `${criaHoraSegundos(segundos)}`
    }, 1000);
}


document.addEventListener('click',(e)=>{
    const el = e.target;

    if(el.classList.contains('btn-start')){
        iniciaContagem();
        h1.classList.remove('pausado')
    }

    if(el.classList.contains('btn-zerar')){
        clearInterval(timer)
        h1.innerHTML = `00:00:00`
        segundos = 0;
    }

    if(el.classList.contains('btn-stop')){
        clearInterval(timer)
        h1.classList.add('pausado')
    }
})

