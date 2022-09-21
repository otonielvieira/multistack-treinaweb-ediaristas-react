import {
    ContainerStyled,
    SectionContainer,
    SectionTitle,
    SectionSubtitle,
    SectionButton
} from "./_presentation.stlyled";


const Presentation = () => {
    return <SectionContainer>
        <ContainerStyled>

            <SectionTitle>
                Encontre agora mesmo um(a) <em>diarista</em>
                <i className="twf-search" />
            </SectionTitle>

            <SectionSubtitle>
                São mais de 5.000 profissionais esperando por você

            </SectionSubtitle>

            <SectionButton 
            href="/encontrar-diarista"
            mui={{variant: "contained"}}
            >
                Encontre um(a) diarista
            </SectionButton>


         
            <div>imagem</div>
        </ContainerStyled>
    </SectionContainer>;
}

export default Presentation;