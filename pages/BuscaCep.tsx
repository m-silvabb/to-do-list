import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function BuscaCep({navigation}) {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(
      {
        cep:' ',
        logradouro: '',
        complemento: '',
        unidade: '',
        bairro: '',
        localidade: '',
        uf: '',
        estado: '',
        regiao: '',
        ibge: '',
        gia: '',
        ddd: '',
        siafi: ''
      }
    );
  
    async function buscarCEP(){
      let r = await fetch("https://viacep.com.br/ws/"+cep+"/json/");
      let dados = await r.json();
      setEndereco(dados);
    }
  
    return (
      <View style={styles.container}>
        <Text>Consulte seu CEP</Text>
        <TextInput 
        style={styles.textinput}
        value={cep}
        onChangeText={setCep}
        />
        
        <Text>{cep}</Text>

        <Button title='Buscar'onPress={buscarCEP}/>
        
        <View style={styles.resultado}>
          <Text>CEP: {endereco.cep}</Text>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Endereço: {endereco.complemento}</Text>
          <Text>Unidade: {endereco.unidade}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Localidade: {endereco.localidade}</Text>
          <Text>UF: {endereco.uf}</Text>
          <Text>Estado: {endereco.estado}</Text>
          <Text>Regao: {endereco.regiao}</Text>
          <Text>IBGE: {endereco.ibge}</Text>
          <Text>GIA: {endereco.gia}</Text>
          <Text>DDD: {endereco.ddd}</Text>
          <Text>SIAFI: {endereco.siafi} </Text>
          <StatusBar style="auto" />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput:{
      borderWidth: 1,
      color: 'red'
    },
    resultado: {
      marginTop: 20,
      padding: 15,
      borderRadius: 5,
      width: '80%',
      height:'30%',
      borderWidth: 1,
      borderColor: 'black'
    }
  });