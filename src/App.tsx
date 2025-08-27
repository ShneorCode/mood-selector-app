import CurrentMood from './comp/CurrentMood'
import ChangeButton from './comp/ChangeButton'
import Header from './comp/Header'
import './App.css'

function App() {
  

  return (
    <>
    <Header/>
    <CurrentMood/>
    <ChangeButton textButton={"Happy 😀"} onClick={() => (console.log(1))}/>
    <ChangeButton textButton={"Sad 😢"} onClick={() => (console.log(2))}/>
    <ChangeButton textButton={"Angry 😡"} onClick={() => (console.log(3))}/>
    </>
  )
}

export default App
