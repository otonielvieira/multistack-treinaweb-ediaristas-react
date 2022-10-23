import { SystemProps } from '@mui/system';
import React, { PropsWithChildren } from 'react';
// import {} from '@mui/material';
import { UserInformationContainer, UserName, UserDEscription, AVatarStyled, RatingStyled } from './UserInformation.styled';


export interface UserInformationProps {
    name: string;
    picture: string;
    rating: number;
    description?: string;
    isRating?: boolean;
    sx?: SystemProps;

}

const UserInformation: React.FC<PropsWithChildren<UserInformationProps>> = ({
    sx,
    picture,
    name,
    rating,
    description,
    isRating,
}) => {
    return (
        <UserInformationContainer sx={sx} isRating={isRating}>
            <AVatarStyled src={picture}>{name[0]}</AVatarStyled>
            <RatingStyled value={rating} readOnly />
            <UserName>{name}</UserName>
            <UserDEscription>{description}</UserDEscription>
        </UserInformationContainer>

    )
}

export default UserInformation