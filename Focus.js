import React, { useContext, useEffect, useState } from "react";
import { View,StyleSheet,ScrollView ,Text,TouchableOpacity} from "react-native";
import { TextInput,Button} from "react-native-paper";
import { Color } from "./Colors";
import ListContext from "./Context/ListContext";

const Focus = ({CurrentSubject})=>{

    const [subject,setSubject] = useState(null);
    const {list,setList} = useContext(ListContext);

    const SaveFocus=()=>{
        if (subject) {
            setList((prevList) => [...prevList, subject]);
            setSubject(null);
          }
          console.log(list)
    }
    
    return (<>
    <View style={styles.container}>
        <Text style={styles.text}>
            Focus
        </Text>

        <View style={styles.inputContainer}>
            <View>
            <TextInput label="Focus Time"
                value={subject} // clear text after button click
                onChangeText={(e)=>{
                    setSubject(e);
                }} style={[{backgroundColor:'#fff',width:290,height:50,borderRadius:5}]} />
        
            </View>

            <View>
                <Button style={styles.button} onPress={()=>{
                    CurrentSubject(subject);
                }}><Text style={[{color:'#fff',fontSize:34}]}>+</Text></Button>
            </View>
        
        </View>

       

        
    </View>
    </>)
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            
        },
        inputContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingVertical: 10,
            
          },
        text:{
            color:'#fff',
            fontSize:30,
            fontWeight:'500',
            textAlign:'center',
        },
        button:{
            backgroundColor:`#${Color.lightPurple}`,
            width:10,
            borderRadius:100,
            marginVertical:10,
        },
        
    }
)

export default Focus;