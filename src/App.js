import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="logo">EASYCOOKING</p>
      </header>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
      <footer></footer>
    </div>
  );
}

export default App;
