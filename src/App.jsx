import "./App.css";
import { Home } from "./Component/Home/Home";
import { Live } from "./Component/Dashboard/Live";
import Main from "./Component/FundraisingSolution/Main";
import Donation from "./Component/FundraisingSolution/Donation";


function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      <Donation/>
      {/* <Live></Live> */}
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
