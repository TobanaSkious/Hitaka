var panier = document.querySelector(".panier");
console.log(panier);
var ajout = document.getElementsByClassName("add-to-cart");
console.table(ajout);
for (let i = 0; i < ajout.length; i++) {
  ajout[i].addEventListener("click", ajouterAuPanier);
}
function aff() {
  console.log("toubana1");
  panier.style.display = "flex";
  console.log("toubana2");
}

function hide() {
  panier.style.display = "none";
}

function ajouterAuPanier(event) {
  var button = event.target;
  var titre = button.parentElement.childNodes[1].innerHTML;
  prix = divide(titre);
  console.log(titre);
  console.log(prix);
  titre = titre.replace(/\d/g, "");
  titre = titre.replace("$", "");
  console.log(titre);
  ajoutP(titre, prix);
}

function ajoutP(titre, prix) {
  var cratShopBox = document.createElement("div");
  cratShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("box")[0];
  var cartItemsName = document.getElementsByClassName("title");
  var cartItemsQuant = document.getElementsByClassName("quant");
  var cartItemsPrix = document.getElementsByClassName("price");

  for (let i = 0; i < cartItemsName.length; i++) {
    if (cartItemsName[i].innerHTML == titre) {
      quantite = divide(cartItemsQuant[i].innerHTML);
      quantite++;
      var r = `<p class="quant">x${quantite}</p>`;
      console.log(quantite);
      console.log(cartItemsQuant[i].innerHTML);
      cartItemsQuant[i].innerHTML = cartItemsQuant[i].innerHTML.replace(
        /[0-9]/g,
        quantite
      );
      console.log(cartItemsQuant[i].innerHTML);
      updateTotal();
      return;
    }
  }

  var c = `<div class="contenu-de-cart">
                            <p class="title">${titre}</p>
                            <p class="quant">x1</p>
                            <p class="price">${prix}$</p>
                    
                        </div>`;
  cratShopBox.innerHTML = c;
  cartItems.append(cratShopBox);
  updateTotal();
}

function divide(str) {
  var reg = /\d+/g;
  var result = str.match(reg);
  return parseFloat(result[0]);
}
function updateTotal() {
  var total = 0;
  var totalPrice = document.querySelector(".totalPrice");
  var cart_B = document.getElementsByClassName("contenu-de-cart");
  for (let i = 0; i < cart_B.length; i++) {
    var priceElement = cart_B[i].getElementsByClassName("price")[0].textContent;
    var quantElement = cart_B[i].getElementsByClassName("quant")[0].textContent;
    var price = divide(priceElement);
    var quan = divide(quantElement);
    total += price * quan;
    totalPrice.innerHTML = total + "$";
  }
}
function delet() {
  var rm = document.querySelector(".box");
  rm.innerHTML = "";
  document.querySelector(".totalPrice").innerHTML = "0$";
  alert("thank you for your purchase");
}
function all1() {
  var a = document.getElementsByClassName("fltAll");
  for (let i = 0; i < a.length; i++) {
    a[i].style.display = "flex";
  }
}
function main() {
  var a = document.getElementsByClassName("fltAll");
  var b = document.getElementsByClassName("main");
  for (let i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  for (let i = 0; i < b.length; i++) {
    b[i].style.display = "flex";
  }
}
function soupe() {
  var a = document.getElementsByClassName("fltAll");
  var b = document.getElementsByClassName("soup");
  for (let i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  for (let i = 0; i < b.length; i++) {
    b[i].style.display = "flex";
  }
}
function desert() {
  var a = document.getElementsByClassName("fltAll");
  var b = document.getElementsByClassName("desert");
  for (let i = 0; i < a.length; i++) {
    a[i].style.display = "none";
  }
  for (let i = 0; i < b.length; i++) {
    b[i].style.display = "flex";
  }
}
