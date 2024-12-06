import Table from 'react-bootstrap/Table';
import {observer} from 'mobx-react-lite';
import {useAppStore} from "../../store/AppStoreProvider";

function bodyTable() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const appStore = useAppStore();

    return (
        <div>
            <h2>{appStore.params}</h2>
            <Table className="m-10" striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>шея</th>
                    <th>запястье</th>
                    <th>предплечье</th>
                    <th>бицепс</th>
                    <th>талия</th>
                    <th>бедро</th>
                    <th>лодыжка</th>
                    <th>голень</th>
                    <th>плечо</th>
                    <th>грудь</th>
                    <th>таз</th>
                </tr>
                </thead>
                <tbody>
                <tr>

                </tr>
                </tbody>
            </Table>
        </div>

    );
}

export default observer(bodyTable);