
let dataFinal;
let timer;

function iniciar(){
    let input = document.querySelector("#inputData").value;
    dataFinal = new Date(input).getTime();
    //timer = setInterval(contRegressivo, 1000) Assim tem um pequeno delay antes de iniciar.
    timer = setInterval(contRegressivo);
}

// Estabeleço um contador com 1s (1000 milisegundos)
function contRegressivo() {
    let dataHoje = new Date().getTime();
    let diferencaData = dataFinal - dataHoje;

    let dias = Math.floor(diferencaData / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencaData % (1000*60*60*24)/ (1000*60*60)));
    let minutos = Math.floor((diferencaData % (1000*60*60))/(1000*60));
    let segundos = Math.floor((diferencaData % (1000*60))/(1000));

    document.querySelector("#demo").innerHTML = 
        `${dias}<span class="red">d</span>`+
        ` ${horas}<span class="red">h</span>`+ 
        ` ${minutos}<span class="red">m</span>`+
        ` ${segundos}<span class="red">s</span>`;
    
        document.querySelector("#frase").style.display = "block";

    if(diferencaData < 0){
        clearInterval(timer);
        document.querySelector("#demo").innerHTML = "EXPIRADO"
    }

}

// Adicionar um evento de escuta à entrada de data
document.querySelector("#inputData").addEventListener("change", iniciar);
