import { useState } from 'react';

function App() {
  const [showHello, setShowHello] = useState(false);

  return (
    <>
      {showHello ? <div>Hello from AI</div> : <button onClick={() => setShowHello(true)}>Click me</button>}
    </>
  );
}

export default App;