import { BrowserRouter } from 'react-router-dom'; 
import Movies from "./Components/Movies";
import Series from "./Components/Series";
import Header from "./Sections/Header.js";
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Movies></Movies>
        <Series></Series>
        <Header></Header>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
