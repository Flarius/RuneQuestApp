function eventoDados(e,input,constante) {
  let cantidadDados = e.target.parentElement.parentElement.dataset.cantidad;
  let numeroCaras   = e.target.parentElement.parentElement.dataset.dado;
  disparador(input);
  if (constante != null){
    input.value   = constante + tirarDados (cantidadDados, numeroCaras);
  }else{
    input.value   = tirarDados (cantidadDados, numeroCaras);
  }
  
}

function tirarDados (cantidadDados, numeroCaras){
  let numero = 0;
  for (i = 1; i <= cantidadDados; i++){
      numero += Math.floor(Math.random() * numeroCaras);
  }
  return numero;
}

function disparador(element){
  //creamos el evento focus
  let event = new Event('focus');
  //asignamos el evento al elemento 
  element.dispatchEvent(event);
} 

function validarQueSeaNumero (event){
  if(event.keyCode != 46){
    if (event.keyCode < 48 || event.keyCode > 57){
      return false;
    }
    return true;
  }
  return true;
}
function validarPrecio (importeVal,keypress,e){
  if(keypress){
    importeVal = importeVal + String.fromCharCode(e.keyCode);
  }
  if(isNaN(importeVal)){ // Se valida que sea un numero.
    return false;
  }
  /* habilitar si tiene decimal
    if(importeVal.indexOf('.') != -1){ //Si tiene decimales
      let numAsArray = importeVal.split('.');
      let parteEntera = numAsArray[0];
      let parteDecimal = numAsArray[1];
      let condicion;
      if(parteDecimal.length > 2 || parteEntera.length > 5){ 
        return false;
      }
      else{
        return true;
      }       
    }
    else{ //Si no tiene decimales
      if(importeVal.length > 5){
        return false;
      }
      else{
        return true;
      }
  }*/
  if(importeVal.length > 2){
    return false;
  }
  if (importeVal > 18){
    return false;
  }
  else{
    return true;
  }
  
}

function getDataSet (element, dato){
   //necesito saber como concatenar el contenido del dato con el data set
   return element.dataset. dato;
}