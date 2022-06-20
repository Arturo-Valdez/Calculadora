import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../Theme/AppTheme';
import { BotonCal } from '../Components/BotonCal';
import { UseCalculadora } from '../Hooks/UseCalculadora';

const CalculadoraScreen = () => {

  const {
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
  } = UseCalculadora();

  return (
    <View style={styles.CalculadoraContainer}>
      {/*numero anterio es diferente a sero y muestra numero anterior  */}
      { NumeroAnterior !== '0' && (<Text style={styles.resultadosmall}> {NumeroAnterior} </Text>)}
      
      {/*numberOfLines ES IGUAL A LA CANTIDAD DE LINEAS QUE QUIERES UTILIZAR Y adjuntsFontSizeToFit nos permite encoger el texto cuando crece*/}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit> {numero} </Text>

      {/*FILA DE BOTONES*/}
      <View style={styles.filas}>
        <BotonCal texto='C' color='#9B9B9B' accion={limpiar} />
        <BotonCal texto='+/-' color='#9B9B9B' accion={PositivoNegativo} />
        <BotonCal texto='del' color='#9B9B9B' accion={delDelete} />
        <BotonCal texto='%' color='#FF9427' accion={btnDividir} />
      </View>

      {/*FILA DE BOTONES*/}
      <View style={styles.filas}>
        <BotonCal texto='7' accion={ArmarNumero} />
        <BotonCal texto='8' accion={ArmarNumero} />
        <BotonCal texto='9' accion={ArmarNumero} />
        <BotonCal texto='x' color='#FF9427' accion={btnMultiplicar} />
      </View>

      {/*FILA DE BOTONES*/}
      <View style={styles.filas}>
        <BotonCal texto='4' accion={ArmarNumero} />
        <BotonCal texto='5' accion={ArmarNumero} />
        <BotonCal texto='6' accion={ArmarNumero} />
        <BotonCal texto='-' color='#FF9427' accion={btnRestar} />
      </View>

      {/*FILA DE BOTONES*/}
      <View style={styles.filas}>
        <BotonCal texto='1' accion={ArmarNumero} />
        <BotonCal texto='2' accion={ArmarNumero} />
        <BotonCal texto='3' accion={ArmarNumero} />
        <BotonCal texto='+' color='#FF9427' accion={btnSumar} />
      </View>

      {/*FILA DE BOTONES*/}
      <View style={styles.filas}>
        <BotonCal texto='0' accion={ArmarNumero} ancho={true} />
        <BotonCal texto='.' accion={ArmarNumero} />
        <BotonCal texto='=' color='#FF9427' accion={calcular} />
      </View>


    </View>
  )
}

export default CalculadoraScreen