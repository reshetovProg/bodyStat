import Table from 'react-bootstrap/Table';
import {observer} from 'mobx-react-lite';
import {useAppStore} from "../../store/AppStoreProvider";
import {useEffect} from "react";

function BodyTable() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const appStore = useAppStore();

    useEffect(()=>{
        appStore.updateParams();
    }, [appStore]);

    return (
        <div>
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
                    {appStore.params.map((param, index)=>(
                        <tr key={index}>
                            <td >{index+1}</td>
                            <td >{param.neck}</td>
                            <td >{param.wrist}</td>
                            <td >{param.forearm}</td>
                            <td >{param.biceps}</td>
                            <td >{param.belly}</td>
                            <td >{param.hip}</td>
                            <td >{param.ankle}</td>
                            <td >{param.shin}</td>
                            <td >{param.shoulder}</td>
                            <td >{param.breast}</td>
                            <td >{param.pelvis}</td>
                        </tr>
                        ))}
                </tbody>
            </Table>
        </div>

    );
}

export default observer(BodyTable);