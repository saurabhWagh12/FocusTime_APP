import { View, Text, StyleSheet,Vibration} from 'react-native'
import React, { useState } from 'react'
import {Button,ProgressBar} from "react-native-paper";
import { Countdown } from './Countdown';
import { Color } from '../Colors';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1*ONE_SECOND_IN_MS,1*ONE_SECOND_IN_MS,1*ONE_SECOND_IN_MS,1*ONE_SECOND_IN_MS,1*ONE_SECOND_IN_MS,
]



const Timer = ({focusSubject,clearSubject}) => {
    const [progress,setProgress] = useState(1);
    const [isStarted,setIsStarted] = useState(false);
    const [minutes,setMinutes] = useState(0.1);

    const onEnd = (reset)=>{
        // Vibration.vibrate(PATTERN);
        setIsStarted(false);
        setProgress(1);
        reset();
    }

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown isPaused={!isStarted} minutes={minutes} onProgress={(progress)=>setProgress(progress)} onEnd={onEnd}/>
      </View>

        <View >
            <ProgressBar progress={progress} color={`#${Color.gray}`} style={{height:10}}/>
        </View>
      
      <View style={[{paddingVertical:15},{alignItems:'center'}]}>
            <Text style={[{color:'#fff',fontSize:20,fontWeight:'400'}]}>Focusing On : {focusSubject}</Text>
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted?
            <Button style={styles.startPause} onPress={()=>{setIsStarted(true)}}><Text style={{color:'#fff',fontSize:22}}>Start</Text></Button>
        :
            <Button style={styles.startPause} onPress={()=>{setIsStarted(false)}}><Text style={{color:'#fff',fontSize:22}}>Pause</Text></Button>
        }
        
      </View>

      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',paddingVertical:40}}>
        <View><Button style={styles.timingButtons} onPress={()=>{setMinutes(15)}}><Text style={{color:'#fff',fontSize:22}}>15</Text></Button></View>
        <View><Button style={styles.timingButtons} onPress={()=>{setMinutes(30)}}><Text style={{color:'#fff',fontSize:22}}>30</Text></Button></View>
        <View><Button style={styles.timingButtons} onPress={()=>{setMinutes(59.999)}}><Text style={{color:'#fff',fontSize:22}}>60</Text></Button></View>

      </View>

      <View style={{flex:1,alignItems:'center'}}>
        <Button style={styles.endButton} onPress={clearSubject}><Text style={{color:'#fff',fontSize:22}}>-</Text></Button>
      </View>
     

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
    },
    countDown:{
        flex:0.5,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:60,
        width:'auto',
       
    },
    startPause:{
        borderColor:'#fff',
        borderWidth:2,
        backgroundColor:`#${Color.purple}`,
        borderRadius:100,
        width:120,
        height:120,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonWrapper:{
        fles:1,
        alignItems:'center',
        marginVertical:10,
    },
    timingButtons:{
        borderColor:'#fff',
        borderWidth:2,
        backgroundColor:`#${Color.purple}`,
        borderRadius:100,
        width:40,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        height:60,
    },
    endButton:{
        borderColor:'#fff',
        borderWidth:2,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:`#${Color.purple}`,
        width:30,
        height:60,
        borderRadius:100,
    },
});

export default Timer;