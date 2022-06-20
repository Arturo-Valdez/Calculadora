import { useRef, useState } from 'react';

enum Operadores{
  Sumar,Restar,Multiplicar, Dividir
}



export const UseCalculadora = () => {
  const [NumeroAnterior, setNumeroAnterior] = useState('0')
  const [numero, setnumero] = useState('0')

  const UltimaOperacion = useRef<Operadores>()

  //FUNCION DEL 'C'
  const limpiar = () => {
    setnumero('0')
    setNumeroAnterior('0')
  }


  //###################CUADRO DE TEXTO INICIAL################ 
  const ArmarNumero = (NumeroTexto: string) => {
    //NO PERMITIR DOBLES PUNTOS
    if (numero.includes('.') && NumeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //funcion del punto desimal
      if (NumeroTexto === '.') {
        setnumero(numero + NumeroTexto)

        //EVALUAR SI HAY OTRO CERO Y HAY UN PUNTO sigue escribiendo
      } else if (numero.includes('.') && NumeroTexto === '0') {
        setnumero(numero + NumeroTexto)


        //SI EL VALOR DE NUMERO ES 0 Y NO CONTIENE UN PUNTO, ELIMINALO E INTERPRETALO CON EL NUEVO NUMERO
      } else if (NumeroTexto !== '0' && !numero.includes('.')) {
        setnumero(NumeroTexto)


        //#############################EVITAR 00000.0####################
      } else if (NumeroTexto === '0' && !numero.includes('.')) {
        setnumero(numero)

      } else {
        setnumero(numero + NumeroTexto)
      }
    }else{
      setnumero(numero+NumeroTexto)
    }
  }



  //###################CAMBIAR VALORES DE NUMEROS A POSITIVO O NEGATIVO#################
  const PositivoNegativo = () => {
    if (numero.includes('-')) {
      setnumero(numero.replace('-', ''))
    } else {
      setnumero(('-' + numero))
    }
  }

  //####################ELIMINAR NUMEROS ANTERIOR##################
  const delDelete = () =>{

    let negativo = '';
    let numeroTem = numero;
    //SI NUMERO INCLULLE '-' ENTONSES LA VARIABLE NEGATIVO ES IGUAL A '-'
    if(numero.includes('-')){
      negativo = '-';
      numeroTem = numero.substring(1);

    }if(numeroTem.length>1){
      setnumero(negativo + numeroTem.slice(0,-1));
    }else{
      setnumero('0');
    }
  }

  //###########UTILIZAR EL NUMERO ANTERIOR CUANDO SE MULTIPLICA, SUMA, DIVIDE, RESTA######################
  const CambiarNumPorAnterior = ()=>{
    if(numero.endsWith('.')){
      setNumeroAnterior(numero.slice(0,-1))
    }else{
      setNumeroAnterior(numero)
    }
    setnumero('0')
  }




  //#########################OPERACIONES##########################
    const btnDividir=()=>{
    CambiarNumPorAnterior()
    UltimaOperacion.current = Operadores.Dividir
  }
  const btnMultiplicar=()=>{
    CambiarNumPorAnterior()
    UltimaOperacion.current = Operadores.Multiplicar
  }
  const btnRestar=()=>{
    CambiarNumPorAnterior()
    UltimaOperacion.current = Operadores.Restar
  }
  const btnSumar=()=>{
    CambiarNumPorAnterior()
    UltimaOperacion.current = Operadores.Sumar
  }

  //##################### CALCULAR ##################################
  
  //si el numero anterior esta vacio, el usuario al querer dar igual, se queda en su estado base
  const noNaN = () =>{
    if(NumeroAnterior === ''){
        setnumero(numero)
    }
  }
  
  const calcular=()=>{
    const num1 = Number(numero);
    const num2 = Number(NumeroAnterior);
    noNaN()
    switch (UltimaOperacion.current) {
      case Operadores.Sumar:
        setnumero(`${num1 + num2}`);
        break;
        case Operadores.Restar:
        setnumero(`${num2 - num1}`);
        break;
        case Operadores.Dividir:
        setnumero(`${num2 / num1}`);
        break;
        case Operadores.Multiplicar:
        setnumero(`${num1 * num2}`);
        break;
    }
    setNumeroAnterior('0')
  }
  return{
    NumeroAnterior,
    numero,
    limpiar,
    PositivoNegativo,
    delDelete,
    btnDividir,
    ArmarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular
  }
}
