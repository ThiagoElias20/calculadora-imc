

function imc() {
  let peso = document.getElementById('peso').value
  let altura = document.getElementById('altura').value

  let altura2 = altura * altura
  let imc = Math.trunc(peso / altura2)

  document.getElementById('res').innerText = `${imc}`

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
