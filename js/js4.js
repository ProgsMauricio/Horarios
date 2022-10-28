
function divisores(numero){
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
}

const divisoresV2 = function(numero){
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};

const divisoresV3 = (numero) => {
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;
        }
    }
    return total;
};
function calcular(){
    let numero =
    parseInt(document.getElementById("numero").value)

    let resultado =
    document.getElementById("result");

    resultado.value = divisores(numero);

}


console.log("Total divisores", divisores(32));
console.log("Total divisores", divisoresV2(32));
console.log("Total divisores", divisoresV3(32));

function actimagenes(){
    let numero_imagen = document.getElementById("imagen").value;
    let imgrest = document.querySelector(".img")

    if (numero_imagen == "1"){
        imgrest.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png" alt="300" height= 300>'
    }
    else if (numero_imagen == "2"){
        imgrest.innerHTML = '<img src="https://play-lh.googleusercontent.com/zhZWsqHQVQJf_pRimq97B24NQq8zPv_E4aW4l-RJlU5s_cDSUFo41da-D-dlJqU1tqI" alt="300" height= 300>'
    }
    else if (numero_imagen == "3"){
        imgrest.innerHTML = '<img src="https://imgs.hipertextual.com/wp-content/uploads/2022/07/marvel-studios.jpg" alt="100" heigth= 100>'
    }
    else if(numero_imagen == "4"){
        imgrest.innerHTML = '<img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_940x529/public/media/image/2022/03/tobey-maguire-andrew-garfield-tom-holland-spider-man-no-way-home-2640087.jpg?itok=Wso28UkT" alt="300" height= 300>'
    }
    else if(numero_imagen == "5"){
        imgrest.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png">'
}
}