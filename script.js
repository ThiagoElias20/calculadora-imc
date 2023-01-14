

function imc() {
  let peso = document.getElementById('peso')
  let altura = document.getElementById('altura')

  let altura2 = altura.value * altura.value
  let imc = Math.trunc(Number(peso.value) / Number(altura2))

  document.getElementById('res').innerText = `${String(imc)}`

  if (imc < 18.5 ) {
    document.getElementById('tipo').innerText = `Você Possui: Magreza`
   } else if (imc >= 18.5 && imc <= 24.9) {
    document.getElementById('tipo').innerText = `Você Possui: Normal`
   } else if (imc >= 25 && imc <= 29.9) {
    document.getElementById('tipo').innerText = `Você Possui: Sobrepeso`
   } else if (imc >= 30 && imc <= 39.9) {
    document.getElementById('tipo').innerText = `Você Possui: Obesidade`
   } else if (imc > 40) {
    document.getElementById('tipo').innerText = `Você Possui: Obesidade grave`
   }
  }
  
// mutiplicamos a altura por si mesmo, depois dividimos altura por peso ao quadrado


/*
PELEJEI PARA CRIAR  O NEGOCIO DO INPUT COM VIRGULAR, POR ENQUANTO IREI DEIXAR PARA DEPOIS.
var inputfd = document.querySelector('#altura')
inputfd.onkeyup = function(){
  var numeroVirgulado = this.value.replace(/\B(?=(\d{1})+(?!\d))/g, ",")
   // console.log(numeroVirgulado);
   this.value = numeroVirgulado

}


function miguel() {
  var altura = document.getElementById('altura').value.this
  if (altura > 99) {
    altura * 0.01
   console.log(altura * 0.01)
  } 
}

miguel();
*/


const input = document.getElementById('altura')
const testando = () => {
  if(input.value.length === 1)input.value = `${input.value},`
}
input.addEventListener('keydown',(e) => {
  if(e.keyCode !== 8) testando()
})
