import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
  const [firstText, setFirstText] = React.useState('')
  const [secondText, setSecondText] = React.useState('')
  const [firstTextWords, setFirstTextWords] = React.useState(0)
  const [secondTextWords, setSecondTextWords] = React.useState(0)
  const [compareResult, setCompareResult] = React.useState(true)
  const handleFirstText =(value) => {
setFirstText(value)
setFirstTextWords(value.split(' ').length)
setCompareResult(value ===secondText)
  }
  const handleSecondText =(value) => {
setSecondText(value)
setSecondTextWords(value.split(' ').length)
setCompareResult(value ===firstText)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='content'>
          <div>
            <textarea value={firstText} onChange={(e) =>handleFirstText(e.target.value)}>

            </textarea>
            <p>
{firstTextWords}
            </p>
          </div>
          <div>
          <textarea value={secondText} onChange={(e) =>handleSecondText(e.target.value)}>
</textarea>
<p>
{secondTextWords}

  </p> 
           </div>
          
        </div>
        <p>
            {compareResult?"Same":"Different"}
          </p>
      </header>
    </div>
  );
}

export default App;
