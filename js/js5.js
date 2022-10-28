function calcular(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value;

    let resultado = 0;

    if (operacion == "+"){
        resultado = numero1 + numero2;
    }
    else if (operacion == "-"){
        resultado = numero1 - numero2;
    }
    else if (operacion == "*"){
        resultado = numero1 * numero2;
    }
    else if (operacion == "/"){
        resultado = numero1 / numero2;
    }

    let resul = document.getElementById("resultado");
    resul.value = resultado;

}
function tablasM() {
    let tabla = document.getElementById('tabla');
    let base = parseInt(document.getElementById('base').value);
    let longitud = parseInt(document.getElementById('longitud').value);
    let tipo = parseInt(document.getElementById('orden').value)
    let txt = ''
    
    if ( tipo == 1) {
         for ( let n = 1; n <= longitud; n++) {
              txt += `<p>${base} x ${n} = ${base * n}</p>\n`;
         }
    }
    else {
         for (let n = longitud; n > 0; n--) {
              txt += `<p>${base} x ${n} = ${base * n}</p>\n`;
         }
    }
    tabla.innerHTML = txt;
}