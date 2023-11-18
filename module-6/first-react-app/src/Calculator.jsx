import { useState } from "react";
import'./Cal.css'
function Calculator(){
    const [input, setInput] = useState('');
    const[result, setResult] = useState('');
    const[rotationAngle, setRotationAngle]= useState(0)

    const handleButtonClick = (value) => {
        setInput(input + value);
    };

    const handleCalculate = () =>{
    try {
        let calculatedResult = eval(input);
        setResult(calculatedResult);
    }catch (error) {
        setResult('e');
    }
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };
    
    const handleDelete = () => {
        setInput(input.slice(0,-1));
        setResult('');
    };

    const handleRotate =() => {
        setRotationAngle((rotationAngle +90) %360);
    };

    return (
        <div className='calculator' style={{ transform: `rotate(${rotationAngle}deg)` }}>
            <div className ='input-container'>

                <input type ='text' value={input}/>
                <div className='result'>{result}</div>
            </div>

            <div className='Buttons'>
        <button className="clear-button" onClick={handleClear}>C</button>
        <button className="clear-button" onClick={handleDelete}>⌫</button>
        <br />
        <button className="number-button" onClick={() => handleButtonClick('7')}>7</button>
        <button className="number-button" onClick={() => handleButtonClick('8')}>8</button>
        <button className="number-button" onClick={() => handleButtonClick('9')}>9</button>
        <button className="operator-button" onClick={() => handleButtonClick('+')}>+</button>
        <br />
        <button className="number-button" onClick={() => handleButtonClick('4')}>4</button>
        <button className="number-button" onClick={() => handleButtonClick('5')}>5</button>
        <button className="number-button" onClick={() => handleButtonClick('6')}>6</button>
        <button className="operator-button" onClick={() => handleButtonClick('-')}>-</button>
        <br />
        <button className="number-button" onClick={() => handleButtonClick('1')}>1</button>
        <button className="number-button" onClick={() => handleButtonClick('2')}>2</button>
        <button className="number-button" onClick={() => handleButtonClick('3')}>3</button>
        <button className="operator-button" onClick={() => handleButtonClick('*')}>*</button>
        <br />
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button className="equal-button" onClick={handleCalculate}>=</button>
        <button className="operator-button" onClick={() => handleButtonClick('/')}>/</button>
        <button className="rotate-button" onClick={handleRotate}>?</button> 
      </div>
    </div>
  );
}
      

        export default Calculator;
