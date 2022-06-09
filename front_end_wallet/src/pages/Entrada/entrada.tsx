import React, { useMemo } from "react";
import { Container, Content, Filters } from "./stylesEntrada";
import ContentHeader from '../../components/ContentHeader/index'
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/Select";


// match -> parametros que estão na rota
const List: React.FC = () => {
    
    const months = [
        { 'value': 7, 'label': 'Julho' },
        { 'value': 8, 'label': 'Agosto' },
        { 'value': 9, 'label': 'Setembro' },
    ]
    const years = [
        { 'value': 2022, 'label': 2022 },
        { 'value': 2021, 'label': 2021 },
        { 'value': 2020, 'label': 2020 },
        { 'value': 2019, 'label': 2019 },
        { 'value': 2018, 'label': 2018 },
    ]
    return (
        <Container>
            <ContentHeader title={'Entrada'} lineColor="#fff">
                <SelectInput options={months} />
                <SelectInput options={years} />
            </ContentHeader>
            <Filters>
                <button
                    type="button"
                    className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>
                <button
                    type="button"
                    className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>
            <Content>
                <HistoryFinanceCard cardColor="#E44C4E" tagColor="#000" title="TV Samsung" subtitle="QLED" amount="R$ 4k" />
            </Content>
        </Container>
    )
}
export default List;