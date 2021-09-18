let edad= prompt('Por favor, ingrese su edad.')
console.log(edad)


if(edad == ""){
    alert('Ustes no ingresó nunguna edad. Por favor, ingrese su edad actual.');
        let edad= prompt('Por favor, ingrese su edad.')
        console.log(edad)
        alert(`La edad que usted ingresó es ${edad}`)
            if ( (edad != "") && (edad>=18)){
                alert('Como ested es mayor de edad, puede continuar en esta página.');
            }
            if ((edad != "") && (edad<18)){
                alert('Usted debe tener más de 18 para continuar en esta página.');
            }
}

if ( (edad != "") && (edad>=18)){
    alert(`La edad que usted ingresó es ${edad}`)
    alert('Como ested es mayor de edad, puede continuar en esta página.');
}
if ((edad != "") && (edad<18)){
    alert(`La edad que usted ingresó es ${edad}`)
    alert('Usted debe tener más de 18 para continuar en esta página.');
}