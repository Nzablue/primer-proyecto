console.log('Hola, mi nombre es Naza');
//Clase -> (Abstracto) Molde para Creación de Elementos (Persona)
//Objeto -> (Concreto) Elemento Creado a Partir de una Clase (Nombre: Naza
                                                             // edad: 19)
//POO -> Paradigma Orientada a Objetos

//--------------- Tipos de Variables ----------------
//TipoVariable NombreVariable = ValorVariable;
let nombrePersona //declaracion (undefined inicialmente)
nombrePersona = "Naza"; //asignación
const id = 123456789; //inicializacion


//--------------- Tipos de Datos ----------------
// Numero -> Number (10 10.0 -10 -10.0)
let nuemro = 20;
console.log (nuemro);

// Texto -> String ("Hola" 'Adios' "@")
let texto = "Hola Mundo";
console.log (texto);

// Lógico -> Boolean (true false)
let logico = true;
let logico2 = false;
console.log (logico);
console.log (logico2);

// Nulo -> Null (Vacio)
let nulo = null;
console.log (nulo);

// Objeto -> Object (Representación Concreta de Algo)
    // Persona1 = {Nombre: "Naza", Edad: 19}
let persona1 = {
    Nombre: "Naza",
    Edad: 19,
    Correo: "naza@correo.com"
}
console.log (persona1);

// Arreglo -> Array (Lista/Conjunto/Agrupación de Elementos)
        // Edades = [10, 20, 30, 40 ,50]
    let Edades = [10, 20, 30, 40 ,50];
    console.log = (Edades);

// Indefinido -> Undefined (No Definido)
let indefinido = 71243894;
console.log(indefinido);



//---------------- Tipos de Operadores -------------------
// Aritméticos
let suma = 2+2;
let resta = 2-2;
let multiplicacion = 2*2;
let division = 2/2;
let modulo = 2%2;

//Comparacionales/Relacionales
let igual = 2=="2"; //true
let igualdadEstricta = 2==="2"; //false
let diferente = 2!=2; //false
let mayor = 2>2; //false
let menor = 2<2; //false
let mayorIgual = 2>=2; //true
let menorIgual = 2<=2; //true


//Lógicos
let and = true && true; //true
let or = true || false; //true
let not = !true; //false
