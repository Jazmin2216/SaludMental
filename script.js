function elegir(){
  var opcion=prompt("Ingresa una opcion: 1.-SUMA,  2.-EDAD , 3.-CUBO Y CUADRADO DE UN NUMERO");
if (opcion==1){
alert ("1.-SUMA." );
var num1=prompt("Ingresa el primer numero: ");
var num2=prompt("Ingresa el segundo numero: ");
var suma=parseInt(num1)+parseInt(num2);
alert("La suma es: " +suma);
}
  else if(opcion==2){
alert ("2.-EDAD." );
var edad=prompt("Ingresa tu año de nacimiento:");
var ed=2023-parseInt(edad);
   if(ed>=18){ 
    alert("Eres mayor de edad, puedes votar. Tienes " + ed +" años");
}
   else {
    alert("Erees menor de edad, no puedes votar. Tienes " + ed + " años");
}
}

else if(opcion==3){
alert("3.-CUBO Y CUADRADO DE UN NÚMERO.");
var num=prompt("Ingresa un numero: ");
var cubo=parseInt(num)*(num)*(num);
var cuadrado=parseInt(num)*(num);
alert("El cubo del numero es: " +cubo);
alert("El cuadrado del numero es: " +cuadrado);

}
  
}

