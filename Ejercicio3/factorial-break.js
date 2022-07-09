var resultado = 1;
let i = 1;
let max = 10;
let sigue = true;

while(sigue){
    if(i>max){
        sigue =  false;
        break;
    }else{
        resultado = resultado * i;
        console.log(resultado);
        i++;
    };
};

window.alert("El factorial de 10 es " + resultado);