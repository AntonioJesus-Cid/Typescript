// TIPOS DE DATOS
var isDone = false;
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var big;
// String
var string = "cadena de caracteres";
// Arrays
var arrayNumeros1 = [1, 2, 3, 4];
var arrayNumeros2 = [1, 2, 3, 4];
var arrayString1 = ["hola", "adios"];
var arrayString2 = ["hola", "adios"];
// Tuple
var tuple = ["hola", 25];
// Enum
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// let c: Color = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// Unknown
var notSure = 4;
notSure = false;
// Void
function warnUser() {
    console.log("hola");
}
// Undefined
var und;
// Null
var n;
// Never
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
// create({prop: 0});
// create(null);
var someValue = "this is a string";
var strLength = someValue.length;
// INTERFACES
// 1ª Forma
function printLabel(obj) {
    console.log(obj.label);
}
var testObj = { size: 20, label: "prueba 1" };
printLabel(testObj);
function printLabel2(obj) {
    if (obj.name)
        console.log(obj.name);
    console.log(obj.label);
}
var testObj2 = { size: 20, label: "prueba 2", secret: "secreto" };
var testObj3 = { label: "prueba 3", secret: "secreto" };
printLabel2(testObj2);
printLabel2(testObj3);
testObj.label = "hola";
// Si queremos agregar propiedades opcionales ponemos una interrogación al final y así no será requerida.
// Si queremos que una propiedad sea de solo lectura la declaramos poniendo delante readonly.
// FUNCIONES
