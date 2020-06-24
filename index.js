//Desafio 1
const nome = "Gabriel";
const peso = 86.0;
const altura = 1.90;
imc = peso / (altura*altura);

if (imc>=30){
    console.log(`${nome} seu IMC é ${imc} e você está acima do peso`);
} else if (imc<=29.9) {
    console.log(`${nome} seu IMC é ${imc} e você não está acima do peso`);
}