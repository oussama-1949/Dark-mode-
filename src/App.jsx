
import './App.css'
import Container from './Container'
import {DarkModeProvider} from './Context/DarkModeContext'

function App() {

  return (
    <>
    <DarkModeProvider>
      <Container/>
    </DarkModeProvider>
  
    </>
  )
}

export default App
