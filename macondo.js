/*CASO #1*/

/*localStorage.selItem('salario',salario) envia*/
/*localStorage.getTtem('salario') recoge*/

function datos(){
    let nombre = document.getElementById("nombre").value;
    var dia = document.getElementById("dia").value;
    if(dia != "viernes"){
        alert(`Upss.. no hay vuelos para el día ${dia} :(`)
    }
    else{
        alert(`Estas de suerte ${nombre}!, podras hacer tu vuelo el viernes en la noche`)
    }
    document.getElementById('formulario').classList.add('display-none')
    document.getElementById('pagina').classList.remove('display-none')
    document.getElementById('saludar').innerHTML = `¡Hola! ${nombre} tu viaje es el día ${dia}`
}

var salario = parseInt(2500000)

function comerYa(){
    document.getElementById('esconder').classList.remove('display-none');
    document.getElementById('esconder2').classList.add('display-none');
    document.getElementById('caso2').classList.add('display-none')    
}
function ahoraNo(){
    document.getElementById('esconder').classList.add('display-none');
    document.getElementById('esconder2').classList.remove('display-none');
    document.getElementById('caso2').classList.remove('display-none')
    document.getElementById('colico').classList.add('display-none');
    document.getElementById('lleno').classList.add('display-none');
}
function almohabana(){
    alert("Te cayo mal la almohabana porque llevas mucho en el stand :(")
    document.getElementById('colico').classList.remove('display-none');
    document.getElementById('lleno').classList.add('display-none');
    document.getElementById('caso2').classList.remove('display-none')
    let almohabana = parseInt(15000)
    let total = (salario - almohabana)
    document.getElementById('saldo').innerHTML = total
}
function subway(){
    alert("Estas muy llenito y contento :D")
    document.getElementById('lleno').classList.remove('display-none')
    document.getElementById('colico').classList.add('display-none');
    document.getElementById('caso2').classList.remove('display-none')
    let subway = parseInt(23000)
    let total = (salario - subway)
    document.getElementById('saldo').innerHTML = total
}
/*CASO #2*/

function caso2(){
    document.getElementById('maleta').classList.remove('display-none')
}

function medidasMaletas(){

    let altoPermitido = parseInt(55)
    let largoPermitido = parseInt(40)
    let anchoPermitido = parseInt(20)

    let altoOriginal = parseInt(document.getElementById('alto').value)
    document.getElementById('alto').value = ''
    let largoOriginal = parseInt(document.getElementById('largo').value) 
    document.getElementById('largo').value = ''
    let anchoOriginal = parseInt(document.getElementById('ancho').value)
    document.getElementById('ancho').value = ''


    let alto = (altoPermitido/altoOriginal)
    let largo = (largoPermitido/largoOriginal)
    let ancho = (anchoPermitido/anchoOriginal)

    let calculo = Math.min(alto,largo,ancho)

    let nuevoAlto = altoOriginal*calculo
    let nuevoLargo = largoOriginal*calculo
    let nuevoAncho = anchoOriginal*calculo

    document.getElementById('alto1').innerHTML = `${nuevoAlto} cm`
    document.getElementById('largo1').innerHTML = `${nuevoLargo} cm`
    document.getElementById('ancho1').innerHTML = `${nuevoAncho} cm`

    document.getElementById('caso3').classList.remove('display-none')

}   
/*CASO #3*/
function hackearWifi(){
    let num1 = 0b01110010

    let num2 = 0b01101001

    let num3 = 0b01110111

    let num4 = 0b01101001

    alert(`La conversion de binario a enteros es: ${num1}_${num2}_${num3}_${num4}`)

    let clave = String.fromCharCode(num1,num2,num3,num4)
    alert(`La contraseña sifrada es: ${clave}`)
}
/*CASO #4*/

    let vocals = ["a" , "e" , "o" , "u"];
    let frase = "Taxi me puede llevar al hotel mariposas amarillas porfavor"

vocals.forEach(function(vocal){ 
    frase = frase.replaceAll(vocal, "i");
})
    function idioma(){
        alert(`Su nueva frase es: ${frase}`)
    }

/*CASO #5*/

let datorandom = Math.random()
let movimiento = "";
let carrera = "300000"

if(datorandom >= 0 && datorandom < 1/3){
    movimiento = 'piedra';
}
else if (datorandom >= 1/3 && datorandom < 2/3){
    movimiento = 'papel';
}
else if (datorandom >= 2/3 && datorandom < 1){
    movimiento = 'tijera';
}

resultado = "";

function piedra(){
    if (movimiento === 'piedra'){
        resultado = "Empate"
    }
    else if(movimiento === 'papel'){
        alert("Debes pagar 300000")
    }
    else if(movimiento === 'tijera')
    {
        alert("ganas y te sale el viaje gratis")
    }
}
function papel(){
    if (movimiento === 'papel'){
        resultado = "Empate"
    }
    else if(movimiento === 'tijera'){
        alert("Debes pagar 300000")
    }
    else if(movimiento === 'piedra')
    {
        alert("ganas y te sale el viaje gratis")
    }
}
function tijeras(){
    if (movimiento === 'tijera'){
        resultado = "Empate"
    }
    else if(movimiento === 'papel'){
        alert("Debes pagar 300000")
    }
    else if(movimiento === 'tijera')
    {
        alert("ganas y te sale el viaje gratis")
    }
}
