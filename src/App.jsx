import { useState } from 'react';
import './App.css';

function App() {
  const [showHello, setShowHello] = useState(false);

  return (
    <div className='container'>
      {showHello ? <div>Hello from AI</div> : <button style={{backgroundColor: 'violet'}} onClick={() => setShowHello(true)}>Click me</button>}
    </div>
  );
}

export default App;