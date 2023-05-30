import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Technology from './components/Technology';
import ConfettiButton from './components/ConfettiButton';

function App() {
  return (
    <div className='container'>
      <AboutMe />
      <Experience />
      <Technology />
      <ConfettiButton />
    </div>
  );
}

export default App;