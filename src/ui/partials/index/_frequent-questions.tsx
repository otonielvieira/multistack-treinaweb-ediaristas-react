import { AccordionDetails, AccordionSummary, Container, Typography } from "@mui/material";
import { AccordionStyled, SectionContainer, SectionSubtitle, SectionTitle, Wave } from "./_frequent-question.styled";


export const FrequentQuestion = () => {
    return (
        <SectionContainer>
            <Wave src={"/img/home/waves.svg"} />
            <Container>
                <SectionTitle>Ainda está com dúvidas?</SectionTitle>
                <SectionSubtitle>Veja abaixo as perguntas frequentes</SectionSubtitle>

                <AccordionStyled>

                    <AccordionSummary expandIcon={<i className="twf-minus"/>}>
                        <Typography color={"primary"}>Titulo</Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>Detalhes</Typography>
                    </AccordionDetails>

                </AccordionStyled>

            </Container>

        </SectionContainer>


    );
};

export default FrequentQuestion;

