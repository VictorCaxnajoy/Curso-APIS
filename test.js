// Hola Mundo
console.log("Hello world!!!!!")

// Variables
let a = 1;
console.log(a)
const b = 2;
console.log(b)

// Arrays
let c = [1,2,3,4,5,6,7,8,9,10];

//Tipos de salida
console.log(c[2])
console.log(`Numero ${c[2]}`)
console.log("Numero" +c[2])

// Objetos 
let nombre = "Juan";
let d = {
    nombre, 
    apellido: "Perez",
    edad: 20,
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123,
        colonia: ["San Pablo", "San Pedro"]
    }
}
console.log(d.nombre)
console.log(d.edad)
console.log(d.direccion.numero)
console.log(d.direccion.colonia[0])

// Funciones
function suma (a,b){
    let c = a+b;
    return c;
}
console.log(suma(10,20))

const suma2 = (a,b) => a+b;
console.log(suma2(1,2))

// Estructuras de Control

//if
if(1=="1"){                     //Dos iguales "="
    console.log("Verdadero")
}else{
    console.log("Falso")
}

if(1==="1"){                   //Tres iguales "=" debe ser mismo valor y tipo de dato
    console.log("Verdadero")
}else{
    console.log("Falso")
}

//For 
for (let i=0;i<10;i++){
    console.log(i)
}

