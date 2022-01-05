// console.group("cuadrados")
// console.log("El lado del cuadrado mide: 5")
// console.log("El perimetro es: 20")
// console.log("El área es: 25")
// console.groupEnd()

const PI = Math.PI

function areaCuadrado(lado){
    return lado * lado
}
function perimetroCuadrado(lado){
    return lado * 4
}
function areaTriangulo(base, altura){
    return (base * altura) / 2
}
function perimetroTriangulo(base, lado1, lado2){
    return Number(base) + Number(lado1) + Number(lado2) 
}
function areaCirculo(radio){
    return PI * radio * radio
}
function perimetroCirculo(radio){
    return PI * getDiametroCirculo(radio)
}
function getDiametroCirculo(radio){
    return radio * 2
}


function calculaAreaCuadrado(){
    const input = document.getElementById("ladoCuadrado")
    const lado = input.value
    const area = areaCuadrado(lado)
    alert("El área del cuadrado es: "+area)
}
function calculaPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado")
    const lado = input.value
    const perimetro = perimetroCuadrado(lado)
    alert("El perímetro del cuadrado es: "+perimetro)
}
function calculaAreaCirculo(){
    const input = document.getElementById("radioCirculo")
    const radio = input.value
    const area = areaCirculo(radio)
    alert("El área del circulo es: "+area)
}
function calculaPerimetroCirculo(){
    const input = document.getElementById("radioCirculo")
    const radio = input.value
    const perimetro = perimetroCirculo(radio)
    alert("El perímetro del circulo es: "+perimetro)
}
function calculaAreaTriangulo(){
    const input1 = document.getElementById("baseTriangulo")
    const base = input1.value
    const input2 = document.getElementById("alturaTriangulo")
    const altura = input2.value
    const area = areaTriangulo(base, altura)
    alert("El área del circulo es: "+area)
}
function calculaPerimetroTriangulo(){
    const input1 = document.getElementById("baseTriangulo")
    const base = input1.value
    const input2 = document.getElementById("lado1Triangulo")
    const lado1 = input2.value
    const input3 = document.getElementById("lado2Triangulo")
    const lado2 = input3.value
    const perimetro = perimetroTriangulo(base, lado1, lado2)
    alert("El perímetro del circulo es: "+perimetro)
}