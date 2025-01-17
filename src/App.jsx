import Display from './components/Display'
import Style from  './App.module.css'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'

function App() {

  const [calValue, setCalValue] = useState("")

  const onClickHandaler = (event) => {
    if(event.target.innerHTML === 'C'){
      setCalValue("");

    } else if(event.target.innerHTML === '='){
      try{
        let result = eval(calValue);
        setCalValue(result);
      } catch{
        setCalValue("Error");
      }

    } else if(event.target.innerHTML === 'B'){
      setCalValue((prev) => String(prev).slice(0, -1));
    } else {
      const newValue = calValue + event.target.innerHTML ;
      setCalValue(newValue);
    }
  }

  return (
    <>
      <div className={Style.container}>
      <h1 className={Style.heading}>Calculator</h1>
        <Display displayValue={calValue || ''}></Display>
        <ButtonsContainer eventHandalar={onClickHandaler}  ></ButtonsContainer>
      </div>
    </>
  )
}

export default App
