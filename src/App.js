import "./App.css";
import DirList from "./components/button-components";
function App() {
  return (
    <div className="App">
      <DirList
        dirPath="D:/projects/aquator-marine/aquator"
        command="cd ../../cart-client-ui"
      />
    </div>
  );
}

export default App;
