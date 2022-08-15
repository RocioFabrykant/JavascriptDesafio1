//INGRESAR EDAD, NOMBRE Y APELLIDO HASTA QUE LA EDAD SEA MENOR A 18. SE MUESTRA POR CONSOLA: NOMBRE,APELLIDO,EDAD SOLO DE LOS MAYORES. ALERTA CUANDO ES MENOR A 18.
/*let nombre;
let apellido;
let edad;
do{
    nombre = prompt("Ingrese Nombre");
    apellido = prompt("Ingrese apellido");
    edad = parseInt(prompt("Ingrese edad"));
    if(edad>=18){
    console.log("Su nombre y apellido:", nombre,apellido,"su edad es:", edad );
    }
} while(edad>=18)
if(edad<=18){
    alert("Es menor de edad");
}else{
    alert("Valor ingresado incorrecto");
}*/

//PEDIR 3 NUMEROS Y MOSTRAR EL RESULTADO DE LA MULTIPLICACION DEL NUMERO POR SU SIGUIENTE
let numero;
let calculo;
for(let i = 0; i<3; i++){
    numero = parseInt(prompt("Ingrese el numero"));
    calculo = numero * (numero + 1);
    console.log("El numero ingresado es:", numero, "El resultado de la multiplicacion es:", calculo);
}