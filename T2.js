const originalPrice = 120;
const discount = 15;

function finalPrice(){

    const input1 = document.getElementById("price");
    const price = input1.value;

    const input2 = document.getElementById("discount");
    const discount = input2.value;

    var FPrice = (price * (100-discount))/100;

    document.getElementById("resultado").innerText = "El precio que debes pagar es: " +  FPrice;
}