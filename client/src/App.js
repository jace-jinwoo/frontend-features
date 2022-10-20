import Template from "./components/Template";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Template />
      </BrowserRouter>
    </div>
  );
}

export default App;
