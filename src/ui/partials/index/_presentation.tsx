import { ContainerStyled, SectionContainer, SectionTitle } from "./_presentation.stlyled";


const Presentation = () => {
    return <SectionContainer>
        <ContainerStyled>
            <SectionTitle>
                Encontre agora mesmo um(a) <em>diarista</em>
                <i className="twf-search"/>
            </SectionTitle>
            <div>subtitulo</div>
            <div>button</div>
            <div>imagem</div>
        </ContainerStyled>
    </SectionContainer>;
}

export default Presentation;