let nomeHeroi = "Sydnei Magal";
let xpHeroi = 1000;
let nivelHeroi = "";

switch(true){

    case xpHeroi <= 1000:
    nivelHeroi = "Ferro";
    break;

    case xpHeroi > 1000 && xpHeroi <= 2000:
    nivelHeroi = "Bronze";
    break;

    case xpHeroi > 2000 && xpHeroi <= 5000:
    nivelHeroi = "Prata";
    break;

    case xpHeroi > 5000 && xpHeroi <= 7000:
    nivelHeroi = "Ouro";
    break;

    case xpHeroi > 7000 && xpHeroi <= 8000:
    nivelHeroi = "Platina";
    break;

    case xpHeroi > 8000 && xpHeroi <= 9000:
    nivelHeroi = "Ascendente";
    break;

    case xpHeroi > 9000 && xpHeroi <= 10000:
    nivelHeroi = "Imortal";
    break;

    case xpHeroi > 10000:
    nivelHeroi = "Radiante";
    break;
}

console.log("O herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + ".");