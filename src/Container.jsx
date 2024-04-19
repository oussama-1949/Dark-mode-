import { useContext } from "react";
import { DarkModeContext } from "./Context/DarkModeContext";
import './Container.css'
import {LightSwitch} from './LightSwitch'



function Container(){
  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? `Container Container-dark` : `Container Container-light`} >

      <LightSwitch/>

    </div>
    
  )
}
export default Container