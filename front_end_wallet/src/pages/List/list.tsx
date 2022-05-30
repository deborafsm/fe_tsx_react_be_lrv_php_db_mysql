import React from "react";
import { Container, Content } from "./styles";
import ContentHeader from '../../components/ContentHeader/index'
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/Select";
const List: React.FC = () => {
    const options = [
        { 'value': 'Rodrigo', 'label': 'Rodrigo' },
        { 'value': 'Maria', 'label': 'Maria' }
    ]
    return (
        <Container>
            <ContentHeader title="List" lineColor="#fff">
                <SelectInput options={options} />
            </ContentHeader>
            <Content>
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
            </Content>
        </Container>
    )
}
export default List;