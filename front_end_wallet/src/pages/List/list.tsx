import React, { useMemo, useState, useEffect } from "react";
import { Container, Content, Filters } from "./styles";
import ContentHeader from '../../components/ContentHeader/index'
import HistoryFinanceCard from "../../components/HistoryFinanceCard";
import SelectInput from "../../components/Select";
import Saidas from '../../utils/expenses'
interface IData {
    id: string;
    description: string;
    amoutFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string;

}
// match -> parametros que estão na rota
const List: React.FC = () => {
    const [data, setData] = useState<IData[]>([])
    console.log(data)
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

    useEffect(() => {
        const response = Saidas.map(item => {

            return {
                id: String(Math.random() * 10),
                description: item.description,
                amoutFormatted: item.amount,
                frequency: item.frequency ,
                dataFormatted: item.date,
                tagColor:  item.frequency === 'recorrente' ? '#d32f2f' : '#4caf50'
            }
        })
        setData(response)
    }, []);
    return (
        <Container>
            <ContentHeader title={'Saída'} lineColor="#fff">
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
                {
                    data.map(item => (

                        <HistoryFinanceCard
                            key={item.id}
                            cardColor="#5e35b1"
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amoutFormatted} />
                    ))
                }
            </Content>
        </Container>
    )
}
export default List;