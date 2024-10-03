const min = 1;
const max = 10;
let randomnum;
let tentativo;
let tentativirimanenti = 5;

randomnum = Math.floor(Math.random()* max - min + 2);
console.log(randomnum);
document.getElementById("rigioca").hidden = true;
document.getElementById("conferma").onclick = function(){
document.getElementById("rigioca").hidden = true;
tentativo = document.getElementById("input").value;
document.getElementById("myh1").textContent = `Il tuo tentativo è ${tentativo}`;
if(tentativo == randomnum){

        document.getElementById("myh1").textContent = `Complimenti hai indovinato il numero con ${tentativirimanenti} tentativi rimanenti`;
        document.getElementById("myh2").textContent = `Vuoi continuare?`;
        document.getElementById("rigioca").hidden = false;
        document.getElementById("conferma").disabled = true;
        document.getElementById("input").disabled = true;

    }else{

        document.getElementById("myh2").textContent = `Non hai indovinato il numero, hai ancora ${tentativirimanenti} tentativi rimanenti`;
        tentativirimanenti--;

    }
    if(tentativirimanenti == -1){

        document.getElementById("myh1").textContent = `Non hai più tentativi rimanenti, hai perso. Il numero scelto dalla macchina era ${randomnum}`;
        document.getElementById("myh2").textContent = ``;
        document.getElementById("conferma").disabled = true;
        document.getElementById("input").disabled = true;
        document.getElementById("myh2").textContent = `Vuoi continuare?`;
        document.getElementById("rigioca").hidden = false;

    }
    document.getElementById("rigioca").onclick = function(){

        randomnum = Math.floor(Math.random()* max - min + 1);
        tentativirimanenti = 5;
        document.getElementById("conferma").disabled = false;
        document.getElementById("input").disabled = false;
        document.getElementById("rigioca").hidden = true;
        document.getElementById("myh2").textContent = ``;
        document.getElementById("myh1").textContent = `Hai deciso di rigiocare, buona fortuna!`;
        console.log(randomnum);

    }
}