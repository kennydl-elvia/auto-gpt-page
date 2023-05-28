import { useState } from 'react';
import './App.css';

function App() {
  const [showHello, setShowHello] = useState(false);

  return (
    <div className='container'>
      {showHello ? <div><div>Hello from AI</div><div>{'Did you know that the first computer mouse was made of wood?'}</div></div> : <button style={{backgroundColor: 'violet'}} onClick={() => setShowHello(true)}>Click me</button>}
    </div>
  );
}

export default App;