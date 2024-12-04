import './App.css';
import InputForm from "./components/input-form/input-form";
import BodyTable from "./components/body-table/body-table";

function App() {
  return (
   <div className="flex align-items-begin">
    <InputForm/>
    <BodyTable/>
   </div>
  );
}

export default App;
