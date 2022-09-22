import { useEffect, useState } from "react";
import {
    ContainerStyled,
    SectionContainer,
    SectionTitle,
    SectionSubtitle,
    SectionButton,
    SectionPictureContainer,
    BottomButton
} from "./_presentation.stlyled";


const Presentation = () => {

    const [cleanerPicture, setCleanerPicture] = useState("");

    useEffect(() => {
        const newCleanPicture = Math.random() < 0.5 ? "/img/home/housekeeper.png" : "/img/home/janitor.png";
        setCleanerPicture(newCleanPicture);
    }, []);

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
                mui={{ variant: "contained" }}
            >
                Encontre um(a) diarista
            </SectionButton>

            <SectionPictureContainer>
                <img src={cleanerPicture} alt="imagem diarista" />
            </SectionPictureContainer>

        </ContainerStyled>

        <BottomButton>
            <i  className="twf-caret-down"/>
        </BottomButton>

    </SectionContainer>;
}

export default Presentation;