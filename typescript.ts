// TIPOS DE DATOS

let isDone: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint;

// String
let string: string = "cadena de caracteres";

// Arrays
let arrayNumeros1: Array<number> = [1,2,3,4];
let arrayNumeros2: number[] = [1,2,3,4];
let arrayString1: Array<string> = ["hola", "adios"];
let arrayString2: string[] = ["hola", "adios"];

// Tuple
let tuple: [string, number] = ["hola", 25];

// Enum
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// let c: Color = Color.Green;
enum Color {
    Red = 1,
    Green = 2,
    Blue = 3
}
let c: Color = Color.Green;

// Unknown
let notSure: unknown = 4;
notSure = false;

// Any
declare function getValue(key: string): any;


// Void
function warnUser():void{
    console.log("hola");
}

// Undefined
let und: undefined;

// Null
let n: null;

// Never
function error(message: string):never{
    throw new Error(message);
}
function infiniteLoop():never{
    while (true) {}
}

// Void
declare function create(o: object | null): void;
// create({prop: 0});
// create(null);

let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// INTERFACES

// 1ª Forma
function printLabel(obj: {label:string}){
    console.log(obj.label);
}
const testObj = {size: 20, label: "prueba 1"}
printLabel(testObj);

// 2ª Forma
interface ObjectInterface{
    label:string;
    name?:string;
    readonly secret: string;
} 
function printLabel2(obj: ObjectInterface){
    if (obj.name) console.log(obj.name);
    console.log(obj.label);
}
const testObj2 = {size: 20, label: "prueba 2", secret: "secreto"};
let testObj3: ObjectInterface = {label: "prueba 3", secret: "secreto"};
printLabel2(testObj2);
printLabel2(testObj3);
testObj.label = "hola";

// Si queremos agregar propiedades opcionales ponemos una interrogación al final y así no será requerida.
// Si queremos que una propiedad sea de solo lectura la declaramos poniendo delante readonly.

// FUNCIONES

