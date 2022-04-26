import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/Select";
import { Container } from "./style";
const Dashboard: React.FC = () => {
    const options = [
        { 'value': 'Rodrigo', 'label': 'Rodrigo' },
        { 'value': 'Maria', 'label': 'Maria' }
    ]
    return (
        <>

            <Container>
                <ContentHeader title="Dashboard" lineColor="#E44C4E">
                    <SelectInput  options={options}/>
                </ContentHeader >
            </Container>
        </>
    )
}
export default Dashboard;