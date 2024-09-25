import './App.css';
import CovidForm from './CovidForm';
import NavHero from './NavHero';
import Partners from './Partners';
import Symptoms from './Symptoms';
import Vaccination from './Vaccination';
import VaccineForm from './VaccineForm';
import Feedback from './Feedback';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <NavHero />
      <Partners />
      <CovidForm />
      <Vaccination />
      <VaccineForm />
      <Symptoms />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
