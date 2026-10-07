let nome = prompt("Digite o seu nome")
let n1 = Number(prompt("Digite a primeira nota"))
let n2 = Number(prompt("Digite a primeira nota"))
let soma = (n1 + n2)
let media = soma/2

if(media >= 6){
    alert(`Parabens voce foi Aprovado com a media de: ${media}`)
}
else{
    alert("Infelizmente voce foi reprovado")
}