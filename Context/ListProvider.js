import React, {useState } from "react";
import ListContext from "./ListContext";

export default ListProvider = ({children})=>{
    const [list,setList] = useState([]); 
    return (
        <ListContext.Provider value={{list,setList}}>{children}</ListContext.Provider>
    );
}