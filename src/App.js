import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <Link to="/" className="logo-container">
            <p className="logo">AMY'S COOKBOOK</p>
          </Link>
        </header>
        <div className="content">
          <Pages />
        </div>
        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
