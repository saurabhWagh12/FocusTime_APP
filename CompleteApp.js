import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Focus from './Focus'
import ListContext from './Context/ListContext';
import { Countdown } from './Components/Countdown';
import Timer from './Components/Timer';

const CompleteApp = () => {
    const {list,setList} = useContext(ListContext);
    const [currentSubject,setCurrentSubject] = useState(null);

  return (
    <View>
      
      {!currentSubject?<View>
        
        <Focus CurrentSubject={(data)=>{setCurrentSubject(data)}}/>
        
        {list.length!==0?<Text style={styles.subHeading}>Focused On:</Text>:<></>}
        <View style={styles.listStyle}>
          {list.map((item, index) => (
            <Text style={styles.listItem} key={index}>{item}</Text>
          ))}
        </View>
      
      </View>:<Timer focusSubject={currentSubject} onTimerEnd={()=>{}} clearSubject={()=>{ setList((prevItems)=>[...prevItems,currentSubject]); setCurrentSubject(null);}}/>}

      {/* <Countdown/> */}

      
    </View>
  )
}

const styles = StyleSheet.create({
    listStyle:{
        paddingHorizontal:10,
        },
        listItem:{
            color:'#fff',
            fontSize:18,
            textAlign:'left',
            paddingHorizontal:50,
            fontWeight:'400'
        },
        subHeading:{
            textAlign:'center',
            fontSize:24,
            fontWeight:'500',
            paddingTop:25,
            paddingBottom:9,
            color:'#fff',
        },
})

export default CompleteApp