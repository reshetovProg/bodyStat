import {AppStoreProvider} from "../store/AppStoreProvider";
import InputForm from "../components/input-form/input-form";
import BodyTable from "../components/body-table/body-table";
import Header from "../components/header/header";


function MainPage() {
    return (
        <AppStoreProvider>
            <Header/>
            <div className="flex align-items-begin">
                <InputForm/>
                <BodyTable/>
            </div>
        </AppStoreProvider>
    )
}

export default MainPage;
