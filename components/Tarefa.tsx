import { Text, StyleSheet, View, Button } from "react-native";
import _tarefa from "../types/tarefa";

export default function Tarefa(props:{
    dados:_tarefa, 
    handleDeletePress: any
    handleConcluidoPress:any
}){
    let estilo;
    if(props.dados.concluida){
        estilo = [styles.tarefaConcluida];
    }
    else{
        estilo = [styles.tarefa];
    }
    
    return <View style = {estilo}>
        <Text style={styles.texto}>{props.dados.texto}</Text>
        <View style={styles.botoes}>
            <Button title="Excluir" color="red" onPress={()=>{ props.handleDeletePress(props.dados.id) }}/>
            <Button title="Concluida" color="green" onPress={()=>{ props.handleConcluidoPress(props.dados.id) }}/>
        </View>
    </View>;

}

const styles = StyleSheet.create({
    tarefa: {
        height: 100,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: "white",
        marginBottom: 10,
        borderRadius: 5
      },
      tarefaConcluida: {
        height: 100,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: "lightgreen", 
        marginBottom: 10,
        borderRadius: 5
      },
      botoes: {
        padding: 10,
        marginLeft: "auto",                     
      },
      texto: {
        margin: 10,
        width: 500, 
    }
})