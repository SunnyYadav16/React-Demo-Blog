import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <div className="content">
          <Home></Home>
        </div>
      </header>
    </div>
  );
}

export default App;
