import './App.css';
import MainMenu from './components/mainMenu';
import MonthSelection from './components/monthSelection';

function App() {
  return (
    <main className="relative">
      <div className="flex">
        <MainMenu />
        <MonthSelection />
      </div>
    </main>
  );
}

export default App;
