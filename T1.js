// Código cuadrado
function Cuadrado (lado){
    this.lado = lado,
    this.perimetro = this.lado*4,
    this.area = this.lado**2
}
// Fin código cuadrado


// Código triangulo
function Triangulo (lado1,lado2,base,altura) {
    this.lado1 = lado1,
    this.lado2 =lado2,
    this.base = base,
    this.altura = altura,
    this.perimetro = this.lado1 + this.lado2 + this.base,
    this.area = this.base*this.altura/2
}
// Fin código triangulo

// Código círculo
function Circulo (radio){
    this.radio = radio,
    this.diametro = this.radio*2,
    this.perimetro = 2*Math.PI*this.radio,
    this.area = Math.PI*this.radio**2
} 
// Fin código círculo

//interactuar con HTML

function traerPCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const lado = input.value;

    var cuadrado = new Cuadrado(Number(lado));

    document.getElementById("resultado").innerHTML = "El perímetro del cuadrado es: " + cuadrado.perimetro;
}

function traerACuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const lado = input.value;

    var cuadrado = new Cuadrado(Number(lado));

    document.getElementById("resultado").innerHTML = "El área del cuadrado es: " + cuadrado.area;
}

function traerPCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;

    var circulo = new Circulo(Number(radio));

    document.getElementById("resultadoCir").innerHTML = "El perímetro del cuadrado es: " + circulo.perimetro.toFixed(2);
}

function traerACirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;

    var circulo = new Circulo(Number(radio));

    document.getElementById("resultadoCir").innerHTML = "El área del cuadrado es: " + circulo.area.toFixed(2);
}