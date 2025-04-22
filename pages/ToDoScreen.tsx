import { useState } from 'react';
import { Button, ScrollView, ScrollViewBase, StyleSheet, Text, TextInput, View } from 'react-native';
import _tarefa from '../types/tarefa';
import Tarefa from '../components/Tarefa';

export default function ToDoScreen ({navigation}){
    const [novaTarefa, setNovaTarefa] = useState<string>('');
    const [tarefas, setTarefas] = useState<_tarefa[]>([]);
  
    function adicionarTarefa(){
      if(novaTarefa == ''){
        alert("Insira um texto");
        return;
      }
      let tarefa : _tarefa = {
        id : tarefas.length+1,
        texto : novaTarefa,
        concluida: false
      };
      setTarefas([...tarefas, tarefa]);
    }
  
    function mostrarTarefas(){
      let saida = tarefas.map(t => <Tarefa key={t.id} dados={t} handleConcluidoPress={concluir} handleDeletePress={excluir} />);
      return saida;
    }
  
    function excluir(id :number){
      let f = tarefas.filter(t => t.id != id);
      setTarefas(f);
    }
  
    function concluir(id :number){
        let f = tarefas.map(t => {
          if (t.id === id) {
            return { ...t, concluida: !t.concluida }; 
          }
          return t; 
        });
        setTarefas(f);
    }

  
    return (
      <View style={styles.container} key="main">
        <TextInput style={styles.input} value={novaTarefa} onChangeText={setNovaTarefa}/>
        <Button title='Adicionar tarefa' onPress={adicionarTarefa}/>
        <Button title="Busca CEP" onPress={() =>navigation.navigate('Busca CEP')}
        />
        <ScrollView>
          {mostrarTarefas()}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop:10,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 10
    },
    input:{
      width: 400,
      borderWidth: 1,
      borderColor: 'black'
    }
  });