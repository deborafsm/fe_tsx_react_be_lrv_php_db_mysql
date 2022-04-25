
import React from "react";
import { 
    Container, 
    TitleHeader,
    ControllersHeader
} from "./style";
const ContentHeader: React.FC = () => {
    return (
        <Container>
           <TitleHeader>
              <h2>Content Header</h2>
            </TitleHeader>
            <ControllersHeader>
                <button>teste a </button>
                <button>teste b</button>
            </ControllersHeader>
        </Container>
    );
}
export default ContentHeader;