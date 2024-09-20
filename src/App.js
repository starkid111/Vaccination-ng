import './App.css';
import CovidForm from './CovidForm';
import NavHero from './NavHero';
import Partners from './Partners';
import Vaccination from './Vaccination';


function App() {
  return (
    <div className="App">
      <NavHero />
      <Partners />
      <CovidForm />
      <Vaccination />
    </div>
  );
}

export default App;
