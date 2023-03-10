import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <p className="logo">AMY'S COOKBOOK</p>
      </header>
      <div className="content">
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
