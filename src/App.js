import React,{useState} from 'react';
import './App.css';
export default function App() {
      let [OutputScreen,setOutputScreen] = useState("")
      function display(num){
        setOutputScreen(OutputScreen += num)
      }
      function calculate(){
        try{
            setOutputScreen(eval(OutputScreen));
        }
        catch(error)
          {alert('Invalid')}
      }
        function clear(){
          setOutputScreen('');
        }
        function del(){
          setOutputScreen(OutputScreen.slice(0,-1));}
  return (
    <div className='container'>
        <div className="calculator">
        <p className='output'>{OutputScreen? OutputScreen: 0}</p>
        <button onClick={clear}>Cl</button>
        <button onClick={del}>DEL</button>
        <button onClick={() => display("%")}>%</button>        
        <button onClick={() => display("/")}>/</button>
        <button onClick={() => display("7")}>7</button>
        <button onClick={() => display("8")}>8</button>
        <button onClick={() => display("9")}>9</button>
        <button onClick={() => display("*")}>*</button>
        <button onClick={() => display("4")}>4</button>
        <button onClick={() => display("5")}>5</button>
        <button onClick={() => display("6")}>6</button>
        <button onClick={() => display("-")}>-</button>
        <button onClick={() => display("1")}>1</button>
        <button onClick={() => display("2")}>2</button>
        <button onClick={() => display("3")}>3</button>
        <button onClick={() => display("+")}>+</button>
        <button onClick={() => display(".")}>.</button>
        <button onClick={() => display("0")}>0</button>
        <button onClick={calculate} className='equal'>=</button>
        </div>

    </div>
  )
}
