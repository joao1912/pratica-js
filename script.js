let tentativas_restantes = document.querySelector("p#tentRest")
let resultado = document.getElementById("resposta")
let Nescolhidos = []
let detector_rep = 0
let numero_sorteado = sortear()
let detecPerdedor = 1
let tent = 5
let valorRecebido = document.getElementById("valor")
let resp_numeroSort = document.getElementById("numero_sort")
let denovo = document.getElementById("denovo")


function sortear(){
    let Nsorteado = Math.ceil(Math.random() * 50)
    return Nsorteado
}

function Verificar(){
    let valorRecebido = document.getElementById("valor")
    let valor = valorRecebido.value
    detector_rep = 0
    if (valor < 1 || valor > 50) {
        alert("[ERRO]: valor ínvalido!")
    } else {
        if (Nescolhidos.length != 0) {
            for (let c = 0 ; c < 4 ; c++) {
                if (valor == Nescolhidos[c]) {
                    alert("[ERRO]: Esse valor ja foi selecionado.")
                    detector_rep = 1
                } 
            }
        }

        valorRecebido.value = ''
        valorRecebido.focus()
        if (detector_rep == 0) {
            tent -= 1
            Nescolhidos.push(valor)
            tentativas_restantes.innerHTML = `<ins>Tentativas restantes: ${tent}</ins>`
        }
        
    }

  if (Nescolhidos.length == 5) {
        resul()    
  }
  

}

function resul() {
    denovo.removeAttribute("disabled")
    for(let c = 0 ; c < 5 ; c++) {
        if (Nescolhidos[c] == numero_sorteado) {
            vencedor()
        } 
    }
    if (detecPerdedor == 1) {
        perdedor()
    }
}

function vencedor() {
    
    detecPerdedor = 0
    resultado.innerHTML = "[RESULTADO]: Você acertou o número vencedor, PARABENS!!!"
    resp_numeroSort.innerHTML = `<p><strong>O número vencedor é: ${numero_sorteado}</trong></p>`
    valorRecebido.setAttribute("disabled","disabled")
}

function perdedor() {
    resultado.innerHTML = "[RESULTADO]: Você não acertou o número vencedor."
    resp_numeroSort.innerHTML = `<p><strong>O número vencedor é: ${numero_sorteado}</trong></p>`
    valorRecebido.setAttribute("disabled","disabled")
}

function recomeçar() {
    valorRecebido.removeAttribute("disabled")
    valorRecebido.focus()
    tent = 5
    resultado.innerHTML = ""
    tentativas_restantes.innerHTML = `<ins>Tentativas restantes: ${tent}</ins>`
    resp_numeroSort.innerHTML = ``
    Nescolhidos = []
    numero_sorteado = sortear()
}
