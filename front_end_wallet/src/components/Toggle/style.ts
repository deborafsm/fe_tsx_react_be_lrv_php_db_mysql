import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
    display:flex;
    align-items: center;
`;
export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.gray};
    font-size: 1.2em;
    padding: 10px;
    align-items: center;

`;
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    })) <ReactSwitchProps>``;