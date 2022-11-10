let tentativas_restantes = document.querySelector("p#tentRest")
let resultado = document.getElementById("resposta")
let Nescolhidos = []
let detector_rep = 0
const numero_sorteado = sortear()
let detecPerdedor = 0

  
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
        valorRecebido.innerHTML = ""
        if (Nescolhidos.length != 0) {
            for (let c = 0 ; c < 4 ; c++) {
                if (valor == Nescolhidos[c]) {
                    alert("[ERRO]: Esse valor ja foi selecionado.")
                    detector_rep = 1
                } 
            }
        }
        if (detector_rep == 0) {
            Nescolhidos.push(valor)
        }
    }
  if (Nescolhidos.length == 5) {
        resul()    
  }
  
}

function resul() {
    for(let c = 0 ; c < 5 ; c++) {
        if (Nescolhidos[c] == numero_sorteado) {
            detecPerdedor = 1
            vencedor()
            
        }
    }
    if (detecPerdedor == 1) {
        resultado.innerHTML = "[RESULTADO]: Lamendo, você não digitou o número vencedor."
    }
}

function vencedor() {
    resultado.innerHTML = "[RESULTADO]: Você acertou o número vencedor, PARABENS!!!"
}