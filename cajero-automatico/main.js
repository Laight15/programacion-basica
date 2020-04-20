var button = document.getElementById("button");
var result = document.getElementById("resultado");

class Bill {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}
var box = [];
box.push(new Bill(50, 10));
box.push(new Bill(20, 10));
box.push(new Bill(10, 10));
box.push(new Bill(5, 10));
box.push(new Bill(2, 10));
box.push(new Bill(1, 10));

var delivered = [];

var money;
var div = 0;
var papers = 0;

button.addEventListener("click", deliverMoney);

function deliverMoney() {
  var text = document.getElementById("money");
  money = parseInt(text.value);
  delivered = [];
  for (var bi of box) {
    if (money > 0) {
      div = Math.floor(money / bi.valor);

      if (div > bi.cantidad) {
        papers = bi.cantidad;
      } else {
        papers = div;
      }

      delivered.push(new Bill(bi.valor, papers));
      money -= bi.valor * papers;
    }
  }

  if (money > 0) {
    result.innerHTML = "Not enough money sorry";
  } else {
    result.innerHTML = "";
    for (var e of delivered) {
      if (e.cantidad > 0) {
        result.innerHTML += e.cantidad + " bills of $ " + e.valor + "<br/>";
      }
    }
  }
}
