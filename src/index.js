// Declarando variáveis

let nomeHeroi = "Dito Malaco";
let experienciaHeroi = 6000;
let rankHeroi = ""

console.log("Olá herói " + nomeHeroi + ", vamos classificar o seu rank com base na sua experiência.")
console.log("Atualmente o Sr. " + nomeHeroi + " possui " + experienciaHeroi + " de XP.")

// Estrutura de escolha

switch(true) {
    case experienciaHeroi <= 1000:
        rankHeroi = "Ferro"  
    break;

    case experienciaHeroi > 1001 && experienciaHeroi <= 2000:
        rankHeroi = "Bronze";
    break;

    case experienciaHeroi > 2001 && experienciaHeroi <= 5000:
        rankHeroi = "Prata";
    break;

    case experienciaHeroi > 5001 && experienciaHeroi <= 6000:
        rankHeroi = "Ouro";
    break;

    case experienciaHeroi > 6001 && experienciaHeroi <= 7000:
        rankHeroi = "Platina";
    break;

    case experienciaHeroi > 7001 && experienciaHeroi <= 8000:
        rankHeroi ="Ascendente";
    break;

    case experienciaHeroi > 8001 && experienciaHeroi <= 9000:
        rankHeroi ="Imortal";
    break;

    default:
        rankHeroi = "Radiante";
}

console.log("O herói de nome " + nomeHeroi + " está no rank " + rankHeroi + ".");