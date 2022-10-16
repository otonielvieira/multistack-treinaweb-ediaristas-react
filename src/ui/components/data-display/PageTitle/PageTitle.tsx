import { PageTitleContainer, PageTitleStyled, PageSubTitleStyled } from "./PageTitle.stlyled";


export interface PageTitleProps {
    title: string;
    subtitle?: string;

}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{title}</PageTitleStyled>
            <PageSubTitleStyled>{subtitle}</PageSubTitleStyled>
        </PageTitleContainer>
    );
}

export default PageTitle;