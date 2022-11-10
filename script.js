let tentativas_restantes = document.querySelector("p#tentRest")
let resultado = document.getElementById("resposta")
let Nescolhidos = []
let detector_rep = 0
let numero_sorteado = sortear()
let detecPerdedor = 1
let tent = 5
let valorRecebido = document.getElementById("valor")
let resp_numeroSort = document.getElementById("numero_sort")


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
    resp_numeroSort.innerHTML = `Número ganhador: ${numero_sorteado}`
}

function perdedor() {
    resultado.innerHTML = "[RESULTADO]: Lamendo, você não digitou o número vencedor."
    resp_numeroSort.innerHTML = `<p><strong>Número ganhador: ${numero_sorteado}</strong></p>`
}