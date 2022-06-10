import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';




const App = () => {

  const [numero, setNumero] = useState('...')
  function handleNumero(){
    const novo_numero = Math.floor(Math.random() * 100) //tirando as virgulas
    setNumero(novo_numero)
  }
  return(
      <>
    < SafeAreaView style={style.container}>
      <Text style={style.textoCabeca}> Sorteando um número de 0 até 100</Text>
      <Text style={style.numero}> {numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text style={style.textobotao}>
          Pressione 
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
    </>
  );
};
const style = StyleSheet.create({
    container:{
      backgroundColor: 'red',
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    },
    numero:{
      fontSize:50,
      color:'white',
      fontWeight:'bold',
    },
    botao:{
      backgroundColor:'white',
      width: '100%',
      paddingHorizontal:5,
      paddingVertical:10,
      borderRadius: 10,
      justifyContent:'center',
      alignItems:'center',
      marginTop: 30,
    },
    textoCabeca:{
      fontSize: 20,
      marginBottom: 100,
      fontWeight:'bold',

    }
  
})
export default App;