import { useContext } from "react";
import { DarkModeContext } from "./Context/DarkModeContext";


export function LightSwitch(){
  const {darkMode , toggleDarkMode} = useContext(DarkModeContext)
  const handleClick = () => {
    toggleDarkMode();
  }
  return (
    <div className="LightSwitch">
      <img className=""  onClick={handleClick} src={darkMode ? `../moon.png` : `../brightness.png` }  style={{ width: "70px", height: "70px" }}/>
    </div>
  )
}


