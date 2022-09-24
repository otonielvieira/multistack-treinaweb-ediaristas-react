import { SectionContainer, SectionSubtitle, SectionTitle, Wave } from "./_frequent-question.styled";


export const FrequentQuestion = () => {
    return (
        <SectionContainer>
            <Wave src={"/img/home/waves.svg"} />
            <SectionTitle>Ainda está com dúvidas?</SectionTitle>
            <SectionSubtitle>Veja abaixo as perguntas frequentes</SectionSubtitle>
        </SectionContainer>


    );
};

export default FrequentQuestion;

