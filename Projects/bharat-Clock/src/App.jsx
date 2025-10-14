import AppClock from './components/AppClock';
import AppSlogan from './components/AppSlogan';
import ClockTitle from './components/ClockTitle';
import './App.css';

function App() {
  return (
    <center>
      <ClockTitle />
      <AppSlogan />
      <AppClock />
    </center>
  );
}

export default App;
