import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../Theme/AppTheme'

//CREAR UNA INTERFAS DESCRIBIEDO EL TIPO DE VARIABLE
interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion:(NumeroTexto:string)=>void;
}

//EXPORTAR TEXTO CON SU CLASIFICACION
export const BotonCal = ({ texto, color = '#2D2D2D', ancho = false, accion }: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      {/*NO LLEVA LLAVES EL VALOR COLOR*/}
      <View style={{ ...styles.Boton, backgroundColor: color, width: (ancho === true) ? 160 : 70 }}>
        {/*CONDICIONAL SI COLOR ES IGUAL A #9B9B9B ENTONSES COLOR VA SER IGUAL A NEGRO SINO BLANCO */}
        <Text style={{ ...styles.BotonTexto, color: (color === '#9B9B9B') ? 'black' : 'white' }}> {texto} </Text>
      </View>
    </TouchableOpacity>
  )
}

