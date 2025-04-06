function bordeImagen() {
  let imagen = document.querySelector("#imagenNezuko");
  let borde = document.querySelector("#imagenNezuko").style.border;

  if (borde) {
    document.querySelector("#imagenNezuko").style.border = "";
  } else {
    document.querySelector("#imagenNezuko").style.border = "2px solid red";
  }
}

function cantidadStickers() {
  let sticker1 = Number(document.querySelector("#cant-stickers1").value);
  let sticker2 = Number(document.querySelector("#cant-stickers2").value);
  let sticker3 = Number(document.querySelector("#cant-stickers3").value);

  let total = sticker1 + sticker2 + sticker3;

  if (total <= 10) {
    document.querySelector("#texto-stickers").innerHTML =
      "Llevas " + total + " stickers";
  } else {
    document.querySelector("#texto-stickers").innerHTML =
      "Llevas demasiados stickers";
  }
}

function verificarPass() {
  let numero1 = Number(document.querySelector("#select1").value);
  let numero2 = Number(document.querySelector("#select2").value);
  let numero3 = Number(document.querySelector("#select3").value);

  if (numero1 == 9 && numero2 == 1 && numero3 == 1) {
    document.querySelector("#texto-password").innerHTML = "Password 1 correcto";
  } else if (numero1 == 7 && numero2 == 1 && numero3 == 4) {
    document.querySelector("#texto-password").innerHTML =
      "Password 2 es correcto";
  } else {
    document.querySelector("#texto-password").innerHTML = "Password incorrecto";
  }
}
