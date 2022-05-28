
import './components(Kovalchuk)/RunningLine.js';
import './App.css';
import RunningLine from './components(Kovalchuk)/RunningLine.js';
import Search from './components(Kovalchuk)/Search.js';
import Logo from './components(Kovalchuk)/Logo.js'
import Header from './components(Kovalchuk)/Header.js';



function App() {
  return (
    
    <div className="App">
   <RunningLine />
   <Search/>
   <Logo/>
   <Header/>
       </div>
  );
}

export default App;
