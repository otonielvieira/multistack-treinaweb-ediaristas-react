import { FooterContainer, FooterTitle, FooterListItem, SocialContainer, AppList, FooterSocialList, SocialButton, FooterGrid } from "./Footer.style";
import { List, Box, Typography } from "@material-ui/core";
import Link from "ui/components/navigation/Link/Link";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterGrid>
            <div>
                <FooterTitle>Menu</FooterTitle>
                <List>
                    <FooterListItem>
                        <Link
                            href={'/encontrar-diarista'}
                            mui={{ color: 'inherit', variant: 'body2' }}
                        >
                            Encontrar uma diarista
                        </Link>
                    </FooterListItem>

                    <FooterListItem>
                        <Link
                            href={'/cadastrodiarista'}
                            mui={{ color: 'inherit', variant: 'body2' }}
                        >
                            SEja um(a) diarista
                        </Link>
                    </FooterListItem>

                    <FooterListItem>
                        <Link
                            href={'/'}
                            mui={{ color: 'inherit', variant: 'body2' }}
                        >
                            Por que usar o E-diaristas
                        </Link>
                    </FooterListItem>

                    <FooterListItem>
                        <Link
                            href={'/'}
                            mui={{ color: 'inherit', variant: 'body2' }}
                        >
                            Principais dúvidas
                        </Link>
                    </FooterListItem>

                </List>
            </div>

            <Box sx={{ maxWidth: '400px' }}>

                <FooterTitle>Quem somos</FooterTitle>

                <Typography variant={'body2'} sx={{ mt: 2 }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui unde eveniet consequatur pariatur.
                    Architecto dolores velit, ipsum, sunt impedit aliquam eveniet similique numquam ad consectetur,
                    nisi quidem officiis? Eum, quae?
                </Typography>
            </Box>

            <SocialContainer>
                <Box>
                    <FooterTitle>Baixe nossos aplicativos</FooterTitle>

                    <AppList>
                        <li>
                            <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                                <img src={'/img/logos/app-store.png'} alt={'AppStore'} />
                            </a>
                        </li>
                        <li>
                            <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                                <img src={'/img/logos/google-play.png'} alt={'GooglePlay'} />
                            </a>
                        </li>
                    </AppList>

                </Box>

                <div>
                    <FooterTitle>Redes sociais</FooterTitle>
                    <FooterSocialList>
                        <FooterListItem>
                            <SocialButton href={'/'} >
                                <i className={'twf-facebook-f'} />
                            </SocialButton>
                        </FooterListItem>
                        <FooterListItem>
                            <SocialButton href={'/'} >
                                <i className={'twf-instagram'} />
                            </SocialButton>
                        </FooterListItem>
                        <FooterListItem>
                            <SocialButton href={'/'} >
                                <i className={'twf-youtube'} />
                            </SocialButton>
                        </FooterListItem>
                    </FooterSocialList>
                </div>

            </SocialContainer>
            </FooterGrid>

        </FooterContainer>);
};

export default Footer;