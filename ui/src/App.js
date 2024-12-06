import './App.css';
import InputForm from "./components/input-form/input-form";
import BodyTable from "./components/body-table/body-table";
import {AppStoreProvider} from "./store/AppStoreProvider";

function App() {
  return (
   <div className="flex align-items-begin">
       <AppStoreProvider>
            <InputForm/>
            <BodyTable/>
       </AppStoreProvider>
   </div>
  );
}

export default App;
