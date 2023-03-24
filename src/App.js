import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('10%');
  const [split, setSplit] = useState(1);
  const [splitTotal, setSplitTotal] = useState(0);

  const handleTipChange = (e) =>{
    let value = e.target.value.replace('%','');
    if(value.indexOf('%') === -1){
      value = value + '%'
    }
    setTip(value);
  }
  const splitMinus = () => {
    if(split > 1){
      setSplit(split - 1);
    } 
  }
  const splitPlus = () => {
    setSplit(split + 1)
  }

  const calculateResult = () =>{
    const percentage = 1 + parseInt(tip.replace('%',''))/100;
    const result = (bill * percentage / split).toFixed(2);
    setSplitTotal(result)
  };
  const handleBillChange = (e) =>{
    setBill(e.target.value);
  }
  useEffect(() => {
    calculateResult();
  }, [bill,tip,split])
  
  return (
    <div>
      <h2>Tip calculator</h2>
      <label>Bill total</label>
      <input type='text' placeholder={'0.00'} value={bill}
      onChange={handleBillChange}/>
      <label>Tip:</label>
      <input type='text' placeholder={'0.00'} value={tip}
      onChange={ handleTipChange}/> 
      <div className='summary'>
        <div className='split'>
          <label>split</label>
          <div className='split-controll'>
            <button onClick={splitMinus}>-</button>
            <span>{split}</span>
            <button onClick={splitPlus}>+</button>
          </div>
        </div>
        <div className='result'>
          <label>Split total</label>
          <span>{splitTotal}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
