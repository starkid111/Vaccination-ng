import './App.css';
import CovidForm from './CovidForm';
import NavHero from './NavHero';
import Partners from './Partners';
import Symptoms from './Symptoms';
import Vaccination from './Vaccination';
import VaccineForm from './VaccineForm';


function App() {
  return (
    <div className="App">
      <NavHero />
      <Partners />
      <CovidForm />
      <Vaccination />
      <VaccineForm />
      <Symptoms />
    </div>
  );
}

export default App;
