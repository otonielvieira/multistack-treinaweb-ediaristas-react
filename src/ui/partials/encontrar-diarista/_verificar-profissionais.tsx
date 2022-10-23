import { Button, Container, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";

import {
    FormElementContainer,
    ProfissionaisPaper,
    ProfissionaisContainer
} from './_verificar-profissionais.styled';

const VerificarProfissionais: React.FC<PropsWithChildren> = () => {
    return (
        <>
            <SafeEnvironment />

            <PageTitle title="Conheça os profissionais"
                subtitle="Preencha o seu endereço e veja todos os profissionais da sua localidade"
            />

            <Container sx={{ mb: 10 }}>
                <FormElementContainer>
                    <TextFieldMask mask={'99.999-999'} label={'Digite seu CEP'} fullWidth />

                    <Typography color={'error'}>Cep não encontrado</Typography>

                    <Button variant="contained" color="secondary" sx={{ width: '220px' }}>
                        Buscar
                    </Button>

                </FormElementContainer>

                <ProfissionaisPaper>
                    <ProfissionaisContainer>

                        <UserInformation name="Otoniel Vieira"
                            picture="https://github.com/otonielvieira.png"
                            rating={3}
                            description="Web Developer"
                        />
                        <UserInformation name="Otoniel Vieira"
                            picture="https://github.com/otonielvieira.png"
                            rating={3}
                            description="Cientista de Dados"
                        />
                        <UserInformation name="Otoniel Vieira"
                            picture="https://github.com/otonielvieira.png"
                            rating={3}
                            description="Python Developer"
                        />
                        <UserInformation name="Otoniel Vieira"
                            picture="https://github.com/otonielvieira.png"
                            rating={3}
                            description="Javascript Developer"
                        />

                    </ProfissionaisContainer>
                    <Container sx={{ textAlign: 'center' }}>

                        <Typography variant="body2" color={'textSecondary'} sx={{ mt: 5 }}>... mais 50 diaristas disponíveis ao seu endereço</Typography>

                        <Button variant="contained" color="secondary" sx={{ mt: 5 }}>Contratar um(a) profissional</Button>

                    </Container>
                </ProfissionaisPaper>

            </Container>
        </>
    );
};

export default VerificarProfissionais;