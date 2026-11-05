function mudarLuz(cor) {
  document.getElementById("vermelho").style.backgroundColor = "gray";
  document.getElementById("amarelo").style.backgroundColor = "gray";
  document.getElementById("verde").style.backgroundColor = "gray";

  document.getElementById(cor).style.backgroundColor = cor;
}