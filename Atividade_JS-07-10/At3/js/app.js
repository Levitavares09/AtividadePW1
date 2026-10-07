let idade = Number(prompt("Digite sua idade"))

if(idade >= 18){

    let escolha = Number(prompt("Qual plano voce deseja? \n1-Básico \n2-Pro \n3-VIP"))

        switch(escolha){
        case 1:
            alert(`Voce escolheu ${escolha}, Seu plano é Básico, Acesso limitado`)
        break

        case 2:
            alert(`Voce escolheu ${escolha}, Seu plano é Pro, Acesso a quase tudo`)
        break

        case 3:
            alert(`Voce escolheu ${escolha}, Seu plano é VIP, Acesso a tudo`)
        break

        default:
            alert("Opção inválida")
}
}
else{
    alert(`Sua idade é ${idade} anos menos que 18, acesso negado`)
}