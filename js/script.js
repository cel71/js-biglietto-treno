var numeroKilometri = prompt("Quanti kilometri deve percorrere ?");
document.getElementById("kilometri").innerHTML = numeroKilometri + " Km da percorrere.";
var prezzoBiglietto = parseInt(numeroKilometri) * 0.21;
document.getElementById("biglietto").innerHTML = prezzoBiglietto + " Euro, prezzo biglietto non scontato.";
var anniPasseggero = prompt("Qual'è la sua età ?");
document.getElementById("anni").innerHTML = anniPasseggero + ": Anni passeggero.";
if (anniPasseggero < 18) {
    var scontoVenti = prezzoBiglietto * 20 / 100;
    document.getElementById("sconto").innerHTML = scontoVenti + " Euro, sconto del 20 % sul prezzo del biglietto.";
    var prezzoTotale = prezzoBiglietto - scontoVenti;
    var prezzoTotaleArrotondato = Math.round(prezzoTotale * 100) / 100;
    document.getElementById("totale").innerHTML = prezzoTotaleArrotondato + " Euro totali, prezzo da pagare.";
} else if ((anniPasseggero >= 18) && (anniPasseggero <= 65)) {
    document.getElementById("sconto").innerHTML = "Nessuno sconto.";
    document.getElementById("totale").innerHTML = "Prezzo pieno.";
} else if (anniPasseggero > 65) {
    var scontoQuaranta = prezzoBiglietto * 40 / 100;
    document.getElementById("sconto").innerHTML = scontoQuaranta + " Euro, sconto del 40 % sul prezzo del biglietto.";
    var prezzoTotale = prezzoBiglietto - scontoQuaranta;
    var prezzoTotaleArrotondato = Math.round(prezzoTotale * 100) / 100;
    document.getElementById("totale").innerHTML = prezzoTotaleArrotondato + " Euro totali, prezzo da pagare.";
}
