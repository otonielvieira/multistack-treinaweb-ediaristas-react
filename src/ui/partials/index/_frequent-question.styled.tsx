import { styled } from "@mui/material/styles";


//container da tela de perguntas frequentes
export const SectionContainer = styled('section')`
    padding-bottom: ${({ theme }) => theme.spacing(7)};
`;


//imagem em forma de onda que da o efeito da tela de perguntas frequentes
export const Wave = styled('img')`
    width: 100%;
    height: 100%;
    margin-top: -100px;
`;

//titulo de perguntas frequentes
export const SectionTitle = styled('h2')`
    margin: 0;
    text-align: center;
`;

//subtítulo


export const SectionSubtitle = styled('p')`
    position: relative;
    text-align: center;
    margin: ${({ theme }) => theme.spacing(2, 0, 10)};

   &::after{
    content: "";
    position: absolute;
    width: 96px;
    height: 6px;
    left: 50%;
    transform: translate(-50%);
    bottom: ${({theme})=>theme.spacing(-5)};
    background-color: ${({theme})=>theme.palette.grey["300"]};
   }
`;