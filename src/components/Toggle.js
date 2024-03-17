import React, {useState} from "react";

function Toggle() {
  const[isOn,setIsOn]=useState(false)

  function Turn(){ 
    
    setIsOn(!isOn)
    console.log(isOn)
  }
  const color = isOn ? "red" : "white";
  return <button style={{background:color}} onClick={Turn}> {isOn ? "ON": "OFF"}</button>;
}

export default Toggle;
