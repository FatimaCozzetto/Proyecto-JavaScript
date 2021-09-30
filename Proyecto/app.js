/*DESAFÍO: FUNCIONES RELACIONADAS*/
let dia= Number (prompt("Ingrese el día de su nacimiento"));
let mes= Number (prompt("Ingrese el número del mes de su nacimiento"));

function suma(dia, mes){
    let resultado = dia + mes;
    return resultado;
}

console.log(suma(dia, mes));



/* DESAFÍO: SIMULADOR INTERACTIVO
let dia = prompt("Ingrese el día de su nacimiento");
let mes = prompt("Ingrese el nombre del mes de su nacimiento");

switch(mes){
    case 'marzo':
        if(dia<=20){
            alert('Su signo es Piscis');
        }
        if(dia>=21){
            alert('Su signo es Aries');
        }
    break;

    case 'abril':
        if(dia<=20){
            alert('Su signo es Aries');
        }
        if(dia>=21){
            alert('Su signo es Tauro');
        }
    break;

    case 'mayo':
        if(dia<=21){
            alert('Su signo es Tauro');
        }
        if(dia>=22){
            alert('Su signo es Géminis');
        }
    break;

    case 'junio':
        if(dia<=21){
            alert('Su signo es Géminis');
        }
        if(dia>=22){
            alert('Su signo es Cáncer');
        }
    break;

    case 'julio':
        if(dia<=22){
            alert('Su signo es Cáncer');
        }
        if(dia>=23){
            alert('Su signo es Leo');
        }
    break;

    case 'agosto':
        if(dia<=23){
            alert('Su signo es Leo');
        }
        if(dia>=24){
            alert('Su signo es Virgo');
        }
    break;

    case 'septiembre':
        if(dia<=23){
            alert('Su signo es Virgo');
        }
        if(dia>=24){
            alert('Su signo es Libra');
        }
    break;

    case 'octubre':
        if(dia<=23){
            alert('Su signo es Libra');
        }
        if(dia>=24){
            alert('Su signo es Escorpio');
        }
    break;

    case 'noviembre':
        if(dia<=22){
            alert('Su signo es Escorpio');
        }
        if(dia>=23){
            alert('Su signo es Sagitario');
        }
    break

    case 'diciembre':
        if(dia<=21){
            alert('Su signo es Sagitario');
        }
        if(dia>=22){
            alert('Su signo es Capricornio');
        }
    break;

    case 'enero':
        if(dia<=20){
            alert('Su signo es Capricornio');
        }
        if(dia>=21){
            alert('Su signo es Acuario');
        }
    break;

    case 'febrero':
        if(dia<=18){
            alert('Su signo es Acuario');
        }
        if(dia>=19){
            alert('Su signo es Piscis');
        }
}
*/
