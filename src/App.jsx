import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Technology from './components/Technology';

function App() {
  return (
    <div className='container'>
      <AboutMe />
      <Experience />
      <Technology />
    </div>
  );
}

export default App;