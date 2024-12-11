import {AppStoreProvider} from "../store/AppStoreProvider";
import InputForm from "../components/input-form/input-form";
import BodyTable from "../components/body-table/body-table";


function MainPage(){
    return(
        <div className="flex align-items-begin">
            <AppStoreProvider>
                <InputForm/>
                <BodyTable/>
            </AppStoreProvider>
        </div>
    )
}

export default MainPage;
