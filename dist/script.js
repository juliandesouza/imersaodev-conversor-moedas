const botao = document.querySelector('button')

botao.onclick = () => {
  
var valorEmDolar = Number(document.querySelector('input').value.replace(',','.'))  
  
document.querySelector('h2').innerHTML = 'R$ '+(valorEmDolar * 5.50).toFixed(2)
  
}

//var valorEmDolarTexto = prompt("Qual o valor em dolar você quer converter?")
//var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
//var valorEmReal = valorEmDolarNumero * 5.50
//var valorEmRealFixado = valorEmReal.toFixed(2)

//alert(valorEmRealFixado)

// Revisão
// variáveis var int - float - string
// alert - parseInt - parseFloat - prompt
// operações + somar * multiplicar
// comentário final