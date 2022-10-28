let horamed= Number(prompt("Hora inicial de la toma del medicamento"));
let frecuencia= Number(prompt("Frecuencia"));
let dias= Number(prompt("Numero de dias establecidos"));

ite=(24*dias)/frecuencia;


for (i = 1; i<=ite;) {
    if ( horamed>= 24) {
        n= -1*(24-horamed) 
        horamed= n
        document.write("Toma ", i, " a las ", horamed, " horas " + "<br>");
        
        i= i+1
        horamed=horamed+frecuencia
    }
    else {
        document.write("Toma ", i, " a las ", horamed, " horas " + "<br>");
        i= i+1
        horamed=horamed+frecuencia
    }
}
let cant_numeros = prompt("Numeros perfectos");
let encontrados = 0;

let numero = 0;

document.write(`<h2>${cant_numeros} Numero Perfectos</h2>`);
while (cant_numeros != encontrados){
    numero = numero + 1;
    let suma = 0;

    for (let i = 1; i < numero; i++){
        if(numero % i == 0 ){
            suma = suma + i;
        };
    };
    if (suma == numero) {
        document.write(numero + "<br>");
        encontrados = encontrados + 1;
    };
}